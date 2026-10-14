import Link from "next/link";
import { ThemePreview } from "@/components/theme-preview";

export default function ThemesPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-10 text-center">
          <Link
            href="/"
            className="mb-4 inline-block text-sm text-accent hover:underline"
          >
            ← Back to portfolio
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Theme Comparison
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Compare both directions side by side. Use the moon/sun toggle on the
            live site to switch themes interactively.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ThemePreview mode="light" />
          <ThemePreview mode="dark" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Light — Bento Professional</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Soft off-white background with dot grid</li>
              <li>• White cards, subtle shadows</li>
              <li>• Violet accent — recruiter-friendly, clean</li>
              <li>• Best for: clarity, readability, corporate roles</li>
              <li>• Inspired by: Alex Dev, Joel Gabriel references</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Dark — Engineering HQ</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Deep charcoal with glass-style cards</li>
              <li>• Cyan accent — technical, dashboard feel</li>
              <li>• Subtle glow and monospace status widgets</li>
              <li>• Best for: engineer audience, private dashboard vibe</li>
              <li>• Inspired by: DevCode, developer dashboard references</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
