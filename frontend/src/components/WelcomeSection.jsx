import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon,  Code2Icon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-base-200 via-base-300 to-base-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 animate-fade-in">
              <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg animate-gradient">
              <Code2Icon className="size-5 sm:size-6 text-white" />
            </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome back, {user?.firstName || "there"}!
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-base-content/60 ml-0 sm:ml-14 lg:ml-16">
              Ready to ace your next technical interview?
            </p>
          </div>
          <button
            onClick={onCreateSession}
            className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary rounded-xl sm:rounded-2xl transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-xl w-full lg:w-auto"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg">
              <ZapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;