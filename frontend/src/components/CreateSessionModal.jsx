import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-2xl mb-6">Create New Session</h3>

        <div className="space-y-8">
          {/* SESSION TYPE */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold">Session Type</span>
            </label>
            <div className="flex gap-4">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="open"
                  checked={roomConfig.type === "open"}
                  onChange={(e) => setRoomConfig({ ...roomConfig, type: e.target.value })}
                  className="radio radio-primary"
                />
                <span className="label-text ml-2">Open Session</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="custom"
                  checked={roomConfig.type === "custom"}
                  onChange={(e) => setRoomConfig({ ...roomConfig, type: e.target.value })}
                  className="radio radio-primary"
                />
                <span className="label-text ml-2">Custom Session</span>
              </label>
            </div>
            <p className="text-sm text-base-content/70">
              {roomConfig.type === "open"
                ? "Anyone can join this session."
                : "Only invited participants can join this session."}
            </p>
          </div>

          {/* INVITED EMAILS - only show if custom */}
          {roomConfig.type === "custom" && (
            <div className="space-y-2">
              <label className="label">
                <span className="label-text font-semibold">Invite Participants</span>
                <span className="label-text-alt text-error">*</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter email addresses, one per line..."
                value={roomConfig.invitedEmails}
                onChange={(e) => setRoomConfig({ ...roomConfig, invitedEmails: e.target.value })}
                rows={3}
              />
              <p className="text-sm text-base-content/70">
                Enter the email addresses of participants you want to invite.
              </p>
            </div>
          )}

          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold">Select Problem</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            <select
              className="select w-full"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find((p) => p.title === e.target.value);
                setRoomConfig({
                  ...roomConfig,
                  difficulty: selectedProblem.difficulty,
                  problem: e.target.value,
                });
              }}
            >
              <option value="" disabled>
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title}>
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.problem && (
            <div className="alert alert-success">
              <Code2Icon className="size-5" />
              <div>
                <p className="font-semibold">Room Summary:</p>
                <p>
                  Problem: <span className="font-medium">{roomConfig.problem}</span>
                </p>
                <p>
                  Type: <span className="font-medium capitalize">{roomConfig.type}</span>
                </p>
                <p>
                  Max Participants: <span className="font-medium">2 (1-on-1 session)</span>
                </p>
                {roomConfig.type === "custom" && (
                  <p>
                    Invited: <span className="font-medium">{roomConfig.invitedEmails.split('\n').filter(email => email.trim()).length} participants</span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary gap-2"
            onClick={onCreateRoom}
            disabled={
              isCreating ||
              !roomConfig.problem ||
              (roomConfig.type === "custom" && !roomConfig.invitedEmails.trim())
            }
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
export default CreateSessionModal;