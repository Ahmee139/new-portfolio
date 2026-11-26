# Sehar Anjum, SEO Executive · Portfolio

A personal brand and portfolio site for Sehar Anjum: off-page SEO, on-page SEO and link building.

Built with **Next.js 15**, **GSAP + ScrollTrigger** and **Lenis** smooth scrolling. Includes light/dark mode and a fully responsive layout.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Add `?motion=full` to the URL to preview every animation on machines with system animations turned off.

## Build

```bash
npm run build    # static export to /out
```

Deploys to Vercel (import the repo) or any static host.

## Edit content

- **Contact details, form endpoint, ranking positions:** `lib/config.js`
- **Section text:** `components/*.jsx`
- **Styles:** `app/globals.css`
- **SEO metadata:** `app/layout.jsx`
