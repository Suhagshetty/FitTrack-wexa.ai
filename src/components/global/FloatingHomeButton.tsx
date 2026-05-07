"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingHomeButton() {
  const pathname = usePathname();

  // Hide on homepage
  if (pathname === "/") return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <Link
        href="/#hero"
        className="group flex items-center gap-2 bg-[#FF6B35] hover:bg-orange-500 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <Home className="w-5 h-5" />

        <span className="font-bold text-sm uppercase tracking-wide">Home</span>
      </Link>
    </motion.div>
  );
}
