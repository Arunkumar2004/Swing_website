# SWING — Aerospace | Defence | Innovation

Simple static website. No build step, no framework — just HTML/CSS/JS.

## Folder structure
```
swing-site/
  index.html      → all page content/sections
  style.css       → design system (colors, type, layout)
  script.js       → mobile nav + scroll reveal
  images/
    logo.jpeg     → your logo (already added)
    (add your own photos here — see placeholders below)
```

## Replace placeholders
Open `index.html` and look for `<div class="placeholder" ...>` blocks —
each has a `data-label` telling you what image goes there and the
suggested filename. To swap one in:
1. Drop your image into `images/` (e.g. `images/hero-visual.jpg`)
2. Replace the placeholder div with: `<img src="images/hero-visual.jpg" alt="...">`

## Deploy to Vercel (free)
**Option A — no install, drag & drop:**
1. Go to vercel.com → New Project → "Deploy" → drag the `swing-site` folder in.

**Option B — CLI:**
```bash
npm i -g vercel
cd swing-site
vercel
```
Vercel auto-detects it as a static site — no config needed.

## To edit tomorrow
- Colors/fonts/spacing → `style.css` (`:root` block at the top has all the tokens)
- Text content, sections, nav links → `index.html`
- Add real program names, careers link, contact email where marked
