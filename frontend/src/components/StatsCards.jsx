import { TrophyIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
      {/* Active Count */}
      <div className="card bg-base-100 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="card-body p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-xl sm:rounded-2xl">
              <UsersIcon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="badge badge-primary badge-sm sm:badge-md">Live</div>
          </div>
          <div className="text-2xl sm:text-4xl font-black mb-1">{activeSessionsCount}</div>
          <div className="text-xs sm:text-sm opacity-60">Active Sessions</div>
        </div>
      </div>

      {/* Recent Count */}
      <div className="card bg-base-100 border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="card-body p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 sm:p-3 bg-secondary/10 rounded-xl sm:rounded-2xl">
              <TrophyIcon className="w-5 h-5 sm:w-7 sm:h-7 text-secondary" />
            </div>
            <TrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
          </div>
          <div className="text-2xl sm:text-4xl font-black mb-1">{recentSessionsCount}</div>
          <div className="text-xs sm:text-sm opacity-60">Total Sessions</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;