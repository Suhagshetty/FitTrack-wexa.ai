// components/footer/company-section.tsx

export default function CompanySection() {
  const links = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ];

  return (
    <div>
      <h3
        className="text-white font-black text-sm tracking-[0.2em] uppercase mb-8"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Company
      </h3>

      <div className="flex flex-col gap-5">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white/35 hover:text-white transition-all duration-300 text-[15px] font-medium hover:translate-x-1"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
