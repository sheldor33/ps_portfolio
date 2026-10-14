"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { SectionHeader } from "@/components/scroll-reveal";
import { roleTracks } from "@/lib/data";
import { cn } from "@/lib/utils";

const TRACK_COUNT = roleTracks.length;
const SEGMENT_VH = 55;

export function RoleTracksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const isJumping = useRef(false);
  const jumpTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollToTrack = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    isJumping.current = true;
    setActive(index);

    if (jumpTimer.current) clearTimeout(jumpTimer.current);

    const containerTop = container.offsetTop;
    const scrollable = container.offsetHeight - window.innerHeight;
    const ratio = index / (TRACK_COUNT - 1);
    const target = containerTop + scrollable * ratio;

    window.scrollTo({ top: target, behavior: "auto" });

    jumpTimer.current = setTimeout(() => {
      isJumping.current = false;
    }, 50);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);

    if (isJumping.current) return;

    const index = Math.min(
      TRACK_COUNT - 1,
      Math.max(0, Math.floor(v * TRACK_COUNT + 0.1)),
    );

    setActive((prev) => (prev === index ? prev : index));
  });

  const track = roleTracks[active];

  return (
    <section
      id="tracks"
      ref={containerRef}
      className="relative scroll-mt-20 border-t border-border/50 bg-background"
      style={{ height: `${SEGMENT_VH * TRACK_COUNT}vh` }}
    >
      <div className="sticky top-16 z-20 flex max-h-[calc(100svh-4rem)] min-h-[calc(100svh-4rem)] items-center overflow-y-auto bg-background/95 px-4 py-6 backdrop-blur-md sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            number="01 - Pick your lens"
            title="Three ways I create value"
            subtitle="Scroll through each track quickly - or tap the button to jump instantly."
          />

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {roleTracks.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => scrollToTrack(i)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 sm:text-sm",
                  active === i
                    ? "scale-[1.03] border-accent bg-accent text-accent-foreground shadow-[0_0_24px_var(--accent-glow)]"
                    : "border-border text-muted hover:border-accent/40 hover:text-foreground",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 grid gap-5 lg:grid-cols-2"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8"
                style={{
                  background: `linear-gradient(135deg, ${track.color}18, transparent 60%)`,
                }}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {track.tagline}
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{track.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {track.headline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {track.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-lg border border-border bg-card/60 px-3 py-1 text-sm font-medium"
                      style={{ borderColor: `${track.color}40` }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-3xl border border-border bg-card/40 p-5 backdrop-blur-sm">
                  <p className="font-mono text-xs text-accent">proof_of_work[]</p>
                  <ul className="mt-3 space-y-2">
                    {track.proof.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed">
                        <span style={{ color: track.color }}>▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-border bg-card/30 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    Relevant work
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {track.projects.map((p) => (
                      <span
                        key={p}
                        className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-150 ease-out"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className="font-mono text-xs text-muted">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(TRACK_COUNT).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
