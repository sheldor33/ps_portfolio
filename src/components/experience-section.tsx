import { Briefcase, ChevronDown } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <div id="experience" className="md:col-span-12">
      <div className="mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-accent" />
        <h2 className="text-xl font-bold">Experience</h2>
      </div>
      <div className="space-y-4">
        {experience.map((job) => (
          <BentoCard key={job.id}>
            <details className="group">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold">{job.role}</h3>
                      {job.current && (
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted">{job.period}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {job.summary}
                    </p>
                  </div>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
                </div>
              </summary>

              <div className="mt-5 border-t border-border pt-5">
                {job.impact.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {job.impact.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-lg bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed">
                      <span className="text-accent">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          </BentoCard>
        ))}
      </div>
    </div>
  );
}
