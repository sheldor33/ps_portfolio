# Recruiter-ready + Deploy Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox syntax.

**Goal:** Ship case studies, footer/SEO polish, and Vercel deploy for the public portfolio.

**Architecture:** Extend `projects` with `caseStudy` content; add App Router dynamic page `/work/[id]`; shared Footer in layout; Next Metadata API + sitemap/robots; git + Vercel.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind 4, Framer Motion (existing)

## Global Constraints

- Preserve existing visual language and section structure
- No proprietary Deloitte secrets in case studies
- B/C features out of scope

---

### Task 1: Case study data

- [ ] Add `caseStudy` fields to all projects in `src/lib/data.ts`
- [ ] Export helper `getProject(id)` / `getProjectIds()`

### Task 2: Case study page + tile links

- [ ] Create `src/app/work/[id]/page.tsx` with static params
- [ ] Add Case study link on project cards in `projects-showcase.tsx`

### Task 3: Footer + SEO

- [ ] Create `src/components/footer.tsx`, mount in `layout.tsx`
- [ ] Expand `metadata` / OG in `layout.tsx`
- [ ] Add `src/app/sitemap.ts`, `src/app/robots.ts`, favicon via `icon.tsx` or SVG

### Task 4: Nav scroll polish

- [ ] Add `scroll-mt-*` to experience / about sections missing it

### Task 5: Verify + deploy

- [ ] `npm run build` passes
- [ ] Init git, push GitHub, deploy Vercel (or give exact steps if CLI auth blocked)
