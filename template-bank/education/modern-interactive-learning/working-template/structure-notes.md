# Structure Notes: Modern Interactive Learning

## Multi-Page Navigation Node (State-Based Router)
The main `page.tsx` uses a React state-based router to toggle between the 7 pages (Home, Programs, Method, Audience, Pricing, Contact, FAQ). This ensures sub-millisecond page transitions within the internal preview environment while maintaining professional-grade navigation consistency.

## Component Hierarchy
- **Navbar.tsx:** Fixed top, translucent backdrop, rounded industrial aesthetics. Supports 6-link primary navigation and 1-link primary CTA (Join Free).
- **Footer.tsx:** 4-column directory, academic status indicator, MRKDEV signature.
- **Pages (Home.tsx, etc.):** Modular components containing section-by-section education-first storytelling.

## Design Tokens (Education DNA)
- **Primary Accent:** `blue-600` (represents clarity, authority, and engagement).
- **Secondary Accents:** `emerald-500` (Science/STEM), `yellow-400` (Alert/Curiosity), `indigo-600` (Modern Tech).
- **Typography:** Bold, black, italicized headings (`italic font-black text-slate-900`) to create a high-energy "Modern Learning" rhythm.
- **Rounding:** Large `rem-based` rounding (`rounded-[4rem]`, `rounded-[6rem]`) to soften the industrial feel and make it approachable for learners.

## Adaptability Protocols
- **Turkey-Local Translation:** Header containers use flexible whitespace patterns and line-heights to support longer Turkish academic phrasing without breaking hierarchy.
- **Universal Icons:** Uses high-velocity `lucide-react` icons (Brain, Zap, Target, Database) that transcend niche-specific limitations.
- **CTA Naming:** "Join Free Academy", "Begin Mastery", "Academic Inquiry" — professional but non-corporate.
