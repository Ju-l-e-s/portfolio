"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { navLinks } from "@/config/site";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMotionPreference } from "./ReducedMotionWrapper";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
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
        <Link href="/" locale={locale} className="flex items-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10"
          >
            <path
              d="M35 30 L15 50 L35 70"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-a"
            />
            <path
              d="M50 25 V65 C50 75 45 80 35 80"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className="text-text"
            />
            <path
              d="M65 25 V75 H80"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className="text-accent-a"
            />
            <path
              d="M85 30 L105 50 L85 70"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-a"
            />
          </svg>
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
              <span className="relative z-10">{t(link.key)}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-md bg-accent-a px-3 py-2 text-xs font-semibold text-bg transition-transform hover:scale-105 sm:px-4 sm:text-sm"
          >
            {t("cta")}
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

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex h-[100dvh] w-screen flex-col bg-bg px-6 py-4 md:hidden">
          <div className="mb-12 flex w-full items-center justify-between">
            <Link
              href="/"
              locale={locale}
              className="flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <path
                  d="M35 30 L15 50 L35 70"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-a"
                />
                <path
                  d="M50 25 V65 C50 75 45 80 35 80"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="text-text"
                />
                <path
                  d="M65 25 V75 H80"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="text-accent-a"
                />
                <path
                  d="M85 30 L105 50 L85 70"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-a"
                />
              </svg>
              <span className="font-semibold text-lg">Jules L.</span>
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-muted transition-colors hover:text-text"
                aria-label="Fermer le menu"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8 text-2xl font-bold">
            {visibleLinks
              .filter((link) => link.href !== "#contact")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-accent-a"
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t(link.key)}
                </Link>
              ))}
          </nav>

          <div className="mb-8 w-full">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-accent-a py-4 font-bold text-bg transition hover:scale-[1.01]"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
