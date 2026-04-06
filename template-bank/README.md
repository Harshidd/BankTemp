# template-bank/README.md

This directory serves as the centralized repository for high-quality, reusable website template logic.

The goal is to provide a comprehensive bank of structural patterns extracted from strong reference websites, categorized by industry and optimized for future customization.

## 📁 Category Hierarchy

Each category contains its own library of templates:

1. **/saas**
    - High-conversion landing pages for software products.
    - Focus: Feature blocks, pricing tables, hero sections, demo CTAs.
2. **/education**
    - Platforms for courses, schools, or learning content.
    - Focus: Course listings, curriculum sections, testimonials, enrollment flows.
3. **/personal-brand**
    - Professional portfolios and authority figures.
    - Focus: Personalストーリー (Story), credibility badges, lead forms, offer highlights.
4. **/agency**
    - Business service showcases.
    - Focus: Service grids, process diagrams, case study highlights, "Book a Call" CTAs.
5. **/product-promotion**
    - Single-product or launch-focused pages.
    - Focus: High-quality visuals, value propositions, objections handling, purchase hooks.
6. **/local-business**
    - SEO-friendly structures for brick-and-mortar or service-area businesses.
    - Focus: Location-based keywords, service pages, trust signals (reviews/maps), easy contact.

## 📄 Structure of a Template (`/[category]/[template-name]/`)

Each template must follow this standard format:

| Directory | Purpose |
| :--- | :--- |
| **`/source-notes`** | Documentation of the reference site, why it was chosen, and its core strengths. |
| **`/screenshots`** | Visual references for desktop and mobile viewports. |
| **`/assets-review`** | Manifest of extracted icons, SVGs, and placeholder requirements. |
| **`/working-template`** | The functional, brand-stripped Next.js/Tailwind components and logic. |

The following documentation files are also required for each template:

1. **`template-summary.md`**: High-level overview of the template's purpose and unique selling points.
2. **`structure-notes.md`**: Detailed breakdown of the section hierarchy and layout philosophy.
3. **`customization-notes.md`**: Guides for the developer/AI on how to easily restyle and adapt the template.
4. **`do-not-copy.md`**: Explicit warnings about what brand-specific identity to avoid from the reference site.

## 🚀 Reusable Philosophy

This is NOT a storage for direct site-clones. It is a **foundational starter kit**.

- **Structure First:** Preserve only the section order and visual hierarchy.
- **Brand-Blind:** Always replace logos, specific color codes, and unique brand imagery.
- **Content-Ready:** Replace specific company claims with generic placeholder logic that communicates the "intent" of the block.
- **Fast Customization:** Everything should be built with Tailwind v4 variables (`oklch` tokens) to allow instant restyling.
