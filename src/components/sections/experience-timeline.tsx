"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, SectionHeader } from "@/components/scroll-reveal";
import { experience } from "@/lib/data";

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-24 sm:scroll-mt-28 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            number="02 — Experience"
            title="Built in production"
            subtitle="Enterprise automation and AI workflows at Deloitte — with measurable outcomes."
          />
        </ScrollReveal>

        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border sm:left-[15px]" />
          <motion.div
            className="absolute left-[11px] top-0 w-px origin-top bg-accent sm:left-[15px]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <ScrollReveal key={job.id} delay={i * 0.1}>
                <div className="relative pl-10 sm:pl-12">
                  <div
                    className={`absolute left-0 top-1 h-6 w-6 rounded-full border-2 sm:h-8 sm:w-8 ${
                      job.current
                        ? "border-accent bg-accent shadow-[0_0_20px_var(--accent-glow)]"
                        : "border-border bg-card"
                    }`}
                  />

                  <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold">{job.role}</h3>
                          {job.current && (
                            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 font-medium text-accent">{job.company}</p>
                      </div>
                      <p className="font-mono text-sm text-muted">{job.period}</p>
                    </div>

                    <p className="mt-4 text-muted">{job.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.impact.map((m) => (
                        <span
                          key={m}
                          className="rounded-lg bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {job.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-border px-2 py-0.5 font-mono text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
