"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, SectionHeader } from "@/components/scroll-reveal";
import { skills } from "@/lib/data";
import { useHorizontalWheel } from "@/lib/use-horizontal-wheel";
import { cn } from "@/lib/utils";

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const barWidth =
    skill.level === "Production"
      ? "92%"
      : skill.level === "Strong"
        ? "78%"
        : "60%";

  return (
    <div
      className="group relative h-[260px] w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-colors hover:border-accent/30 sm:w-[240px]"
      style={{ borderTopColor: skill.color, borderTopWidth: 3 }}
    >
      <p className="font-mono text-[10px] text-muted">
        {String(index + 1).padStart(2, "0")} · {skill.category}
      </p>
      <h3 className="mt-3 text-xl font-bold" style={{ color: skill.color }}>
        {skill.name}
      </h3>
      <p className="mt-1 text-xs font-medium text-accent">{skill.level}</p>
      <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted">
        {skill.description}
      </p>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="h-1 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ background: skill.color, width: barWidth }}
          />
        </div>
      </div>
    </div>
  );
}

export function SkillScrollSection() {
  const zoneRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useHorizontalWheel(zoneRef, scrollerRef, updateScrollState);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 256;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
    setTimeout(updateScrollState, 400);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-28">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeader
              number="04 — Skill Box"
              title="Technologies I ship with"
              subtitle={`${skills.length} skills — move cursor into the box below, then scroll wheel goes left/right.`}
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollBy("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll skills left"
          className={cn(
            "absolute -left-1 top-[calc(50%-1rem)] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 shadow-md backdrop-blur-sm transition-all hover:bg-card-hover sm:flex",
            !canScrollLeft && "pointer-events-none opacity-30",
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollBy("right")}
          disabled={!canScrollRight}
          aria-label="Scroll skills right"
          className={cn(
            "absolute -right-1 top-[calc(50%-1rem)] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 shadow-md backdrop-blur-sm transition-all hover:bg-card-hover sm:flex",
            !canScrollRight && "pointer-events-none opacity-30",
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={zoneRef}
          onPointerEnter={() => setIsHovering(true)}
          onPointerLeave={() => setIsHovering(false)}
          className={cn(
            "skill-wheel-zone touch-pan-x rounded-2xl border border-dashed p-3 transition-colors duration-200 sm:p-4",
            isHovering
              ? "border-accent/50 bg-accent/5"
              : "border-border/60 bg-card/20",
          )}
        >
          <div
            ref={scrollerRef}
            onScroll={updateScrollState}
            className="skill-scroll-rail flex gap-4 overflow-x-auto overscroll-x-contain py-1 pl-1 pr-1"
          >
            {skills.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} index={i} />
            ))}
          </div>

          <p className="mt-3 text-center font-mono text-[10px] text-muted sm:text-xs">
            {isHovering
              ? "↕ wheel → ↔ skills · at ends, page scrolls normally"
              : "hover box · wheel scrolls skills horizontally"}
          </p>
        </div>
      </div>
    </section>
  );
}
