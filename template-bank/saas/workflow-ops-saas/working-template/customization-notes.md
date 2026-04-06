# Customization Protocol: Workflow & Ops SaaS

## Architectural Branding
- Target `Navbar.tsx` and `Footer.tsx` for logo/brand identity.
- Primary Color Token: `amber-500` (Execution / Coordination).
- Secondary Color Token: `slate-950` (Control / Admin).
- Global Background: `white` (Clean Execution Depth).

## Component Content
- Replace `[Product]` and `WorkflowOps` placeholders with the target product name.
- Adjust `useCases` in `Workflows.tsx` to fit specific industries like FinTech, HealthTech, etc.
- Modify `workflowFeatures` in `Features.tsx` for specific technical capabilities like "Natural Language Workflow Interface" or "Real-time Distributed Ingestion".

## Structural Adjustments
- Update `page.tsx` states to add/remove pages from the 6-page core.
- Modify `Pricing.tsx` plans and thresholds for specific monetization routes (Usage-based, per-seat, etc.).
- Update `Contact.tsx` form logic for specific CRM integrations (Salesforce, HubSpot).

## MRKDEV Identity Removal
- Remove `MRKDEV STARTER TEMPLATE` ribbon in `page.tsx`.
- Remove `MRKDEV TEMPLATE` sub-label in `Navbar.tsx`.
- Remove `MRKDEV STARTER SIGNATURE` in `Footer.tsx`.
- Update the Catalog Showcase Layer in the main app's route if necessary.

## Process Mockups
- All team-sync and task-list mockups use simulated Tailwind elements. Replace with real chart libraries like `Recharts` or `Tremor` for a live application.
