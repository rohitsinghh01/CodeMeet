import { useUser } from "@clerk/clerk-react";
import { useMyInvitations } from "../hooks/useSessions";
import Navbar from "../components/Navbar";
import { CalendarIcon, MailIcon, UserIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { formatDistanceToNow } from "date-fns";

function InboxPage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { data: invitationsData, isLoading } = useMyInvitations();

  const invitations = invitationsData?.invitations || [];

  const handleJoinSession = (sessionId) => {
    navigate(`/session/${sessionId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <MailIcon className="size-8" />
            Inbox
          </h1>

          {invitations.length === 0 ? (
            <div className="text-center py-12">
              <MailIcon className="size-16 mx-auto text-base-content/30 mb-4" />
              <h2 className="text-xl font-semibold mb-2">No invitations yet</h2>
              <p className="text-base-content/70">
                When someone invites you to a session, it will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {invitations.map((invitation) => (
                <div key={invitation._id} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="avatar">
                            <div className="w-10 rounded-full">
                              <img
                                src={invitation.session.host.profileImage || "/default-avatar.png"}
                                alt={invitation.session.host.name}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold">{invitation.session.host.name}</h3>
                            <p className="text-sm text-base-content/70">
                              invited you to a session
                            </p>
                          </div>
                        </div>

                        <div className="space-y-1 mb-4">
                          <p className="font-medium">{invitation.session.problem}</p>
                          <p className="text-sm text-base-content/70 capitalize">
                            Difficulty: {invitation.session.difficulty}
                          </p>
                          <p className="text-sm text-base-content/70 flex items-center gap-1">
                            <CalendarIcon className="size-4" />
                            {formatDistanceToNow(new Date(invitation.createdAt), { addSuffix: true })}
                          </p>
                        </div>
                      </div>

                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleJoinSession(invitation.session._id)}
                      >
                        Join Session
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InboxPage;