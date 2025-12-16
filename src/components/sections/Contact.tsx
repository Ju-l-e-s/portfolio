"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative w-full snap-start">
      <div className="text-center mb-10">
        <h2 className="text-accent-a text-xs font-mono uppercase tracking-widest mb-2">Contact</h2>
        <h3 className="text-3xl font-bold text-text sm:text-4xl">On discute ?</h3>
        <p className="mt-3 text-base text-muted max-w-md mx-auto hidden md:block">
          Projet, opportunité ou discussion technique : contacte-moi.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md md:max-w-lg">
        <a
          href="mailto:jules.laconfourque@icloud.com"
          className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-a/20 flex items-center justify-center text-accent-a">
              <Mail size={18} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-text">M'écrire</span>
              <span className="block text-xs text-muted">Réponse rapide</span>
            </div>
          </div>
          <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jules-l-231377233/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-all active:scale-95"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5]">
              <Linkedin size={18} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-text">LinkedIn</span>
              <span className="block text-xs text-muted">Mon profil pro</span>
            </div>
          </div>
          <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <a
          href="https://github.com/Ju-l-e-s/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Github size={18} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-text">GitHub</span>
              <span className="block text-xs text-muted">Mon code</span>
            </div>
          </div>
          <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="absolute bottom-6 text-[10px] text-muted text-center w-full">
        © 2026 Jules L. — Backend & DevOps
      </div>
    </section>
  );
}
