import Link from "next/link";
import { profile } from "@/lib/data";

const links = [
  { href: "/#tracks", label: "Tracks" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · {profile.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-center font-mono text-xs text-muted">
        Built with Next.js · TypeScript · Framer Motion — this portfolio is the
        product.
      </p>
    </footer>
  );
}
