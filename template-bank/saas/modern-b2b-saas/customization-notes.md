# Customization Notes: Modern B2B SaaS (V2 Multi-Page)

## Core Rebranding Logic (High-Velocity)
To adapt this template for any specific SaaS niche (DevTools, HR, CRM, etc.), follow these steps:

### 1. Global Product Search & Replace
- Replace `[Product]` with the target SaaS name.
- Replace `[Category]` with the main niche (e.g., "Developer Tools", "Talent Operations").
- Replace `[Year]` with the founding year for "Since [Year]" claims.

### 2. Feature/Value Adaptation
- Adjust the `deepFeatures` array in `Features.tsx` to reflect your specific product capabilities.
- Update the `plans` array in `Pricing.tsx` with specific price points and features per tier.
- Translate or rewrite the `faqItems` in `FAQ.tsx` to match common customer objections in your niche.

### 3. Visual Theming (Monochrome to Brand-Specific)
- Default theme is **Black-White-Blue** (Minimalist Premium).
- **Primary Color:** Switch `blue-600` and `blue-400` in the `tailwind` classes to your brand's primary color.
- **Accents:** The `emerald-400` accent used in some gradients can be changed to a secondary brand color for more contrast.
- **Mockups:** Replace the `Lucide` icon placeholders in the `Features.tsx` mockup areas with real high-definition product screenshots or architectural diagrams.

### 4. MRKDEV Identity Removal
- To remove the template signature for the final client:
  - **Navbar:** Delete the `Sparkles` badge and sub-text in `Navbar.tsx`.
  - **Footer:** Delete the `MRKDEV STARTER TEMPLATE` block in `Footer.tsx`.
  - **Router Shell:** Remove the `MRKDEV STARTER` floating ribbon in the main `page.tsx`.

### 5. Multi-Page To Single-Page (Optional)
- If only a landing page is needed, simply use the `Home.tsx` component and remove the state-based router logic in `page.tsx`. 

### 6. Technical Readiness (Next.js 16+)
- Components use `use client` where interaction is needed.
- Data structures (plans, features, faqs) are located at the top of their respective page files for easy modification.
- Designed with flexible layout patterns (Grid, Flex) to prevent breaking with longer text strings in other languages.
