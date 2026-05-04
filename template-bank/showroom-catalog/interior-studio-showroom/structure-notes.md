# Structure Notes: Interior Studio Showroom

## 1. Global Layout
- **Navbar:** Sticky with backdrop blur. Transparent initially, transitions to white/95 upon scroll. Kept clean with an italicized secondary wordmark.
- **Footer:** Dark (stone-950) with organized columns for Brand, Navigation, Showroom Details (address, phone, mail), and Connect (socials).
- **Backgrounds:** Minimal use of stark white. Primarily relies on `stone-50` for a warmer, more natural paper-like feel.

## 2. Page Breakdown

**Home**
- `Hero`: 50/50 split with a massive lightweight heading (`Spaces that inspire living.`) and an un-cropped vertical hero image.
- `Featured Work`: Highlights two strong projects. Minimal text, large imagery.
- `Materials / Collections Teaser`: A staggered grid teasing the tactile aspect of the studio.
- `Approach`: A dark trust block anchoring the bottom of the page before the footer.

**Projects**
- Clean masonry-style grid (achieved via responsive column layout and large images).
- Hover states are slow (`duration-[1.5s]`) and scale images slightly, creating a slow-breathing, elegant interaction rather than a fast bounce.

**Collections**
- Alternating left/right staggered blocks for each material family.
- Generous padding and whitespace.
- Concludes with a strong CTA block for scheduling a showroom visit.

**Services**
- Clear, un-gimmicky grid of services.
- A 3-step "Our Process" horizontal block (Discovery, Concept & Design, Execution) to frame the studio's workflow professionally.

**About**
- Strong editorial feel with a large portrait image and rich, descriptive typography explaining the studio's philosophy.
- Followed by a 3-column Values section (Functional Elegance, Honest Craft, Precision).

**Contact**
- Practical and Turkish-market friendly.
- Hardcoded placeholders for physical address and WhatsApp consultation.
- Includes clear opening hours and a detailed inquiry form with specific dropdown options (New Project, Material Sourcing, Showroom Appointment).
