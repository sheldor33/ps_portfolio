"use client";

import { useState } from "react";
import {
  Brain,
  ChartColumn,
  Download,
  FolderGit2,
  GraduationCap,
  Link2,
  Mail,
  Phone,
  Rocket,
  Settings,
} from "lucide-react";
import { ScrollReveal, SectionHeader } from "@/components/scroll-reveal";
import {
  profile,
  whyHireMe,
  education,
  certifications,
  publication,
  lookingFor,
  skillCategories,
} from "@/lib/data";

const iconMap = {
  engineering: Settings,
  brain: Brain,
  rocket: Rocket,
  chart: ChartColumn,
};

const SKILL_PREVIEW = 5;

function SkillCategoryMap() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((cat) => {
        const isOpen = !!expanded[cat.title];
        const visible = isOpen ? cat.items : cat.items.slice(0, SKILL_PREVIEW);
        const hiddenCount = cat.items.length - SKILL_PREVIEW;

        return (
          <div key={cat.title}>
            <p className="text-sm font-semibold">{cat.title}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {visible.map((item) => (
                <span
                  key={item}
                  className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted"
                >
                  {item}
                </span>
              ))}
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [cat.title]: !prev[cat.title],
                    }))
                  }
                  className="rounded border border-accent/40 bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-accent transition-colors hover:border-accent/70"
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen
                      ? `Hide extra ${cat.title} skills`
                      : `Show ${hiddenCount} more ${cat.title} skills`
                  }
                >
                  {isOpen ? "−" : `+${hiddenCount}`}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CredentialsSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 py-24 sm:scroll-mt-28 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            number="05 — The full picture"
            title="Credentials & conviction"
            subtitle="Education, certifications, and the case for why you should reach out today."
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-12">
          {whyHireMe.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <ScrollReveal
                key={item.title}
                delay={i * 0.08}
                className="lg:col-span-3"
              >
                <div className="h-full rounded-2xl border border-border bg-card/30 p-5 backdrop-blur-sm">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" />
                <h3 className="font-bold">Education</h3>
              </div>
              <p className="mt-3 font-semibold">{education.school}</p>
              <p className="text-sm text-muted">{education.degree}</p>
              <p className="mt-2 font-mono text-sm text-accent">
                GPA {education.gpa} · {education.period}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm">
              <h3 className="font-bold">Certifications & Research</h3>
              <div className="mt-4 space-y-2">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-lg border border-border px-3 py-2 text-sm"
                  >
                    {c.title}
                    <span className="text-muted"> — {c.issuer}</span>
                  </div>
                ))}
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-accent/30 bg-accent-soft px-3 py-2 transition-colors hover:border-accent/50"
                >
                  <p className="text-xs font-medium text-accent">
                    {publication.venue} ↗
                  </p>
                  <p className="mt-1 text-sm">{publication.title}</p>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-5">
          <div className="rounded-2xl border border-border bg-card/20 p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              Full stack map
            </h3>
            <SkillCategoryMap />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function RecruiterCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 pb-24 pt-8 sm:scroll-mt-28 sm:px-6 sm:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/10 via-card/40 to-transparent p-8 sm:p-12 md:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              06 — Let&apos;s build
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
              Hiring for Backend, AI, or DSA-heavy roles?
              <span className="text-gradient"> Let&apos;s talk.</span>
            </h2>

            <p className="mt-4 flex items-center gap-2 text-success">
              <span className="status-dot h-2 w-2 rounded-full bg-success" />
              {lookingFor.status}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {lookingFor.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}?subject=Interview%20-%20Pranshu%20Sharma`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                Email me — pranshusharmaabpl1@gmail.com
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-card-hover"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-dashed border-accent/50 px-8 py-4 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              {profile.social.github ? (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-card-hover"
                >
                  <FolderGit2 className="h-4 w-4" />
                  GitHub
                </a>
              ) : null}
              {profile.social.linkedin ? (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-card-hover"
                >
                  <Link2 className="h-4 w-4" />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </ScrollReveal>

        <p className="mt-8 text-center font-mono text-xs text-muted">
          Built with Next.js · TypeScript · Framer Motion — this portfolio is the
          product.
        </p>
      </div>
    </section>
  );
}
