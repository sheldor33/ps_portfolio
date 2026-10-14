import { profile, projects } from "@/lib/data";

type ThemePreviewProps = {
  mode: "light" | "dark";
};

const themes = {
  light: {
    label: "Light — Bento Professional",
    bg: "#f4f6fb",
    card: "#ffffff",
    border: "#e2e8f0",
    text: "#0f172a",
    muted: "#64748b",
    accent: "#7c3aed",
    accentSoft: "#ede9fe",
    dot: "rgba(124, 58, 237, 0.06)",
  },
  dark: {
    label: "Dark — Engineering HQ",
    bg: "#09090f",
    card: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
    text: "#f1f5f9",
    muted: "#94a3b8",
    accent: "#22d3ee",
    accentSoft: "rgba(34, 211, 238, 0.12)",
    dot: "rgba(34, 211, 238, 0.04)",
  },
};

export function ThemePreview({ mode }: ThemePreviewProps) {
  const t = themes[mode];

  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
      <div
        className="border-b px-4 py-3 text-sm font-medium"
        style={{ background: t.card, color: t.text, borderColor: t.border }}
      >
        {t.label}
      </div>

      <div
        className="p-4"
        style={{
          background: t.bg,
          backgroundImage: `radial-gradient(circle, ${t.dot} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        {/* Mini header */}
        <div
          className="mb-4 flex items-center justify-between rounded-xl border px-3 py-2"
          style={{ background: t.card, borderColor: t.border }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold"
              style={{ background: t.accent, color: mode === "light" ? "#fff" : "#0c1222" }}
            >
              PS
            </div>
            <span className="text-sm font-semibold" style={{ color: t.text }}>
              {profile.name}
            </span>
          </div>
          <div className="flex gap-2 text-xs" style={{ color: t.muted }}>
            <span>Work</span>
            <span>About</span>
          </div>
        </div>

        {/* Mini bento */}
        <div className="grid grid-cols-6 gap-2">
          {/* Hero */}
          <div
            className="col-span-4 rounded-xl border p-3"
            style={{ background: t.card, borderColor: t.border }}
          >
            <div className="flex items-center gap-1.5 text-[10px]" style={{ color: t.muted }}>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#10b981" }}
              />
              Open to opportunities
            </div>
            <p className="mt-2 text-sm font-bold" style={{ color: t.text }}>
              {profile.name}
            </p>
            <p className="text-[10px]" style={{ color: t.muted }}>
              {profile.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
              Python automation, LLMs & AI/ML at Deloitte.
            </p>
            <div
              className="mt-2 inline-block rounded-md px-2 py-1 text-[10px] font-medium"
              style={{ background: t.accent, color: mode === "light" ? "#fff" : "#0c1222" }}
            >
              View Work
            </div>
          </div>

          {/* Status */}
          <div
            className="col-span-2 rounded-xl border p-3 font-mono text-[9px]"
            style={{ background: t.card, borderColor: t.border, color: t.muted }}
          >
            <p className="font-sans text-[10px] font-medium" style={{ color: t.text }}>
              Status
            </p>
            <p className="mt-2">● Operational</p>
            <p>Learning: K8s</p>
            <p>Focus: ML</p>
          </div>

          {/* Stats */}
          {profile.stats.slice(0, 3).map((s) => (
            <div
              key={s.label}
              className="col-span-2 rounded-xl border p-2 text-center"
              style={{ background: t.card, borderColor: t.border }}
            >
              <p className="text-sm font-bold" style={{ color: t.accent }}>
                {s.value}
              </p>
              <p className="text-[9px]" style={{ color: t.muted }}>
                {s.label}
              </p>
            </div>
          ))}

          {/* Project card */}
          <div
            className="col-span-6 rounded-xl border p-3"
            style={{ background: t.card, borderColor: t.border }}
          >
            <p className="text-[9px]" style={{ color: t.muted }}>
              {projects[1].period}
            </p>
            <p className="text-xs font-bold" style={{ color: t.text }}>
              {projects[1].title}
            </p>
            <p className="mt-1 text-[10px]" style={{ color: t.muted }}>
              96% accuracy · LLM health report analysis
            </p>
            <div className="mt-2 flex gap-1">
              {["Python", "LLM", "NLP"].map((tag) => (
                <span
                  key={tag}
                  className="rounded px-1.5 py-0.5 font-mono text-[8px]"
                  style={{ background: t.accentSoft, color: t.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
