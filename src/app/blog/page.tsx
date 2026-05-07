export default function BlogPage() {
  const posts = [
    {
      title: "How Elite Athletes Stay Consistent",
      category: "Training",
    },
    {
      title: "Recovery Techniques That Actually Work",
      category: "Recovery",
    },
    {
      title: "Nutrition Habits For Peak Performance",
      category: "Nutrition",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-black uppercase mb-14">FitTrack Blog</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[#FF6B35]/50 transition-all"
            >
              <p className="text-[#FF6B35] text-sm uppercase tracking-wider">
                {post.category}
              </p>

              <h2 className="text-2xl font-bold mt-4 leading-snug">
                {post.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
