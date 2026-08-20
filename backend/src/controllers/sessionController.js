import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";
import Invitation from "../models/Invitation.js";

export async function createSession(req, res) {
  try {
    console.log("createSession called with body:", req.body);
    const { problem, difficulty, type = "open", invitedEmails = [] } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    console.log("createSession - userId:", userId, "clerkId:", clerkId);

    if (!problem || !difficulty) {
      console.error("createSession - Missing required fields");
      return res.status(400).json({ message: "Problem and difficulty are required" });
    }

    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    console.log("createSession - Generated callId:", callId);

    console.log("createSession - Creating session in DB...");
    const session = await Session.create({ problem, difficulty, type, host: userId, callId });
    console.log("createSession - Session created:", session._id);

    console.log("createSession - Creating Stream video call...");
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });
    console.log("createSession - Stream video call created");

    console.log("createSession - Creating chat channel...");
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();
    console.log("createSession - Chat channel created");

    if (type === "custom" && invitedEmails.length > 0) {
      console.log("createSession - Creating invitations for:", invitedEmails);
      const invitations = invitedEmails.map(email => ({
        session: session._id,
        email,
      }));
      await Invitation.insertMany(invitations);
      console.log("createSession - Invitations created");
    }

    console.log("createSession - Success!");
    res.status(201).json({ session });
  } catch (error) {
    console.error("createSession failure", {
      message: error.message,
      stack: error.stack,
      response: error.response?.data,
      code: error.code,
    });

    res.status(500).json({
      message: "Failed to create session",
      detail: error.message,
    });
  }
}

export async function getActiveSessions(req, res) {
  try {
    const userId = req.user._id;
    const userEmail = req.user.email;

    const invitations = await Invitation.find({ email: userEmail }).select("session");
    const invitedSessionIds = invitations.map((i) => i.session);

    const sessions = await Session.find({
      status: "active",
      $or: [
        { type: "open" },
        { host: userId },
        { participant: userId },
        { _id: { $in: invitedSessionIds } },
      ],
    })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    const filteredSessions = sessions.filter((session) => {
      if (session.type === "open") return true;
      if (session.host._id.toString() === userId.toString()) return true;
      if (session.participant?._id.toString() === userId.toString()) return true;
      if (invitedSessionIds.some((id) => id.toString() === session._id.toString())) return true;
      return false;
    });

    res.status(200).json({ sessions: filteredSessions });
  } catch (error) {
    console.log("Error in getActiveSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const userEmail = req.user.email;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.type === "custom") {
      const isHost = session.host._id.toString() === userId.toString();
      const isParticipant = session.participant?._id.toString() === userId.toString();
      
      if (!isHost && !isParticipant) {
        const invitation = await Invitation.findOne({
          session: id,
          email: userEmail,
        });
        
        if (!invitation) {
          return res.status(403).json({ message: "You are not invited to this session" });
        }
      }
    }

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    const userEmail = req.user.email;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res.status(400).json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join their own session as participant" });
    }

    if (session.participant) return res.status(409).json({ message: "Session is full" });

    if (session.type === "custom") {
      const invitation = await Invitation.findOne({
        session: id,
        email: userEmail,
      });
      
      if (!invitation) {
        return res.status(403).json({ message: "You are not invited to this session" });
      }
      
      if (invitation.status === "pending") {
        invitation.status = "accepted";
        await invitation.save();
      }
    }

    session.participant = userId;
    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });

    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyInvitations(req, res) {
  try {
    const userEmail = req.user.email;

    const invitations = await Invitation.find({ email: userEmail, status: "pending" })
      .populate({
        path: "session",
        populate: { path: "host", select: "name profileImage email" },
      })
      .sort({ createdAt: -1 });

    res.status(200).json({ invitations });
  } catch (error) {
    console.log("Error in getMyInvitations controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}