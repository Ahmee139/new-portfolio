# BUILD PLAN: Sehar Anjum, SEO Executive
### Master Creative Brief + Claude Code Implementation Instructions · v2

| | |
|---|---|
| **Client** | Sehar Anjum |
| **Project** | Personal Brand + Portfolio Website |
| **Discipline** | SEO: Off-Page (primary), On-Page, Link Building |
| **Primary goal** | Win independent SEO clients |
| **Feel** | Premium · Creative · Minimal |
| **Inspiration** | https://ahmad-ilyas-portfolio.vercel.app/ (structure and feel only: **do not copy** copy, layout pixels, colours, or code) |
| **Stack** | Static: `index.html`, `style.css`, `script.js`, `/assets` · GSAP + ScrollTrigger + Lenis via CDN |
| **Video** | **None. No video anywhere on the site** (client decision). |

---

## PART ONE: CREATIVE BRIEF

---

## 1. Website Overview

A clean, bright, one-page portfolio that turns Sehar Anjum into **the SEO specialist people remember and contact**. Within ten seconds a visitor understands:

1. Sehar does SEO, led by off-page authority and link building and backed by on-page work.
2. She has real results: she ranked US medical-billing websites, won 30 live guest posts through outreach, and built about 600 listings in 3 months.
3. Reaching her takes one tap: a form, WhatsApp, email, or LinkedIn.

### What we take from the inspiration site (adapted, not copied)
| Inspiration trait | How Sehar's site reinterprets it |
|---|---|
| Spaced-letter preloader with a thin progress line | `S E H A R · A N J U M` preloader with a "crawling…" progress line and a % counter |
| Full-screen colour intro flashing roles | Full-screen **link-blue** intro flashing `OFF-PAGE SEO → LINK BUILDING → OUTREACH → ON-PAGE SEO`, then wiping up to reveal the hero |
| Floating rounded pill nav in the accent colour | Floating **ink** pill nav, with the active link marked by a blue dot, a dark-mode toggle, and a "Hire Me" pill |
| Huge heavy two-tone name in the hero + particle scene | Huge heavy name. The second word is **blue and underlined like a hyperlink**, and the scene beside it is a **live link network** (nodes connecting) instead of loose particles |
| `[02 / IDENTITY]` section labels | `[02 / ABOUT]`-style labels in mono, with an SEO flavour (`[03 / RANKINGS]`, `[05 / BACKLINKS]`) |
| Grayscale portrait card + tech chips | Grayscale portrait card + **SEO tool and skill chips**; on hover the portrait turns to colour |
| Large project cards with tags + buttons | **Sticky stacking case-study cards** with a rank badge, tags, and result metrics |
| Big contact heading + Email / WhatsApp buttons | "Let's get you **ranked**." + a contact form + WhatsApp / Email / LinkedIn buttons |
| Custom cursor, side scroll progress, ambient canvas | Custom dot+ring cursor, vertical scroll progress rail, subtle grain |

---

## 2. Core Positioning

**Positioning statement**
> For businesses that are invisible on Google, Sehar Anjum is an SEO executive who builds the off-page authority and on-page foundation that move a site up the rankings, already proven in competitive US healthcare markets.

**Hero eyebrow:** `● HELLO, I'M`
**Hero name:** **SEHAR** / **ANJUM** *(second line blue and underlined, like a link)*
**Rotating role line:** `OFF-PAGE SEO SPECIALIST` → `LINK BUILDER` → `OUTREACH EXPERT` → `ON-PAGE SEO` (typed and deleted)
**Hero paragraph:**
> I help businesses climb Google with real outreach, high-authority guest posts, clean listings, and on-page work that makes every link count.

**Messaging pillars**
1. **Authority is earned, not bought.** Real outreach, real publishers, real live links.
2. **Proven where competition is fierce.** Ranked US medical billing sites.
3. **Volume with discipline.** About 600 listings in 3 months, every one placed on purpose.
4. **Off-page and on-page together.** Links only pay off when the page deserves to rank.

**Tone:** confident, clear, friendly. Short sentences. No hype, no jargon walls.

---

## 3. Brand Personality

| Trait | Expressed as |
|---|---|
| **Precise** | Mono section labels, exact numbers, a tight grid |
| **Confident** | Heavy uppercase headlines, very few words |
| **Creative** | A hyperlink-styled name, a live link-network scene, ranks that climb |
| **Trustworthy** | Real project names and numbers, no stock photos |
| **Approachable** | Bright white canvas, first-person copy, WhatsApp always one tap away |

Archetype: **The Craftsperson.** Not a neon growth hacker, not a corporate agency.

---

## 4. Visual Direction

**Mood:** bright, airy, gallery-white pages. Heavy black type. **One** accent colour that is also a story: **hyperlink blue**, the colour of a link, for someone who builds links.

**Signature motifs (all in code, no video, no stock imagery):**
- **Hyperlink name.** The second word of every big headline is blue with a thick underline that draws in, like a clicked link.
- **Link Network.** A canvas scene of nodes joined by fine lines that slowly drift and connect, and react to the cursor. It is used beside the hero and, faintly, as an ambient background.
- **Rank badges.** Small mono pills like `#1 · GOOGLE` on case cards.
- **Grain.** A very subtle animated noise overlay for a premium print feel.

---

## 5. Higgsfield Seedance 2.0 Asset Generation

> **Status: NOT USED.** The client chose **no video** for this website. No Higgsfield or Seedance clips will be generated or embedded.

- **Identity reference:** `Media/` folder in the main project folder, for the **portrait photo only**.
  ⚠️ When this plan was written, **no `Media/` folder existed** in `C:\Users\ahmad\Desktop\Portfolio`. Add the photo as `Media/sehar.jpg`; the build copies and optimises it to `assets/img/sehar.webp`. Until then, a tasteful monogram placeholder card ("SA") is shown.
- If video is ever wanted later: Seedance 2.0, 1080p, 8–12 s clips, identity reference `Media/sehar.jpg`, exported H.264 with every-frame keyframes into `/assets/video/`. **Out of scope for this build.**

---

## 6. Three Cinematic Scenes (code-built, no video)

### Scene 1: "THE INDEX" (Preloader + Intro)
White screen. Spaced letters `S E H A R   A N J U M` fade in at the centre above a hairline that fills from left to right, with `crawling…` on the left and `000%` on the right. At 100%, a full-screen **blue** panel slides up. Giant white words snap through, one every 0.35 s: `OFF-PAGE SEO` · `LINK BUILDING` · `OUTREACH` · `ON-PAGE SEO` · `FOUND FIRST.` The panel then wipes upward and reveals the hero.

### Scene 2: "THE NETWORK" (Hero)
To the right of the name, a canvas link network: about 70 nodes in a soft sphere-like cluster, ink and blue dots, with thin lines joining near neighbours. It rotates slowly (fake 3D via projected coordinates). The cursor pulls nearby nodes and lights up their links in blue. On scroll, the cluster spreads apart and fades into the background.

### Scene 3: "THE CLIMB" (Results)
A pinned mini-SERP. A result row labelled `medsitnexus.com` starts at `#47` at the bottom of 6 grey rows. As you scroll, the counter ticks down to `#1` while the row slides to the top and turns blue. The same then happens for Meds Dental. Caption: *"Two US medical billing sites. One direction: up."*

---

## 7. Website Structure

```
00  Preloader + Blue Intro      Scene 1
    Floating pill nav           (fixed, all pages)
01  Hero          [01 / HELLO]        Scene 2
02  Stats strip                       counters + marquee
03  About         [02 / ABOUT]        portrait card + story + skill chips
04  Services      [03 / SERVICES]     3 pillars
05  Results       [04 / RANKINGS]     Scene 3: The Climb
06  Projects      [05 / CASE STUDIES] sticky stacking cards
07  Process       [06 / PROCESS]      4 steps
08  Contact       [07 / CONTACT]      heading + form + channel buttons
09  Footer
```

---

## 8. Hero Section

**Layout:** a 2-column grid (copy left about 55%, network canvas right about 45%), full viewport height, top padding clear of the floating nav.

- Eyebrow: blue pulsing dot + `HELLO, I'M` (mono, letter-spaced)
- **Name:** `SEHAR` (ink) / `ANJUM` (blue, thick 0.08em underline that draws in left to right). Font size about 9.5vw, weight 800, tight tracking, uppercase.
- **Rotating role** (grey, weight 700, about 2.2rem): typed and deleted, with a caret.
- Paragraph (max 46ch).
- CTAs: **Hire Me** (solid ink pill, arrow ↗) · **WhatsApp** (outline pill, WhatsApp icon).
- Bottom row: `SCROLL ↓` with an animated line on the left; `Available for new clients ●` (blue dot pulse) on the right.

**Entrance (after intro):** name characters rise from behind a mask (stagger 0.035, `expo.out`), the underline draws, the role starts typing, the paragraph and CTAs fade up, and the network canvas fades in from scale 0.8.

---

## 9. Animated Stats Strip

A white strip with hairline top and bottom borders. Four columns divided by vertical hairlines:

| Number | Label |
|---|---|
| **30** | Live guest posts via outreach |
| **600+** | Listings built in 3 months |
| **2** | US medical billing sites ranked |
| **3** | SEO disciplines: Off-Page · On-Page · Links |

Numbers count up on enter (1.6 s, `power3.out`). Below: an infinite marquee, outlined heavy text alternating with solid text, separated by blue ✦:
`OFF-PAGE SEO ✦ LINK BUILDING ✦ GUEST POSTING ✦ OUTREACH ✦ BUSINESS LISTINGS ✦ ON-PAGE SEO ✦`. Its speed follows scroll velocity, and it reverses when scrolling up.

---

## 10. Mission (inside the About intro)

A kinetic statement at the top of the About section. Words start at 15% opacity and turn ink as you scroll (scrubbed); "found first" turns blue:
> **Great businesses stay invisible every day. Not because they're bad, but because Google can't see their worth yet. My job is to change that: earn the links, fix the pages, and climb until you're found first.**

---

## 11. Three Pillars (Services)

Label `[03 / SERVICES]` · Heading **WHAT I <span blue>DO</span>**

Three cards on a 3-column grid, white with a 1px border and 20px radius, and a soft shadow on hover. Each card:
- Top row: index `01` (blue mono) + a small line icon (inline SVG)
- Title (heavy, uppercase)
- Copy
- Chips

**01 · OFF-PAGE SEO** *(signature skill)*
> Authority is the vote Google trusts most. I earn it through real outreach, publisher relationships, and placements that send both signal and traffic.
> Chips: `Outreach` `Guest Posting` `Brand Mentions` `Citations`

**02 · ON-PAGE SEO**
> Links open the door. The page has to deserve the room. I tune titles, headings, internal links, and content so every page is built to rank.
> Chips: `Meta Tags` `Headings` `Internal Links` `Content Optimisation`

**03 · LINK BUILDING**
> A deliberate, varied backlink profile: guest posts, niche directories, business listings, and contextual links, built steadily and without shortcuts.
> Chips: `Guest Posts` `Business Listings` `Niche Directories` `Profile Links`

Hover: the card lifts 6px, the border turns blue, and the index number rolls (old number slides up, new copy slides in).

---

## 12. Story Section (About)

Label `[02 / ABOUT]` · Heading **ABOUT <span blue>ME</span>**

**Layout:** a 2-column grid. Left: portrait card (4:5, 24px radius, grayscale, turns to full colour on hover with a 0.6 s transition; reveals with a clip-path wipe on scroll). Right: story and skill chips.

**Story copy** (written by the strategist):
> Every page on Google got there for a reason. That's what pulled me into SEO: the quiet logic behind why one website wins and another disappears.
>
> I started where SEO is hardest and most honest: off-page. Writing outreach emails that get replies, finding publishers who say yes, building listings by hand, one directory at a time. It taught me that authority can't be faked.
>
> Today I'm an **SEO Executive at Mesh Square**, working across multiple client projects, including US medical billing companies like **Medsitnexus** and **Meds Dental**, where my work helped push their sites up the rankings in a crowded, high-stakes market.
>
> Now I'm taking on a small number of independent clients. If your business deserves to be found, let's make it climb.

**Sub-label:** `SKILLS & TOOLS`
Chips (pill, 1px border, hover fills ink): `Off-Page SEO` `On-Page SEO` `Link Building` `Guest Posting` `Blogger Outreach` `Business Listings` `Citations` `Keyword Research` `Google Search Console` `Google Analytics` `Ahrefs` `SEMrush` `Moz`
> ⚠️ Tool chips (Ahrefs, SEMrush, Moz, GSC, GA) are assumed. **Confirm with Sehar** which she actually uses.

---

## 13. Product / Service Section: Process

Label `[06 / PROCESS]` · Heading **HOW WE <span blue>WORK</span>**

Four steps on a horizontal row (desktop) joined by a hairline that **draws as you scroll**, with a blue dot travelling along it. On mobile they become a vertical timeline.

| | Step | Copy |
|---|---|---|
| 01 | **AUDIT** | Where you rank, who outranks you, and why. Backlink gaps, on-page gaps, quick wins. |
| 02 | **STRATEGY** | A clear plan: keywords, link targets, listings, page fixes, in priority order. |
| 03 | **BUILD** | Outreach, guest posts, listings, and on-page work, delivered every week. |
| 04 | **REPORT** | Monthly reporting you can actually read: live links, positions gained, next steps. |

---

## 14. Featured Work / Content Section

### 14a. Results: Scene 3 "The Climb"
Label `[04 / RANKINGS]` · Heading **PROOF, NOT <span blue>PROMISES</span>** · Pinned about 200vh (desktop) or 120vh (mobile). See §6.

### 14b. Case Studies: sticky stacking cards
Label `[05 / CASE STUDIES]` · Heading **SELECTED <span blue>WORK</span>**

Each card is `position: sticky; top: 14vh`. As you scroll, the next card slides over the previous one, and the covered card scales to 0.94 and dims slightly (GSAP scrub). Card design: large white panel, 1px border, 28px radius. Left: number + type label, title, description, chips, metrics row, buttons. Right: an SVG "rank chart" graphic (a line rising to #1) drawn when the card enters.

| # | Title | Type | Description | Metrics |
|---|---|---|---|---|
| 01 | **Medsitnexus** | Medical Billing · USA | Built authority through outreach, guest posts, and targeted listings, plus on-page fixes. The site climbed the rankings for its core service terms. | `Ranked ↑` `Off-Page` `On-Page` |
| 02 | **Meds Dental** | Dental Billing · USA | Same playbook, different niche. Steady link building and page optimisation moved the site up search results. | `Ranked ↑` `Link Building` |
| 03 | **Outreach Campaign** | Guest Posting | Cold outreach to real publishers that turned into editorial placements. | `30 live links` |
| 04 | **Listings Sprint** | Citations · Directories | A high-volume, hand-built listings campaign, and still going. | `~600 listings · 3 months` |

Buttons per card: **Discuss a similar project** (solid ink → #contact) · **WhatsApp** (outline).

> ⚠️ **Confirm before launch** that Mesh Square, Medsitnexus, and Meds Dental can be named publicly. Otherwise use "US Medical Billing Co. A / B".

---

## 15. Final CTA Section

Label `[07 / CONTACT]` · Heading (huge, 2 lines): **LET'S GET YOU** / **<span blue underlined>RANKED.</span>**
Sub: *Have a website that deserves more traffic? Tell me about it. I reply within 24 hours.*

**Layout:** 2 columns.
- **Left: form.** Name · Email · Website URL · Service (Off-Page SEO / On-Page SEO / Link Building / Full SEO / Not sure) · Message · **Send Message ↗**. Fields have a bottom border only and floating labels; the focus line turns blue. Submits to a Formspree endpoint if configured, otherwise opens a pre-filled `mailto:`. Inline success: "Thanks! I'll get back to you within 24 hours."
- **Right: channel buttons.** Three large pill buttons that fill ink on hover: **EMAIL ME ✉** · **WHATSAPP ◉** · **LINKEDIN in**

All contact values come from one `CONFIG` object in `script.js`.

---

## 16. Footer

- A giant outlined wordmark `SEHAR ANJUM` spanning the width (about 15vw), filling in solid as the footer scrolls into view.
- Row: `© 2026 Sehar Anjum` · `Designed & built for search` · local time `PKT 14:32` · `Back to top ↑`.
- Small social icon row: LinkedIn · WhatsApp · Email.

---

## 17. Complete Visual Style Guide

### Colour: minimal (light theme default + dark theme toggle)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#0B0B0C` | Page background |
| `--surface` | `#F6F6F4` | `#141416` | Cards, chips |
| `--ink` | `#0E0E10` | `#F3F3F1` | Headlines, body |
| `--muted` | `#6B6B70` | `#9A9AA0` | Paragraphs, labels |
| `--line` | `#E7E7E4` | `#26262A` | Borders, hairlines |
| `--accent` | `#2F49FF` | `#5B70FF` | **Link blue: the only colour.** Accent words, dots, underlines, focus, intro panel |

Rule: blue is for **links, wins, and emphasis**. Never use it as a large background, except during the intro.

### Shape & spacing
- Radius: chips/buttons 999px · cards 20–28px · portrait 24px.
- 12-column grid; side margins `clamp(20px, 5vw, 80px)`; section padding `clamp(96px, 14vh, 200px)`.
- Spacing scale (8pt): 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Shadows: only on hover, `0 20px 50px -20px rgba(14,14,16,.15)`.
- Grain overlay: inline SVG noise, `opacity .05`.

---

## 18. Typography

| Role | Font (Google Fonts) | Use |
|---|---|---|
| **Display** | **Familjen Grotesk** 700 | Huge uppercase names and headings, tight tracking (−0.04em), line-height 0.9 |
| **Body / UI** | **Inter** 400/500/600 | Paragraphs, buttons, nav |
| **Mono** | **JetBrains Mono** 500 | `[01 / LABELS]`, counters, rank badges, chips |

> Chosen so the type has the same heavy-grotesk energy as the inspiration (which uses Geist) while staying distinct.

**Fluid scale**
| Token | Size |
|---|---|
| `--fs-hero` | `clamp(3.6rem, 11vw, 11rem)` |
| `--fs-h2` | `clamp(2.6rem, 7vw, 6.5rem)` |
| `--fs-h3` | `clamp(1.4rem, 2.2vw, 2rem)` |
| `--fs-lead` | `clamp(1.05rem, 1.4vw, 1.3rem)` |
| `--fs-body` | `1rem` |
| `--fs-label` | `0.75rem`, uppercase, tracking 0.18em |

---

## 19. Animation Direction

Principles: crisp entrances, confident settles, no bounce. Every motion means **rising**, **connecting**, or **revealing**.

| Element | Animation | Ease / time |
|---|---|---|
| Preloader letters | opacity + letter-spacing 0.6em → 0.4em | `power2.out` 0.8 s |
| Intro words | hard cut every 0.35 s, panel wipe `yPercent −100` | `expo.inOut` 1 s |
| Headline chars | `yPercent 110 → 0` behind a mask | `expo.out` 1 s, stagger 0.03 |
| Accent underline | `scaleX 0 → 1`, origin left | `power3.inOut` 0.9 s |
| Paragraphs / chips | `y 30 → 0`, opacity, stagger 0.04 | `power3.out` 0.8 s |
| Counters | number tween + snap | `power3.out` 1.6 s |
| Portrait | `clip-path inset(100% 0 0 0) → inset(0)` + scale 1.15 → 1 | `expo.inOut` 1.3 s |
| Mission words | opacity 0.15 → 1 | scrubbed |
| SERP climb | row `y` + counter | scrubbed, pinned |
| Stacking cards | covered card scale 1 → 0.94, brightness 1 → 0.9 | scrubbed |
| Process line | `scaleX` + travelling dot | scrubbed |
| Footer wordmark | outlined → filled (`background-clip:text` sweep) | scrubbed |

A vanilla `splitText()` helper wraps characters, words, or lines in mask spans (no paid plugins).

---

## 20. Interaction Design

- **Floating pill nav:** centred, max-width 860px, ink background (bone in dark mode), 999px radius, top 16px. Contains `SA.` wordmark · HOME · ABOUT · WORK · CONTACT · theme toggle ☾/☀ · **HIRE ME** pill. The active section gets a blue dot underneath (ScrollTrigger). The nav shrinks slightly once you scroll past the hero.
- **Dark-mode toggle:** swaps the CSS variables on `<html data-theme>`, saved in `localStorage`, defaults to `prefers-color-scheme`. A circular reveal transition (View Transitions API where supported, otherwise a fade).
- **Custom cursor (desktop):** a 6px dot plus a 28px ring with lerp follow. The ring grows over links and buttons, shows `VIEW` over case cards, and turns blue over CTAs.
- **Magnetic buttons:** CTAs pull up to 10px toward the cursor.
- **Link hover:** underline draws in left to right and exits right to left.
- **Network canvas:** nodes are attracted to the cursor; the links near it light up blue.
- **Scroll progress:** a thin vertical blue rail on the right edge.
- **Mobile WhatsApp button:** fixed bottom-right, round, with a soft pulse.
- **Focus:** a visible 2px blue outline on everything interactive.

---

## 21. Scroll Behavior

- Lenis smooth scroll (`lerp 0.1`) synced to the GSAP ticker and ScrollTrigger.
- Pins: The Climb (about 200vh). Case cards use CSS sticky + a GSAP scrub (no pin needed).
- Nav anchors use `lenis.scrollTo(id, { offset: -90 })`.
- Marquee and big headlines get a slight skew from scroll velocity (clamped to 2°).
- **Reduced motion:** turn off Lenis, pins, scrubs, intro word flashes, cursor, and canvas motion (the canvas draws one static frame). All content shows with simple fades.

---

## 22. Mobile Behavior (under 768px)

- Nav: the pill shows only `SA.` + theme toggle + a **Menu** button that opens a full-screen overlay with giant stacked links.
- Hero: single column; name about 18vw; network canvas sits **behind** the name at 35% opacity with about 35 nodes.
- Stats: 2×2 grid.
- Services, case cards, and process become single-column stacks; case cards stay sticky with a smaller offset.
- The Climb: 4 rows, shorter pin.
- Cursor and magnetic effects off; canvas DPR capped at 2.
- Fixed WhatsApp button bottom-right; all tap targets at least 44px.

---

## PART TWO: TECHNICAL IMPLEMENTATION (Instructions for Claude Code)

---

## 23. Technical Implementation

### 23.1 File structure
```
/Portfolio
├── index.html
├── style.css
├── script.js
├── BUILD-PLAN.md
└── /assets
    ├── /img
    │   ├── sehar.webp        (from Media/sehar.jpg when provided; monogram placeholder until then)
    │   └── og-image.jpg      (1200×630 social card)
    └── /icons
        └── favicon.svg       ("SA" monogram, blue dot)
```

### 23.2 CDN (end of body, `defer`)
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js" defer></script>
<script src="script.js" defer></script>
```

### 23.3 `index.html`: SEO-perfect markup (it's an SEO expert's site)
- `<title>Sehar Anjum, SEO Executive | Off-Page SEO, On-Page SEO & Link Building</title>`
- Meta description (about 155 chars), canonical, Open Graph + Twitter cards, `theme-color`.
- JSON-LD: `Person` (name, jobTitle, knowsAbout, worksFor Mesh Square, sameAs LinkedIn) + `ProfessionalService`.
- One `<h1>` (the hero name), clean h2/h3 hierarchy, semantic `<header> <main> <section id> <footer>`.
- All text is real HTML; canvases are `aria-hidden="true"`.
- `.js` class on `<html>` gates the hidden initial states, so the content is fully readable without JS.
- Skip link, `lang="en"`, `alt` text on the portrait.

### 23.4 `style.css` order
1. `:root` tokens + `[data-theme="dark"]` overrides
2. Reset, base, fonts
3. Utilities (`.label`, `.accent`, `.link-underline`, `.chip`, `.btn`, split-mask spans)
4. Global UI: preloader, intro, nav, cursor, progress rail, grain, WhatsApp float
5. Sections in page order
6. Breakpoints: 1024px, 768px
7. `prefers-reduced-motion`
- Animate only `transform`, `opacity`, `clip-path`, and `filter`.

### 23.5 `script.js` modules
```js
const CONFIG = {
  whatsapp: '920000000000',               // TODO: Sehar's number, international, no +
  email: 'hello@example.com',             // TODO
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  formEndpoint: '',                       // TODO: Formspree URL; empty → mailto fallback
  timezone: 'Asia/Karachi'                // TODO: confirm
};

initTheme();        // before paint, to avoid a flash
initConfigLinks();  // fill [data-wa] [data-email] [data-li]
initLenis();
await document.fonts.ready; splitText();
await runPreloader(); await runIntro(); heroIn();
initNetwork();      // hero canvas: seeded nodes, fake-3D rotation, mouse attraction, IO-paused
initNav(); initCursor(); initMagnetic(); initProgress();
initStats(); initMission(); initReveals();
initClimb(); initStackCards(); initProcess();
initContact(); initFooter();
```
- Use `gsap.matchMedia()` for desktop / mobile / reduced-motion branches.
- The canvas animates only while visible (`IntersectionObserver`); resize is debounced; DPR is capped at 2.
- Call `ScrollTrigger.refresh()` after fonts and images load.
- The intro is skipped on repeat visits in the same session (`sessionStorage`) for a faster return.

### 23.6 Performance budget
| Metric | Target |
|---|---|
| LCP | < 2.0 s |
| CLS | < 0.02 |
| JS total (incl. CDN) | < 120 KB gzip |
| Images | portrait WebP ≤ 150 KB, explicit size, lazy |
| Lighthouse | 95+ Perf · 100 SEO · 100 A11y · 100 Best Practices |

No video, so no heavy media. Fonts preconnected, `display=swap`, at most 6 font files.

### 23.7 Accessibility
WCAG AA contrast in both themes; full keyboard support; `aria-live` on form status; split text keeps the original string in `aria-label`; the theme toggle has `aria-pressed`.

### 23.8 Placeholders to replace before launch
- [ ] Portrait → `Media/sehar.jpg` (folder **not found** during planning)
- [ ] WhatsApp, email, LinkedIn → `CONFIG`
- [ ] Formspree endpoint (or keep mailto)
- [ ] Confirm public naming of Mesh Square / Medsitnexus / Meds Dental
- [ ] Confirm the SEO tools list
- [ ] Domain for canonical + OG

### 23.9 Build order for Claude Code
1. Scaffold files and tokens (light + dark), fonts, reset.
2. Write the complete HTML content (crawlable, works without JS).
3. Static styling, desktop, then mobile.
4. Lenis + GSAP base → preloader → blue intro → hero entrance.
5. Network canvas.
6. Stats, mission, about, services reveals.
7. The Climb pin.
8. Sticky stacking case cards.
9. Process line, contact form + CONFIG, footer.
10. Nav, theme toggle, cursor, magnetic, progress rail.
11. Reduced-motion pass → browser test at desktop, tablet, and mobile, with a clean console.

---

*End of brief.*

---

## Update: Next.js migration (2026-11-27)

At the client's request the site was converted from static HTML to **Next.js 15 (App Router)**. The old static build is kept in `_static-backup/`.

| Path | Purpose |
|---|---|
| `app/layout.jsx` | Metadata (SEO), fonts via `next/font`, theme pre-paint script |
| `app/page.jsx` | Assembles sections + JSON-LD |
| `app/globals.css` | All styles (unchanged design system) |
| `components/*.jsx` | One component per section (Chrome, Hero, Stats, About, Services, Climb, Cases, Process, Contact, Footer) |
| `components/SiteEffects.jsx` | Client component that starts the animation engine |
| `lib/site.js` | GSAP + ScrollTrigger + Lenis engine (npm packages, no CDN) |
| `lib/config.js` | **Edit here:** WhatsApp, email, LinkedIn, Formspree, timezone, ranking positions |
| `public/assets/` | Images and icons |

Commands: `npm run dev` (http://localhost:3000) · `npm run build` (static export to `/out`, deployable to Vercel or any host).
