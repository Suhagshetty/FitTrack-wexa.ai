export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <p className="text-[#FF6B35] uppercase tracking-[0.3em] text-sm font-bold">
            About FitTrack
          </p>

          <h1
            className="text-6xl font-black uppercase mt-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Built for athletes who refuse to settle.
          </h1>
        </div>

        <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
          FitTrack helps athletes stay consistent, push harder, and train
          smarter. From personalized workout tracking to AI-powered fitness
          insights, we’re building the future of modern athletic performance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-10">
          {[
            ["50K+", "Active Athletes"],
            ["120+", "Workout Programs"],
            ["98%", "User Satisfaction"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border border-white/10 bg-white/[0.03] rounded-2xl p-6"
            >
              <h2 className="text-4xl font-black text-[#FF6B35]">{value}</h2>
              <p className="text-white/50 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
