import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { CTASection } from "@/components/landing/CtaFooter";
import { Footer } from "@/components/landing/CtaFooter";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
