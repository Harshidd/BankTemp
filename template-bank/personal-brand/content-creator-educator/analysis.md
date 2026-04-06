# Content Creator & Educator Structure Notes

## Core Identity
**Alias:** `content-creator-educator`
**Category:** Personal Brand / Creator Platforms
**Role:** The modern, vibrant educator hub

## Architecture
- **Framework:** Next.js (App Router compatible via `page.tsx` wrapper)
- **Styling:** Tailwind CSS + custom arbitrary values for high-energy effects (`oklch()`, `bg-gradient-to-tr`, etc.)
- **Icons:** `lucide-react`
- **State:** Simple `useState` hook managing 7 "pages" client-side to simulate an instantly loading SPA (Single Page App) experience.

## The Strategy
This template is built around three pillars:
1. **Audience Capture:** Persistent prompts to join a newsletter, framed as a "value exchange" rather than just a signup.
2. **Authority Projection:** Case studies, generic proof metrics ("10,000+ creators joined"), and high-density content hubs.
3. **Structured Upsells:** "Courses" or "Products" are tiered clearly, using pill-shaped tags to denote status, price, or format.

## Standout Visual Mechanics
- `uppercase italic` combinations for stark, energetic headings.
- Abstract background blobs using `emerald-500/10` and `amber-500/10` with extreme `blur-3xl` classes.
- Subtle `hover:-translate-y-1` or `group-hover:translate-x-1` micro-interactions to give the page "bounce" and life. 
- Large, bold CTA buttons that are fully rounded (`rounded-2xl` or `rounded-full`).

## File Map
- `/page.tsx` (Main shell, handles routing and state)
- `/components/Header.tsx` (Fixed, sticky with blur and mobile menu)
- `/components/Footer.tsx` (Heavy, text-first site map and secondary newsletter signup)
- `/pages/Home.tsx` (High-energy landing with hero, products preview, and content preview)
- `/pages/About.tsx` (Narrative storytelling via principles)
- `/pages/Products.tsx` (Tiered course/digital product catalog)
- `/pages/Resources.tsx` (Content hub with search/filter UI)
- `/pages/Community.tsx` (Subscription/Membership pitch)
- `/pages/Contact.tsx` (Categorized contact intents)
- `/pages/FAQ.tsx` (Accordion style objection handling)
