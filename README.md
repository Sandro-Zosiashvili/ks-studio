# KS STUDIO — Fine-Line Tattoo Studio Website

A luxury, fully bilingual (Georgian / English) website for **KS Studio**, a tattoo & piercing studio in Saburtalo, Tbilisi. Built with Next.js 16 (App Router), React 19, TypeScript, SCSS Modules, GSAP + Framer Motion, and a monochrome "ink-on-paper" design system — black, white and gray only, blackletter type, barbed-wire thorn logo, no neon.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm start
```

## Tech stack

- **Next.js 16.2.7** (App Router) + **React 19.2.4**
- **TypeScript** (strict)
- **SCSS Modules** only (no Tailwind)
- **GSAP 3 + @gsap/react** (scroll-progress ScrollTrigger)
- **Framer Motion** (reveals, transitions, carousels)
- **lucide-react** icons
- **babel-plugin-react-compiler** enabled

## Project structure

```
src/
  app/                 # layout, page, global styles
  components/          # one folder per component (.tsx + .module.scss)
  config/
    site.ts            # ← brand config: contact, artists, tattoo gallery, booking options
    i18n/              # ka.ts (default), en.ts, index.ts
  hooks/               # language, booking modal, calendar, form, media query
  styles/_tokens.scss  # palette, fonts, mixins
```

## Customising for the client

- **Brand details, artists, gallery photos, hours, social links** → `src/config/site.ts`. Swap the Unsplash image URLs for the studio's own photography (each item is clearly labelled).
- **Text in both languages** → `src/config/i18n/en.ts` and `src/config/i18n/ka.ts` (identical shape).
- **Colours / fonts / spacing** → `src/styles/_tokens.scss`.

## Features

- Animated hero slideshow (Ken Burns + crossfade), neon flicker sign, typewriter headline
- Custom needle cursor with gold ink-ripple on click
- Fully working 5-step booking modal (validation, custom calendar, time slots, review, animated success)
- Filterable portfolio masonry, signature-styles horizontal scroll, artist crossfade cards
- How-it-works sequence, testimonials carousel (drag + autoplay), FAQ accordion
- Pricing, studio info with map block, newsletter signup, neon footer
- Georgian default, instant KA/EN switch (persisted to localStorage)

Default language is **Georgian (ka)**.
# ks-studio
