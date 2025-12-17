"use client";

import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");
  const profileCards = [
    {
      id: "01",
      title: t("cards.focus.title"),
      content: t("cards.focus.desc"),
    },
    {
      id: "02",
      title: t("cards.deliverable.title"),
      content: t("cards.deliverable.desc"),
    },
    {
      id: "03",
      title: t("cards.method.title"),
      content: t("cards.method.desc"),
    },
  ];
  return (
    <section
      id="about"
      className="relative w-full h-[100dvh] overflow-hidden snap-start scroll-mt-24 flex flex-col items-center justify-center bg-bg"
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-10 px-6 md:px-8">
        {/* Mobile layout */}
        <div className="md:hidden flex h-full flex-col justify-center gap-6">
          <div className="space-y-3 text-left max-w-md">
            <h2 className="text-accent-a font-mono text-xs uppercase tracking-widest">{t("label")}</h2>
            <h3 className="text-3xl font-bold tracking-tight text-text">
              {t("title")}
            </h3>
            <p className="text-base leading-relaxed text-muted">
              {t("hook")}
            </p>
          </div>

          <div className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {profileCards.map((card) => (
              <div
                key={card.id}
                className="flex min-w-[78%] flex-col gap-3 rounded-2xl border border-white/10 bg-surface/50 px-5 py-5 snap-center shadow-sm"
              >
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent-a font-semibold">
                    {card.id}
                  </span>
                  <span className="text-text">{card.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{card.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden h-full w-full md:flex md:items-center md:justify-between md:gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-accent-a font-mono text-xs uppercase tracking-widest">{t("label")}</h2>
            <h3 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {t("title")}
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {profileCards.map((card) => (
              <div
                key={card.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-accent-a/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent-a font-semibold">
                    {card.id}
                  </span>
                  <span className="text-text">{card.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
