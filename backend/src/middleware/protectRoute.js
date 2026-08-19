import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      console.log("protectRoute: clerkId =", clerkId);

      if (!clerkId) {
        console.error("protectRoute: No clerkId found - returning 401");
        return res.status(401).json({ message: "Unauthorized - invalid token" });
      }

      let user = await User.findOne({ clerkId });

      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);
        const newUser = {
          clerkId: clerkUser.id,
          email: clerkUser.emailAddresses[0]?.emailAddress,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
          profileImage: clerkUser.imageUrl,
        };

        user = await User.create(newUser);

        await upsertStreamUser({
          id: newUser.clerkId.toString(),
          name: newUser.name,
          image: newUser.profileImage,
        });
        
        console.log("✅ User created in DB:", user.email);
      }

      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];