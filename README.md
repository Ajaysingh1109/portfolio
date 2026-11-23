# Ajay Singh | SAARTHI - ONE

A Vite, React and TypeScript portfolio with a cinematic SNAP intro and an immediately accessible recruiter view. It uses Tailwind CSS, Framer Motion, an original SVG gauntlet, and Canvas 2D particles.

## Run locally

Use Node.js 20.19+, 22.12+, or a current compatible LTS release.

```sh
npm ci
npm run dev
npm exec tsc -- --noEmit
npm run build
npm run preview
```

## Update content

Edit `src/data.ts` for profile details, the six skill groups, work experience, projects, metrics, links and credentials. Hospital Feedback Automation is part of the Apollo Hospital experience. The hosted Saarthi OpsMind link is labeled Architecture Showcase. Replace `public/Ajay-Singh-Resume.pdf` when a new résumé is ready and `public/profile.jpg` when updating the portrait.

## Animation architecture

`SnapTransition` owns the sleeping, flash, identity reveal, reassembly, awake and disintegration states. It guards transitions, restores scrolling and focus, and removes timers when a phase changes. Browser section links and reduced-motion preference open the portfolio directly.

`Gauntlet` and `SkillGem` render the original illustration and its accessible skill labels. `ParticleCanvas` uses a small viewport snapshot of visible text, the portrait and marked surfaces as dust targets. Particle counts and device-pixel ratios are capped, with a lower budget on phones and lower-core devices. The canvas runs outside React's render cycle. Real DOM surfaces use staggered masks to complement the dust. Below-the-fold sections use Framer Motion's viewport entrance.

## Review and deploy on Vercel

Automatic Vercel deployments from `main` and `codex/cinematic-snap-portfolio` are paused in `vercel.json`. Update that configuration when ready to deploy. In the existing Vercel project, select the Vite preset, use `npm run build` and serve the `dist` directory. If the domain changes, update the absolute Open Graph URLs in `index.html`. The contact form opens a prefilled draft in the visitor's email app.
