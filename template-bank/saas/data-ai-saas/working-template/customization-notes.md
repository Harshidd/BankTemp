# Customization Protocol: Data & AI SaaS

## Architectural Branding
- Target `Navbar.tsx` and `Footer.tsx` for logo/brand identity.
- Primary Color Token: `emerald-500` (Intelligence/Visibility).
- Secondary Color Token: `indigo-500` (Infrastructure/Security).
- Global Background: `slate-950` (Dark Analytic Depth).

## Component Content
- Replace `[Product]` and `DataAISaaS` placeholders with the target product name.
- Adjust `useCases` in `Solutions.tsx` to fit specific industries like FinTech, HealthTech, etc.
- Modify `DetailedFeatures` in `Features.tsx` for specific technical capabilities like "Natural Language Interface" or "Real-time Vector Ingestion".

## Structural Adjustments
- Update `page.tsx` states to add/remove pages from the 6-page core.
- Modify `Pricing.tsx` plans and thresholds for specific monetization routes (Usage-based, per-seat, etc.).
- Update `Contact.tsx` form logic for specific CRM integrations (Salesforce, HubSpot).

## MRKDEV Identity Removal
- Remove `MRKDEV STARTER TEMPLATE` ribbon in `page.tsx`.
- Remove `MRKDEV TEMPLATE` sub-label in `Navbar.tsx`.
- Remove `MRKDEV STARTER SIGNATURE` in `Footer.tsx`.
- Update the Catalog Showcase Layer in the main app's route if necessary.

## Data Mockups
- All dashboards use simulated Tailwind/Lucide elements. Replace with real chart libraries like `Recharts` or `Tremor` for a live application.
