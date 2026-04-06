# Structure Notes: Authority Expert Brand

## Architecture
This template uses a single-page entry point with conditional rendering to simulate a multi-page experience. This makes it perfect as a "starter" that can be easily converted to a static Next.js route system or kept as a high-performance SPA.

## File Map
- `page.tsx`: Route handler and state management.
- `components/Header.tsx`: Transparent-to-solid navigation with active state tracking.
- `components/Footer.tsx`: Minimalist site map with focus on legal links and social presence.
- `pages/Home.tsx`: The primary positioning page.
- `pages/About.tsx`: Narrative-driven credibility page.
- `pages/Offers.tsx`: High-ticket service discovery.
- `pages/Resources.tsx`: Lead magnet and newsletter hub.
- `pages/Testimonials.tsx`: Outcome-driven proof grid.
- `pages/Contact.tsx`: Segmented inquiry portal.
- `pages/FAQ.tsx`: Objection-handling library.

## Component Strategy
- **Lucide Icons:** Used for all functional icons.
- **Tailwind v4:** Utilizes modern utility-first styling with `stone` and `amber` color scales.
- **Glassmorphism:** Applied to the Back-to-Catalog link and Header transitions for a premium feel.
