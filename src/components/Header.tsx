"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionPreference } from "./ReducedMotionWrapper";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].href);
  const prefersReducedMotion = useMotionPreference();

  const visibleLinks = useMemo(
    () => navLinks.filter((link) => isDesktop || link.showOnMobile !== false),
    [isDesktop]
  );

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link detection based on scroll position
  // Track viewport to adapt nav items between desktop and mobile experiences
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Keep active link aligned when visible links set changes (e.g. viewport switch)
  useEffect(() => {
    if (visibleLinks.length > 0) {
      setActiveLink((prev) => {
        const stillVisible = visibleLinks.some((link) => link.href === prev);
        return stillVisible ? prev : visibleLinks[0].href;
      });
    }
  }, [visibleLinks]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-50 w-full transition-colors duration-300",
        hasScrolled
          ? "bg-bg/80 backdrop-blur-lg border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-a text-bg font-bold text-lg">
            J
          </div>
          <span className="font-semibold text-lg">Jules L.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-md border border-line bg-surface p-1">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={clsx(
                "relative rounded-md px-4 py-1.5 text-sm transition-colors",
                activeLink === link.href
                  ? "text-accent-a font-semibold"
                  : "text-muted hover:text-text"
              )}
            >
              {activeLink === link.href && (
                prefersReducedMotion ? (
                  <span className="absolute inset-0 z-[-1] rounded-md border border-accent-a/30 bg-accent-a/10"></span>
                ) : (
                  <>
                    <motion.span
                      layoutId="active_pill"
                      className="absolute inset-0 z-[-1] rounded-md border border-accent-a/30 bg-accent-a/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <motion.span
                      layoutId="active_underline"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-accent-a via-white to-accent-a"
                      transition={{ type: "spring", stiffness: 250, damping: 28 }}
                    />
                  </>
                )
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-md bg-accent-a px-3 py-2 text-xs font-semibold text-bg transition-transform hover:scale-105 sm:px-4 sm:text-sm"
          >
            Me Contacter
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-md p-3 text-muted transition-colors hover:text-text"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 flex justify-end">
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-md p-2 text-muted transition-colors hover:text-text"
                    aria-label="Close mobile menu"
                >
                    <X size={24} />
                </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
              {visibleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-2xl font-semibold transition-colors hover:text-text",
                    activeLink === link.href ? "text-accent-a" : "text-muted"
                  )}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
               <a
                href="#contact"
                className="rounded-md bg-accent-a px-8 py-4 text-lg font-semibold text-bg transition-transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Me Contacter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
