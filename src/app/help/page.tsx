export default function HelpPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black uppercase mb-10">Help Center</h1>

        <div className="space-y-5">
          {[
            "How to create an account",
            "Resetting your password",
            "Managing workout plans",
            "Tracking progress",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/10 rounded-2xl p-5 bg-white/[0.03]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
