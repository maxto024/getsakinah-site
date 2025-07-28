# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with the Sakinah static website repository. It includes project setup, design system, content, and religious sourcing.

---

## 1. Project Overview

* **Name:** Sakinah Prayer Companion Static Site
* **Framework:** Next.js 15.4.4 (App Router)
* **Language:** TypeScript 5.x (strict mode)
* **Styling:** Tailwind CSS v4 + custom CSS variables
* **Font Family:** Geist Sans (headings) & Geist Mono (code) via `next/font/google`
* **Design Tokens:**

  * **Primary Color:** `#0F5132` (deep green)
  * **Accent Gradient:** `from-[#0F5132]/15 via-[#0F5132]/08 to-transparent`
  * **Secondary Color:** `#198754` (emerald)
  * **Text Primary:** `#212529` (dark gray) & `#F8F9FA` (light mode)
  * **Border Radius:** `1rem` (rounded buttons and cards)
  * **Shadows:** `shadow-sm` (light elevation for cards)
  * **Linear Gradients:** used on headers and call-to-action sections
* **Content:** Motivational Quran verses (ayah) and authentic hadith, fully sourced.

---

## 2. Development Commands

```bash
npm run dev         # Start dev server (Turbopack) at http://localhost:3000
npm run build       # Build for production
npm run export      # Export static HTML to /out (Next.js static mode)
npm run serve       # Preview /out locally
npm run lint        # ESLint checks (Next.js + TypeScript)
npm run format      # Prettier formatting
```

---

## 3. Architecture & Structure

### 3.1 App Router

* All routes under `/src/app/`:

  * `layout.tsx` sets html/body, font classes, and theme provider
  * `page.tsx` for home
  * `faq/page.tsx` for FAQ
* **Static Export**: `next.config.js` uses `output: 'export'` and `trailingSlash: true`

### 3.2 Components & Modules

* `/src/components/`: Reusable UI components, including:

  * `HeroSection` (with Quran 4:103 verse)
  * `HowItWorksSection` (with hadith & verse callouts)
  * `CollapsibleMosqueHeader` (gradient header, rounded cards)
  * `EnhancedRadiusSelector` (Reanimated slider + preset buttons)
  * `InsightsSection` (streaks, heatmap, AI insights)
  * `LearningHubSection` (lessons with verse 2:45)
  * `Footer` (contact links).

### 3.3 Styling & Theming

* **Tailwind Config (`tailwind.config.js`)**

  ```js
  module.exports = {
    content: ['src/app/**/*.{ts,tsx,mdx}', 'src/components/**/*.{ts,tsx,mdx}'],
    darkMode: 'class',
    theme: { extend: {} },
    plugins: [],
  };
  ```
* **Global CSS (`src/app/globals.css`)**:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {
    --color-primary: #0F5132;
    --color-secondary: #198754;
    --text-primary: #212529;
    --rounded: 1rem;
  }

  .gradient-bg {
    background: linear-gradient(180deg, #0F513215 0%, #0F513208 60%, transparent 100%);
  }
  ```
* **Dark Mode**: Controlled by `class="dark"` on `<html>`; Tailwind auto-switches based on `prefers-color-scheme` if desired.

### 3.4 TypeScript & Linting

* Strict TS: `tsconfig.json` with `strict: true`, `baseUrl: 'src'`, `paths: { '@/*': ['./*'] }`
* ESLint: `eslint.config.mjs` includes `plugin:@typescript-eslint/recommended` and `next/core-web-vitals`

---

## 4. Content & Religious Sourcing

### 4.1 Hero Section

* Verse: **Quran 4:103** — “Indeed, prayer has been decreed upon the believers a decree of specified times.”

### 4.2 How It Works

* **Prayer Logging**: Hadith from Sunan At-Tirmidhi 413 — "The first matter that the slave will be brought to account for..."
* **Mosque Finder**: Verse **Quran 2:43** — “And establish prayer and give zakah and bow with those who bow.”

### 4.3 Insights & Streaks

* Hadith (Sahih Muslim 657) — “Whoever prays Fajr is under the protection of Allah.”

### 4.4 Learning Hub

* Verse **Quran 2:45** — “And seek help through patience and prayer..."

### 4.5 Screenshots Carousel

* Caption hadith: “Prayer is the key to Paradise.” (Sunan An-Nasa'i 1036)

### 4.6 Privacy & Data

* Emphasize: **Only prayer timestamps & optional location** are stored.
* No third-party analytics, full user control, E2E encryption.

---

## 5. Key Technologies & Hosts

* **Next.js**: React-based SSG with App Router.
* **Tailwind CSS**: Utility-first styling.
* **Reanimated v3**: Smooth collapsible animations.
* **Host Providers** (free): Vercel, Netlify, Cloudflare Pages, GitHub Pages.

---

## 6. Notes for Claude Code

* Remember Sakinah’s design: deep green (#0F5132), rounded corners, gradient headers, light hover states.
* Use the provided Quran verses and hadith with exact sourcing.
* Reuse React components for each section; avoid rewriting design in plain HTML where components exist.
* Accessibility: maintain high contrast and large tappable areas.
* Privacy: never include analytics scripts that track users; only static content and client-side logs in the app.

*End of CLAUDE.md*
