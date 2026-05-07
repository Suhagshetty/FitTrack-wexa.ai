export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-black uppercase mb-10">Contact</h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4"
          />

          <button className="bg-[#FF6B35] px-6 py-3 rounded-xl font-bold">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
