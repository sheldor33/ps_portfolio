import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { getProject, getProjectIds } from "@/lib/data";

export function generateStaticParams() {
  return getProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Case Study | Pranshu Sharma`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;
  const github = "github" in project ? project.github : undefined;
  const live = "live" in project ? project.live : undefined;

  return (
    <main className="px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="text-sm text-accent transition-opacity hover:opacity-80"
        >
          ← Back to work
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">
          Case study · {project.category} · {project.period}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.description}</p>

        {(github || live) && (
          <div className="mt-6 flex flex-wrap gap-2">
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/40 px-3 py-2 text-sm font-medium hover:border-accent/40 hover:text-accent"
              >
                <FolderGit2 className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent-soft px-3 py-2 text-sm font-medium text-accent hover:border-accent/60"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            ) : null}
          </div>
        )}

        <section className="mt-12">
          <h2 className="text-xl font-bold">Problem</h2>
          <p className="mt-3 leading-relaxed text-muted">{caseStudy.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Approach</h2>
          <ul className="mt-3 space-y-2">
            {caseStudy.approach.map((item) => (
              <li key={item} className="flex gap-2 text-muted">
                <span className="shrink-0 text-accent">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Decisions</h2>
          <ul className="mt-3 space-y-2">
            {caseStudy.decisions.map((item) => (
              <li key={item} className="flex gap-2 text-muted">
                <span className="shrink-0 text-accent">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenges</h2>
          <ul className="mt-3 space-y-2">
            {caseStudy.challenges.map((item) => (
              <li key={item} className="flex gap-2 text-muted">
                <span className="shrink-0 text-accent">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Results</h2>
          <ul className="mt-3 space-y-2">
            {caseStudy.results.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="shrink-0 text-accent">▸</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Tech
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-card/40 px-2.5 py-1 font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <p className="mt-12 text-sm text-muted">
          Want the walkthrough?{" "}
          <Link href="/#contact" className="text-accent hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
