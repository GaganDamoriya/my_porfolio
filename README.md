# Gagan Prakash — Portfolio

Personal portfolio website built with React + Vite. Features a modern dark-first design, GSAP animations, and an interactive code terminal in the hero section.

**Live:** [gaganprakashdev.netlify.app](https://gaganprakashdev.netlify.app) &nbsp;·&nbsp; **LinkedIn:** [gagan-prakash-damoriya](https://www.linkedin.com/in/gagan-prakash-damoriya-1b884b21b/)

---

## Tech Stack

| Layer | Libraries |
|-------|-----------|
| Framework | React 18, Vite 6 |
| Styling | Tailwind CSS v3, CSS custom properties |
| Animation | GSAP 3 + ScrollTrigger, Framer Motion 11 |
| Icons | react-icons v5 |
| SEO | react-helmet-async |

---

## Features

- **Dark / light mode** — toggled from the navbar, persisted in `localStorage`
- **Animated code terminal** — hero section displays a typewriter-reveal VS Code window in place of a static photo
- **Typing effect** — role subtitle cycles through titles with a realistic type/erase loop
- **GSAP ScrollTrigger** — experience timeline line draws on scroll; stat cards bounce in
- **Framer Motion** — scroll-reveal fade-ups across all sections; card lift + glow on hover
- **Infinite marquee** — tech stack strip with pause-on-hover
- **Fully responsive** — mobile hamburger menu, code terminal hidden on small screens

---

## Project Structure

```
src/
├── components/
│   ├── hero/           # FloatingCode terminal (hero right panel)
│   ├── navbar/         # Sticky nav with dark mode toggle + mobile menu
│   ├── dashBoard/      # Hero section — GSAP timeline + typing effect
│   ├── about/          # About section — GSAP stat card bounce-in
│   ├── experience/     # Timeline — GSAP ScrollTrigger line draw
│   ├── techStack/      # Infinite CSS marquee
│   ├── project/        # Projects grid — Framer whileHover cards
│   ├── contact/        # Contact links
│   ├── footer/         # Minimal footer
│   ├── contentWrapper/ # Max-width outer container
│   └── contentBody/    # Inner content container
├── assets/             # Images
├── projectData.js      # Project cards data
├── experienceData.js   # Work experience data
├── techStackData.js    # Tech stack icons + colours
├── App.jsx             # Root — dark mode state, section order
├── main.jsx            # Entry point + HelmetProvider
└── index.css           # Tailwind directives + CSS variables + keyframes
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Updating Content

| What | File |
|------|------|
| Projects | `src/projectData.js` |
| Work experience | `src/experienceData.js` |
| Tech stack icons | `src/techStackData.js` |
| Hero bio / CTA text | `src/components/dashBoard/DashBoard.jsx` |
| About text | `src/components/about/About.jsx` |
| Social links | `src/components/contact/Contact.jsx` |
| SEO meta tags | `index.html` |

---

## Design Tokens

All colours are CSS custom properties defined in `src/index.css` and toggled via the `data-theme` attribute on the root element.

```css
/* Dark (default) */
--bg-primary:    #0a0a0a
--bg-secondary:  #111111
--bg-elevated:   #1a1a1a
--border:        #2a2a2a
--text-primary:  #f0f0f0
--text-secondary:#888888
--accent:        #6366f1   /* indigo */
--accent-hover:  #818cf8
```

---

## License

MIT
