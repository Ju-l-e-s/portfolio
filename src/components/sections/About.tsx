"use client";

const profileCards = [
  {
    id: "01",
    title: "Focus",
    content: "APIs · Cloud delivery · DevOps",
  },
  {
    id: "02",
    title: "Livrable",
    content: "CI/CD + déploiement, environnements (dev/staging/prod), tests/lint/checks essentiels.",
  },
  {
    id: "03",
    title: "Méthode",
    content: "Itérations courtes, décisions explicites, infra versionnée, obs par défaut (logs/metrics/alertes).",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full h-[100dvh] overflow-hidden snap-start scroll-mt-24 flex flex-col items-center justify-center bg-bg"
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-10 px-6 sm:px-8">
        {/* Mobile layout */}
        <div className="md:hidden flex h-full flex-col justify-center gap-6">
          <div className="space-y-3 text-left max-w-md">
            <h2 className="text-accent-a font-mono text-xs uppercase tracking-widest">À propos</h2>
            <h3 className="text-3xl font-bold tracking-tight text-text">
              Du code au cloud.
            </h3>
            <p className="text-base leading-relaxed text-muted">
              Je ne veux pas juste que ça marche. Je veux que ça tourne en prod, stable et mesurable.
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
            <h2 className="text-accent-a font-mono text-xs uppercase tracking-widest">À propos</h2>
            <h3 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Du code au cloud
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              Ce qui m’intéresse, ce n’est pas seulement “que ça marche sur ma machine”, c’est que ça tourne en production, de façon stable, mesurable et résiliente. Je conçois des APIs et l’infrastructure légère autour : conteneurs, CI/CD, environnements reproductibles, configuration propre, et une observabilité minimale (logs/metrics/alertes). Le résultat : moins de friction, plus de confiance à chaque release.
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
