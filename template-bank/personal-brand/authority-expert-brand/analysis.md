# Design Analysis: Authority Expert Brand

## Reference: JustinWelsh.me
The core takeaway from Justin Welsh's site is the **high-density credibility** combined with **ruthless simplicity**. He doesn't use complex animations or flashy transitions; instead, he uses font-weight, whitespace, and sharp contrast to establish authority.

## Implementation Decisions

### 1. Minimal Chrome
We implemented a transparent-to-solid header that disappears on scroll up and reappears on scroll down (simulated via state). The focus is entirely on the content.

### 2. Proof-First Layout
The "Credibility Strip" for logos and the outcome-focused testimonials are placed immediately after the value proposition to anchor the visitor's trust.

### 3. The "Free-to-Paid" Ladder
The `Resources` and `Offers` pages work together to create a conversion ladder. The Resources page handles top-of-funnel (newsletter), while the Offers page handles bottom-of-funnel (consulting).

### 4. Color Palette
- `Stone-50/100`: Calm, intellectual background.
- `Charcoal/Stone-900`: Serious, authoritative text.
- `Amber-500`: Warm, guidance-oriented brand accent.

## SEO Strategy
- **Semantic structure:** Single H1 per page, logical H2/H3 nesting.
- **Positioning tags:** Descriptions focus on high-intent keywords (Strategy, Consulting, Authority).
