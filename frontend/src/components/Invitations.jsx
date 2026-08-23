import { MailIcon, Loader2Icon, CheckCircleIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { formatDistanceToNow } from "date-fns";
import { getDifficultyBadgeClass } from "../lib/utils";

function Invitations({ invitations, isLoading }) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="lg:col-span-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <MailIcon className="size-5" />
              My Invitations
            </h2>
            <div className="flex items-center justify-center py-8">
              <Loader2Icon className="size-8 animate-spin text-primary" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-3">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex items-center gap-2">
            <div className="relative">
              <MailIcon className="size-5" />
              {invitations.length > 0 && (
                <span className="absolute -top-1 -right-1 size-2.5 bg-error rounded-full animate-pulse border border-base-100" />
              )}
            </div>
            My Invitations
            {invitations.length > 0 && (
              <span className="badge badge-primary badge-sm">{invitations.length}</span>
            )}
          </h2>

          {invitations.length === 0 ? (
            <div className="text-center py-8 text-base-content/70">
              <MailIcon className="size-12 mx-auto mb-3 opacity-30" />
              <p>No pending invitations</p>
            </div>
          ) : (
            <div className="space-y-3">
              {invitations.map((invitation) => (
                <div
                  key={invitation._id}
                  className="flex items-center justify-between p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{invitation.session.problem}</h3>
                      <span className={`badge badge-sm ${getDifficultyBadgeClass(invitation.session.difficulty)}`}>
                        {invitation.session.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Invited by: {invitation.session.host?.name || "Unknown"}
                    </p>
                    <p className="text-xs text-base-content/60 flex items-center gap-1 mt-1">
                      <ClockIcon className="size-3" />
                      {formatDistanceToNow(new Date(invitation.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                  <button
                    className="btn btn-primary btn-sm gap-2"
                    onClick={() => navigate(`/session/${invitation.session._id}`)}
                  >
                    <CheckCircleIcon className="size-4" />
                    Join Session
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Invitations;