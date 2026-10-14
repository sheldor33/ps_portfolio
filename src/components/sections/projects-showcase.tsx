"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ExternalLink, FolderGit2, FileText } from "lucide-react";
import { ScrollReveal, SectionHeader } from "@/components/scroll-reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  className,
}: {
  project: (typeof projects)[number];
  index: number;
  className?: string;
}) {
  const github = "github" in project ? project.github : undefined;
  const live = "live" in project ? project.live : undefined;
  const hasLinks = Boolean(github || live);

  return (
    <motion.article
      whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-br p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8",
        project.gradient,
        project.featured && "ring-1 ring-accent/25",
        className,
      )}
    >
      <div className="absolute right-5 top-5 font-mono text-5xl font-bold text-foreground/[0.04] sm:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted">
          {project.category}
        </span>
        <span className="font-mono text-xs text-muted">{project.period}</span>
        {project.featured && (
          <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{project.title}</h3>

      {project.impact[0] && (
        <p className="mt-3 inline-flex w-fit rounded-lg border border-accent/20 bg-accent-soft px-3 py-1.5 text-sm font-semibold text-accent">
          {project.impact[0]}
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        {project.description}
      </p>

      <ul className="mt-5 flex-1 space-y-2">
        {project.impact.slice(1).map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed">
            <span className="shrink-0 text-accent">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4 border-t border-border/60 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={`/work/${project.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:border-accent/60"
          >
            <FileText className="h-3.5 w-3.5" />
            Case study
          </Link>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/50 px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent/40 hover:text-accent"
            >
              <FolderGit2 className="h-3.5 w-3.5" />
              GitHub
            </a>
          ) : null}
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/50 px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          ) : null}
          {!hasLinks ? (
            <span className="inline-flex items-center font-mono text-[10px] text-muted">
              Enterprise — details on request
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function ScrollProjectTile({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const stagger = index * 0.04;

  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: [`start ${0.92 - stagger}`, `start ${0.42 - stagger}`],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.85,
    restDelta: 0.001,
  });

  const y = useTransform(smooth, [0, 1], [72, 0]);
  const opacity = useTransform(smooth, [0, 0.35, 1], [0, 0.7, 1]);
  const scale = useTransform(smooth, [0, 1], [0.92, 1]);
  const x = useTransform(smooth, [0, 1], [index % 2 === 0 ? -32 : 32, 0]);
  const rotate = useTransform(smooth, [0, 1], [index % 2 === 0 ? -1.5 : 1.5, 0]);
  const glow = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={tileRef}
      style={{ y, opacity, scale, x, rotateZ: rotate }}
      className="relative will-change-transform"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl"
        style={{
          opacity: glow,
          boxShadow:
            "0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent), 0 24px 48px -24px color-mix(in srgb, var(--accent) 25%, transparent)",
        }}
      />
      <ProjectCard project={project} index={index} />
    </motion.div>
  );
}

function DesktopProjectsGrid() {
  return (
    <div className="hidden gap-5 lg:grid lg:grid-cols-2 lg:items-stretch">
      {projects.map((project, i) => (
        <ScrollProjectTile key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}

export function ProjectsShowcase() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            number="03 — Projects"
            title="Proof, not promises"
              subtitle={`${projects.length} projects — each tile fades in, slides up, and glows as you scroll.`}
          />
        </ScrollReveal>

        <DesktopProjectsGrid />

        <div className="mt-2 space-y-5 lg:hidden">
          {projects.map((project, i) => (
            <ScrollProjectTile key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
