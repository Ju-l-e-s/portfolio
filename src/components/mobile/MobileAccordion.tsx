"use client";

type Item = { title: string; subtitle?: string; content: React.ReactNode };

export function MobileAccordion({ items }: { items: Item[] }) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <details key={i} className="group rounded-2xl border border-line bg-surface/40 p-4">
          <summary className="list-none cursor-pointer select-none">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-base font-semibold text-text">{it.title}</div>
                {it.subtitle ? (
                  <div className="mt-1 text-[13px] leading-relaxed text-muted">{it.subtitle}</div>
                ) : null}
              </div>
              <span className="mt-1 text-muted transition-transform group-open:rotate-180">⌄</span>
            </div>
          </summary>
          <div className="mt-3 text-[14px] leading-relaxed text-muted">{it.content}</div>
        </details>
      ))}
    </div>
  );
}
