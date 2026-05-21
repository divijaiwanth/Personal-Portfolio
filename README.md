# Portfolio — Editorial × Cinematic

Personal portfolio built with React (Vite + TypeScript), Tailwind CSS, and Framer Motion. Designed with a Tresmares × Apple aesthetic: serif display type, alternating light/dark sections, and scroll-driven motion.

## Stack

- React 18+ / Vite / TypeScript
- Tailwind CSS v3 + CSS custom properties
- Framer Motion, React Router v6
- Contact via email, phone, and LinkedIn
- Deploy: [Vercel](https://vercel.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize

Edit **`src/data/site.ts`** (name, bio, skills, experience, social links) and **`src/data/projects.ts`** (work items). Replace placeholder SVGs in **`public/images/`** with real screenshots and add **`public/og-image.jpg`** (1200×630) for social previews.

## Contact API (Vercel + Resend)

Set environment variables in Vercel:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Your inbox |
| `CONTACT_FROM_EMAIL` | Verified sender domain |

Install API dependencies on deploy (Vercel installs `resend` from root if listed):

```bash
npm install resend @vercel/node
```

## Deploy

```bash
npm run build
```

Connect the repo to Vercel; `vercel.json` handles SPA rewrites and security headers.

## Structure

```
src/
├── components/   # layout, home sections, work, ui, seo
├── data/         # site + projects
├── hooks/
├── pages/
└── styles/
```
