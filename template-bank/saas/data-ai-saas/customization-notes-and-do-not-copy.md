# Customization Notes: Data & AI SaaS Starter

This guide explains how to restyle, rebrand, and adapt this data-driven SaaS starter for an analytics or AI product.

## 🎨 1. Intelligence-Centric Theming (Tailwind v4 / oklch)

This variant uses **Emerald/Indigo** as its primary visual identity. To rebrand:

1. **Update `globals.css` / `:root` tokens:**
   - `--primary`: The main data/growth color (default: emerald `oklch(0.7 0.2 150)`).
   - `--secondary`: The intelligence/AI accent color (default: indigo `oklch(0.5 0.2 280)`).
   - `--background`: Deep background (default: slate-950 `oklch(0.1 0.05 240)`).
2. **Apply Chart Accents:**
   - The components use Tailwind's `emerald-500` and `indigo-500` values. For a unified rebrand, update these to your specific data-visualization palette.

## 📈 2. Dashboard Mockups & Visualization

1. **Replace Placeholders:** All visuals are currently `div` blocks with generic gradients, icons, and progress bars.
2. **Actual Dashboard Previews:** Replace the Hero and Deep-Dive mockups with **actual screenshots of your analytics environment**.
3. **Data Points:** If you want to customize the "reported outcomes" row, update the numbers and labels in `page.tsx`.

## ✍️ 3. Copy & Intelligence Messaging

1. **From Noise to Clarity:** This is the core "narrative hook" for this variant. If your product doesn't have a "data cleaning" step, re-label the steps in `InsightFlow.tsx` to reflect your specific AI/Analysis path.
2. **Outcome-First:** Focus on what your users *achieved* (e.g., "40% faster analysis", "99% detection accuracy").

## 🧩 4. Modularity

- **Panel Grid:** The grid is built using `col-span-2` for a more "dashboard-like" layout. You can easily:
    - **Reorder** the grid items to highlight your most important analytics features.
    - **Remove** the "Outcome Summary Bar" if your product is in an early stage without verified metrics.
- **Deep-Dive Section:** This section is perfect for showcasing one highly complex part of your analysis path (e.g., "Predictive Forecasting").

---

# Do-Not-Copy: Data & AI SaaS Starter

To maintain brand-blind integrity, DO NOT copy these specific elements from any reference sites during customization.

## 🚫 1. Original Dashboard Designs
- **Layouts:** Use your own UI structure, do not mimic the exact layout of popular tools like Amplitude, Mixpanel, or Google Analytics.
- **Color Palettes:** Avoid using the exact "rainbow" or "neon" palettes popularized by specific AI products.

## 🚫 2. Original Terminology
- **Claims:** Avoid using generic AI buzzwords like "AGI", "LLM-first", or the exact wording used by tools like Scale AI or Databricks.
- **Copy:** Do NOT copy the specific "From data to magic" style copy from early AI startups.

## 🚫 3. Original Charts
- **Graphics:** Do not use the exact SVG path data of complex visualizations from the reference site.
- **Icons:** All icons are generic Lucide components; replace them with original icons for a finished look.
