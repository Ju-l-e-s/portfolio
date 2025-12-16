"use client";

type Props = {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
};

export default function MobileSection({ id, kicker, title, lead, children }: Props) {
  return (
    <section id={id} className="md:hidden scroll-mt-24 py-14">
      <div className="mx-auto max-w-[560px] px-4">
        <div className="mb-6">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-accent-a">{kicker}</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-text">{title}</h2>
          {lead ? <p className="mt-3 text-[15px] leading-relaxed text-muted">{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
