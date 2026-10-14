# Recruiter-ready portfolio (Option A) + deploy

**Status:** Approved  
**Date:** 2026-10-14

## Goal

Make the public portfolio interview-ready: case studies, ship polish (footer/SEO), and deploy to Vercel. Engineering notes (B) and private HQ (C) remain post-launch.

## Scope

### In
1. Case study routes `/work/[id]` for all projects in `projects`
2. Case study CTA on project tiles
3. Site footer with nav + socials
4. Metadata / Open Graph / favicon / sitemap / robots
5. Scroll-margin consistency on key section IDs
6. Deploy to Vercel (Hobby); document Hostinger DNS for custom domain

### Out
- Engineering / Learnings / Writing / How I Think (B)
- Private job tracker / auth (C)
- BuildYourPassword production host (Render later)
- Custom subdomain cutover until domain DNS is live

## Data model

Extend each project with optional `caseStudy`:

```ts
caseStudy: {
  problem: string;
  approach: string[];
  decisions: string[];
  challenges: string[];
  results: string[];
}
```

Enterprise projects stay high-level (no proprietary system details or secrets).

## UI

- `/work/[id]`: back link, title, problem, approach, decisions, challenges, results, tech, GitHub/live
- Showcase tiles: “Case study” → `/work/[id]`
- Footer on all pages via layout
- Existing visual language (accent, borders, typography) preserved

## Deploy

- GitHub repo + Vercel project from `main`
- Apex/www custom domain instructions for Hostinger DNS (user applies records)
