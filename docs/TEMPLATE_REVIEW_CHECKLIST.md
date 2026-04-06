# TEMPLATE_REVIEW_CHECKLIST.md

This checklist must be meticulously followed before a generated template is accepted into the template bank. It ensures quality, reusability, and risk mitigation.

## 🟢 1. Visual Hierarchy & Structure
- [ ] **Section Order:** Is the progression of sections logical and high-converting?
- [ ] **Hero Logic:** Does the hero section clearly communicate the core value proposition?
- [ ] **Rhythm:** Are there consistent margins and padding across all sections?
- [ ] **Focus:** Does the layout guide the user's eye toward primary action points (CTAs)?

## 🏗️ 2. Component Reusability
- [ ] **Modularity:** Are the Next.js components small, focused, and easily importable?
- [ ] **Prop-Driven:** Can the components be updated simply by changing their props?
- [ ] **Design Tokens:** Are all styles defined using Tailwind v4 `oklch` variables?
- [ ] **Icon Logic:** Are SVGs abstracted into an `icons.tsx` or similar component bank?

## 🚫 3. Brand & IP Decontamination
- [ ] **No Brand Names:** Have all references to the original company been removed?
- [ ] **Logo Purge:** All original logos replaced with neutral placeholders?
- [ ] **Color Generalization:** Are specific color HEX codes from the source replaced with generic `primary`, `secondary`, `accent` tokens?
- [ ] **Original Imagery:** Any brand-specific illustrations or photography removed/placeholdered?
- [ ] **Copy Extraction:** Has the specific marketing copy been rewritten to generic industry-standard "intent" text?

## 📱 4. Performance & Responsiveness
- [ ] **Desktop (1440px):** Looks pixel-perfect to the reference structure?
- [ ] **Tablet (768px):** Layout remains functional and readable (e.g., column wrapping)?
- [ ] **Mobile (390px):** Single-column stacks and touch-friendly targets?
- [ ] **Build Check:** Does `npm run build` pass without warnings or errors?

## 📂 5. Documentation Completeness
- [ ] `template-summary.md` exists and is accurate?
- [ ] `structure-notes.md` explains the "why" behind the layout?
- [ ] `customization-notes.md` clarifies how to restyle?
- [ ] `do-not-copy.md` lists the risky elements that were purged?

## 🏆 Acceptance Criteria
A template is only **ACCEPTED** if all sections above are checked. If any section fails, the template must be marked **[DRAFT]** and moved to `/template-bank/in-progress/` for further refinement.
