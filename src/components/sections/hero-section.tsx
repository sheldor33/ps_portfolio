"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col px-4 pb-8 pt-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-xs backdrop-blur-sm sm:text-sm"
        >
          <span className="status-dot h-2 w-2 rounded-full bg-success" />
          <span className="text-muted">{profile.availability}</span>
        </motion.div>

        <div className="grid flex-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="font-mono text-sm text-accent sm:text-base"
            >
              pranshu@engineering-hq ~ %
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-4 text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight"
            >
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-gradient">{profile.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-xl text-lg text-muted sm:text-xl"
            >
              {profile.role} who ships{" "}
              <span className="text-foreground">backend systems</span>,{" "}
              <span className="text-foreground">AI workflows</span>, and{" "}
              <span className="text-foreground">rigorous solutions</span> — not
              slide decks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Explore my tracks
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-card-hover"
              >
                <Mail className="h-4 w-4" />
                Hire me
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent/50 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden rounded-2xl border border-border bg-card/40 p-5 font-mono text-xs backdrop-blur-md lg:block lg:min-w-[280px]"
          >
            <p className="text-accent">$ cat status.json</p>
            <pre className="mt-3 leading-relaxed text-muted">
{`{
  "role": "${profile.jobTitle}",
  "stack": [
    "Python", "LangChain",
    "Node.js", "React"
  ],
  "impact": {
    "accuracy": "96%",
    "effort_saved": "75%"
  },
  "status": "ready_to_ship"
}`}
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className="rounded-xl border border-border bg-card/30 px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#tracks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-2 self-center text-xs text-muted"
        >
          <span className="font-mono">scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
