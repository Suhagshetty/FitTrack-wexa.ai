"use client";

// Shimmer animation base
function Shimmer({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-white/5 ${className}`}
      style={style}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.06), transparent)",
        }}
      />
    </div>
  );
}

// Stat card skeleton
function StatCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/8 p-5 bg-white/[0.03]">
      <div className="flex items-start justify-between mb-3">
        <Shimmer className="w-9 h-9 rounded-xl" />
        <Shimmer className="w-16 h-5 rounded-full" />
      </div>
      <Shimmer className="w-20 h-8 rounded-lg mb-1" />
      <Shimmer className="w-12 h-3 rounded mt-1" />
      <Shimmer className="w-24 h-3 rounded mt-1" />
    </div>
  );
}

// Chart skeleton
function ChartSkeleton() {
  return (
    <div className="rounded-2xl border border-white/8 p-6 bg-white/[0.03]">
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-1.5">
          <Shimmer className="w-32 h-5 rounded" />
          <Shimmer className="w-40 h-3 rounded" />
        </div>
        <Shimmer className="w-24 h-6 rounded-full" />
      </div>
      {/* Bars */}
      <div className="flex items-end gap-2 h-32 mb-3">
        {[65, 40, 80, 55, 90, 30, 70].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <Shimmer
              className="w-full rounded-t-lg"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="flex-1 flex justify-center">
            <Shimmer className="w-4 h-3 rounded" />
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-4 border-t border-white/8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="text-center space-y-1">
            <Shimmer className="w-12 h-5 rounded mx-auto" />
            <Shimmer className="w-10 h-3 rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Workout skeleton
function WorkoutSkeleton() {
  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.03]">
      <div className="px-6 pt-6 pb-4 border-b border-white/6">
        <div className="flex items-start justify-between mb-3">
          <div className="space-y-1.5">
            <Shimmer className="w-28 h-5 rounded" />
            <Shimmer className="w-36 h-3 rounded" />
          </div>
          <Shimmer className="w-10 h-8 rounded" />
        </div>
        <Shimmer className="w-full h-1.5 rounded-full" />
      </div>
      <div className="px-4 py-2 space-y-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-3">
            <Shimmer className="w-5 h-5 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Shimmer className="w-32 h-4 rounded" />
              <Shimmer className="w-24 h-3 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 pb-6 pt-2">
        <Shimmer className="w-full h-12 rounded-xl" />
      </div>
    </div>
  );
}

// Quick actions skeleton
function QuickActionsSkeleton() {
  return (
    <div className="rounded-2xl border border-white/8 p-5 bg-white/[0.03]">
      <Shimmer className="w-28 h-5 rounded mb-4" />
      <div className="space-y-2">
        {[0, 1, 2].map((i) => (
          <Shimmer key={i} className="w-full h-12 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <ChartSkeleton />
          {/* Recent workouts skeleton */}
          <div className="rounded-2xl border border-white/8 p-5 bg-white/[0.03]">
            <Shimmer className="w-36 h-5 rounded mb-4" />
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shimmer className="w-10 h-10 rounded-xl flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <Shimmer className="w-28 h-4 rounded" />
                    <Shimmer className="w-20 h-3 rounded" />
                  </div>
                  <Shimmer className="w-14 h-6 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <QuickActionsSkeleton />
          <WorkoutSkeleton />
        </div>
      </div>
    </div>
  );
}
