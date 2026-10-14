import Link from "next/link";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/#tracks", label: "Tracks" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
            {profile.initials}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">{profile.name}</p>
            <p className="font-mono text-[10px] text-muted">engineering-hq</p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm text-muted transition-colors hover:bg-card hover:text-foreground sm:px-3"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Hire me
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
