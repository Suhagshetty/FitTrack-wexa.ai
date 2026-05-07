export default function CareersPage() {
  const jobs = [
    "Frontend Developer",
    "UI/UX Designer",
    "AI Engineer",
    "Fitness Content Strategist",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <p className="text-[#FF6B35] uppercase tracking-[0.3em] text-sm font-bold">
            Careers
          </p>

          <h1 className="text-6xl font-black uppercase mt-4">
            Join the FitTrack team.
          </h1>
        </div>

        <div className="space-y-5">
          {jobs.map((job) => (
            <div
              key={job}
              className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 flex items-center justify-between"
            >
              <h2 className="text-2xl font-bold">{job}</h2>

              <button className="bg-[#FF6B35] px-5 py-2 rounded-xl font-bold">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
