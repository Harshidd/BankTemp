# Customization Notes: Workflow & Ops SaaS Starter

This guide explains how to restyle, rebrand, and adapt this execution-driven SaaS starter for a workflow or operations tool.

## 🎨 1. Operational Theming (Tailwind v4 / oklch)

This variant uses **Amber/Slate** for a high-contrast "Command Center" feel. To rebrand:

1. **Update `globals.css` / `:root` tokens:**
   - `--primary`: The action/focus color (default: amber `oklch(0.8 0.15 80)`).
   - `--background`: Clean base background (default: slate-50 `oklch(0.98 0.01 240)`).
   - `--foreground`: Deep text/accents (default: slate-950 `oklch(0.1 0.05 240)`).
2. **Apply Step Accents:**
   - Section step markers (`01`, `02`, `03`) use `slate-950` as their base and `amber-500` as the active/hover state. Update these to match your primary brand color.

## ⚙️ 2. Workflow Mockups & Process

1. **Replace Placeholders:** All visuals are currently `div` blocks with generic gradients, icons, and "task bars."
2. **Actual Workflow Screen-captures:** Replace the Hero and Coordination mockups with **actual screenshots of your process builder or task list**.
3. **Step counts:** If your protocol has more or fewer than 3 steps, update the `workflowSteps` array in `ProcessSteps.tsx`.

## ✍️ 3. Execution Messaging

1. **Chaos to Control:** This is the core "narrative hook" for this variant. If your product is more about "Syncing" than "Chaos," re-label the `ChaosToControl.tsx` section to reflect "Fragmentation vs Alignment."
2. **Action-First:** Focus on what your users *do* (e.g., "Take Control", "Scale Results").

---

# Do-Not-Copy: Workflow & Ops SaaS Starter

To maintain brand-blind integrity, DO NOT copy these specific elements from any reference sites during customization.

## 🚫 1. Original Project Management UI
- **Task Lists:** Use your own UI structure, do not mimic the exact layout of Linear, Asana, or Monday.com.
- **Color Palettes:** Avoid using the exact "traffic light" palettes specialized for task priority.

## 🚫 2. Original Operations Terminology
- **Methodologies:** Avoid using trademarked terms like "Scrum", "Kanban", or the exact "Backlog/Cycle" terminology from specific competitors.
- **Copy:** Do NOT copy the specific "Move fast and break nothing" or "The team focal point" style copy from industry leaders.

## 🚫 3. Original Workflow Graphics
- **Visuals:** Do not use the exact SVG path data of complex workflow diagrams from the reference site.
- **Step Icons:** All icons are generic Lucide components; replace them with original icons for a finished look.
