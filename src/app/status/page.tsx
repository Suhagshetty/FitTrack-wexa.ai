export default function StatusPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-6xl font-black uppercase">System Status</h1>

        <div className="border border-green-500/20 bg-green-500/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-green-400">
            All Systems Operational
          </h2>
        </div>
      </div>
    </main>
  );
}
