# TEMPLATE_EXTRACTION_WORKFLOW.md

This protocol defines the step-by-step process for extracting reusable template logic from a high-quality reference website using the AI Website Cloner Template.

## ⚙️ Process: From Reference to Reusable Template

### Phase 1: Selection & Strategic Analysis
- **Identify a reference site** (URL) for a specific category.
- **Why this site?** Record why it's a strong reference:
    - High-quality layout rhythm?
    - Excellent conversion flow?
    - Clear visual hierarchy?
    - Innovative UI pattern?
- **Document strengths** in `source-notes/analysis.md`.

### Phase 2: Reconnaissance & Extraction
- **Run `/clone-website <url>`** via Claude Code or equivalent browser-driven automation.
- **Inspect behaviors:** Perform the mandatory interaction sweep (Scroll, Click, Hover).
- **Extract design tokens:** Colors, fonts, and spacing into `globals.css` (later to be generalized).
- **Extract assets:** Icons, PNGs, and videos into `public/images/`.

### Phase 3: The "Brand-Blind" Transformation
- **Remove all identity:**
    - Replace logos with generic `Logo` components or text.
    - Change brand-specific colors to neutral Tailwind v4 tokens (e.g., `primary`, `secondary`).
    - Purge unique brand illustrations and replace them with themed placeholders.
- **Content Generalization:**
    - Rewrite copy to keep the "intent" but remove the "claim" (e.g., "Company X is the best" → "Experience industry-leading performance").
- **Asset Review:** Identify which assets are "identity assets" (must be removed) vs. "reusable assets" (abstract icons, generic textures).

### Phase 4: Component Packaging
- **Modularize sections:** Split the built page into clean, reusable React components in `/working-template/`.
- **Apply generic styling:** Ensure use of Tailwind `oklch` tokens for easy restyling.
- **Verify build:** Run `npm run build` to confirm everything is standalone and functional.

### Phase 5: Documentation & Categorization
- **Create internal notes:**
    - `structure-notes.md`: Why the section order works.
    - `customization-notes.md`: How to change the look/feel.
    - `do-not-copy.md`: Explicit list of what to avoid from the original.
- **Categorize:** Move the folder into the correct `/template-bank/[category]/`.

## 🚨 Pre-Categorization Checklist
- [ ] No original logos or brand names remain.
- [ ] No unique trade secrets or patented logic copied.
- [ ] Component names are generic and descriptive.
- [ ] Logic is standalone (no external API dependencies from the source).
- [ ] Tailwind v4 tokens are used for all colors and fonts.
- [ ] Mobile and tablet responsiveness is verified.
