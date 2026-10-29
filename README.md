# FORMA Atelier — Premium Interior Design Website

An editable, responsive interior design studio concept built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons, and Unsplash photography.

## Run locally
Recommended Node.js 20.9 or newer.

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

Production build:
```powershell
npm run build
npm run start
```

## What's included
- Cinematic hero with full-bleed Unsplash interior image, animated image reveal, elegant editorial typography, and CTAs.
- Responsive desktop navigation and mobile menu.
- Studio introduction, selected portfolio, services, philosophy, design process, material gallery, studio differentiators, enquiry wizard, FAQ accordion, final CTA and luxury footer.
- Six portfolio concept cards; homepage shows three and links to `/projects` for all six.
- Portfolio filters: All projects, Residential, Kitchens & Living, Compact Homes, Commercial.
- Individual case study pages for every portfolio item, including brief, design direction, project facts, image gallery, details, next project, and WhatsApp enquiry CTA.
- Multi-step enquiry wizard containing all requested space, property type/size, design style, service, priorities, budget, stage, timeline, and additional preferences.
- WhatsApp handoff configured for +91 7019260151. The visitor reviews and sends the prefilled message in WhatsApp.
- `.gitignore` excludes `node_modules`, `.next`, build output, logs, and local environment files.

## Main files
- `src/app/page.tsx` — homepage
- `src/app/projects/page.tsx` — all projects and filters
- `src/app/projects/[slug]/page.tsx` — individual project case studies
- `src/components/` — editable sections
- `src/lib/site.ts` — project data and WhatsApp configuration
- `src/app/globals.css` — responsive styles and design tokens

## Important before client launch
This is a fictional portfolio concept for Webloom Studio. All project titles and project narratives are illustrative, not commissioned client work. Confirm that the WhatsApp number is the correct business number and replace any placeholder email. Unsplash images are loaded remotely and require internet access. Review the applicable image licences and confirm image availability before launch. No backend or database is configured; enquiries are handed off through WhatsApp.
