"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";

export function Contact() {
  const t = useTranslations("contact");
  const encodedEmail = site.contact.emailBase64;

  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      const decoded = typeof atob !== "undefined" ? atob(encodedEmail) : "";
      if (decoded) {
        window.location.href = `mailto:${decoded}`;
      }
    } catch (error) {
      console.error("Unable to open mail client", error);
    }
  };

  return (
    <section id="contact" className="relative w-full snap-start snap-always h-[100svh] md:h-[100dvh] overflow-hidden">
      {/* Mobile */}
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center px-6 sm:px-8 md:hidden">
        <div className="flex w-full flex-1 flex-col items-center justify-center pb-8">
          <div className="mb-10 w-full text-center">
            <h2 className="mb-2 text-xs font-mono uppercase tracking-widest text-accent-a">{t("label")}</h2>
            <h3 className="text-3xl font-bold text-text">{t("title")}</h3>
          </div>

          <div className="flex w-full max-w-md flex-col gap-4">
            <a
              href="#"
              onClick={handleEmailClick}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all active:scale-95 hover:bg-white/10"
              aria-label={t("email.title")}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-a/20 text-accent-a">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-text">{t("email.title")}</span>
                  <span className="block text-xs text-muted">{t("email.desc")}</span>
                </div>
              </div>
              <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-[#0077b5]/20 bg-[#0077b5]/10 p-4 transition-all active:scale-95 hover:bg-[#0077b5]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077b5]/20 text-[#0077b5]">
                  <Linkedin size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-text">{t("linkedin.title")}</span>
                  <span className="block text-xs text-muted">{t("linkedin.desc")}</span>
                </div>
              </div>
              <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all active:scale-95 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <Github size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-text">{t("github.title")}</span>
                  <span className="block text-xs text-muted">{t("github.desc")}</span>
                </div>
              </div>
              <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="mt-auto w-full text-center text-[10px] text-muted">{t("footer")}</div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex h-full w-full flex-col items-center justify-center relative overflow-hidden bg-bg">
        <div className="z-10 flex flex-col items-center gap-8 w-full max-w-2xl px-6">
          <h2 className="text-accent-a text-sm font-mono uppercase tracking-widest">{t("label")}</h2>
          <h3 className="text-4xl font-bold text-text">{t("title")}</h3>
          <p className="text-base text-muted text-center max-w-xl">
            {t("description")}
          </p>

          <div className="grid w-full gap-4">
            <a
              href="#"
              onClick={handleEmailClick}
              className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
              aria-label={t("email.title")}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-a/20 flex items-center justify-center text-accent-a">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-text">{t("email.title")}</span>
                  <span className="block text-xs text-muted">{t("email.desc")}</span>
                </div>
              </div>
              <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-all active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5]">
                  <Linkedin size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-text">{t("linkedin.title")}</span>
                  <span className="block text-xs text-muted">{t("linkedin.desc")}</span>
                </div>
              </div>
              <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Github size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-text">{t("github.title")}</span>
                  <span className="block text-xs text-muted">{t("github.desc")}</span>
                </div>
              </div>
              <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <footer className="absolute bottom-8 text-xs text-muted">
          {t("footer")}
        </footer>
      </div>
    </section>
  );
}
