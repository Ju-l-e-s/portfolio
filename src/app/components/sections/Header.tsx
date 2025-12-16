"use client";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0% -45% 0%", threshold: 0.1 }
    );

    navLinks.forEach((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 h-20 sm:h-24 border-b border-transparent",
        scrolled
          ? "bg-black/40 backdrop-blur-md border-white/10"
          : "bg-black/10 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          JL
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium transition-colors relative group cursor-pointer text-white/80 hover:text-white"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #22d3ee 0%, #a855f7 50%, #22d3ee 100%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                    transition={{
                      layout: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                      backgroundPosition: {
                        duration: 1.8,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
            </span>
            <span className="font-bold text-white leading-none tracking-wide text-xs">
              DISPONIBLE
            </span>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group cursor-pointer gradient-animated-text text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-xs px-4 py-2 gap-1.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-10"></div>
            <span className="relative z-20">Let's Talk</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            Menu
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
