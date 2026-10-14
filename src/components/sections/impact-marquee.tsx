import { impactMarquee } from "@/lib/data";

export function ImpactMarquee() {
  const items = [...impactMarquee, ...impactMarquee];

  return (
    <section className="border-y border-border bg-card/20 py-4 backdrop-blur-sm">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max gap-8">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-8 font-mono text-sm text-muted"
            >
              <span className="text-accent">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
