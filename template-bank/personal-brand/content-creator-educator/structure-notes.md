# Content Creator & Educator Structure

## Global DNA
- **Design Philosophy**: Vibrant, approachable, content-first. Designed for educators and creators who want an energetic, highly engaging platform. No corporate stiffness. Open layout with dynamic borders and shadow play.
- **Routing Structure**: Simple client-side state routing matching other templates (`useState` in `page.tsx`). No hard URL reloads to act as a seamless SPA-like starter.
- **Micro-Interactions**: Hover states scale elements, bouncy active states, animated marquees, and dynamic hover borders to give the feel of a rapidly evolving digital environment.
- **Visual Vocabulary**: Large typography, uppercase italic headings (`font-black`, `italic`, `uppercase` combinations), bright accent colors (emerald/amber/slate), pill-shaped components, and abstract background glows.

## Core Template Components

### `Header.tsx`
- Floating transparent header that turns into a blurred, solid background on scroll.
- Distinctly separates generic navigation links from primary "Contact/Action" CTAs.
- Includes a clean slide-down or generic mobile menu setup.

### `Footer.tsx`
- Huge, bold typography.
- Emphasizes personal branding over corporate lists.
- Clean social icon row using general shapes instead of exact brand logos to ensure brand agnosticism.

## Pages Overview

### 1. `Home.tsx`
- **Hero Area**: High-energy value proposition. Highlights newsletter/community size right at the top for instant social proof. Abstract soft gradients in the background to avoid boxy feeling.
- **Proof Strip**: Grayscale brand logos indicating past features or collaborations.
- **Product Preview Grid**: Small taster of the main products offered. Emphasizes "action" (e.g. self-paced, prices, dynamic hover effects).
- **Knowledge Bank (Resources Preview)**: Dark, high-contrast section emphasizing fresh content (articles/videos).
- **Newsletter Section**: The primary capture mechanism at the bottom, placed in a bright, soft-bordered (pill/blob style) container.

### 2. `About.tsx`
- **Narrative Structure**: Avoids traditional resumes. Instead uses a large, typography-driven "manifesto" style. 
- **Principles Grid**: Dark background section. Replaces generic "skills" with "Core Principles" to solidify the creator's unique point of view.
- **Action CTA**: Vibrant, high-contrast final action area driving users to the Community.

### 3. `Products.tsx` (or Courses)
- **High-Density Catalog**: Built to handle digital goods (Courses, Workshops, Templates). Uses standard product cards with features/bullet lists.
- **Tiered Value**: Clear pricing layouts.
- **Trust Quotes**: Interleaved testimonials focusing heavily on outcomes and time-saving.
- **Bundle Logic**: A special "All-Access" bundle section to demonstrate how a creator might upsell multiple products.

### 4. `Resources.tsx`
- **Content Hub**: Mimics a lively blog or video portal. Filters (All, Articles, Videos, Guides).
- **Featured Resource**: A large, dark-themed hero resource block to push a high-value piece of content.
- **Grid Layout**: Clean, fast-loading grid for articles, videos, podcasts.

### 5. `Community.tsx`
- **Newsletter-First Hook**: The page opens with an aggressive pitch for a free newsletter. Shows high value in joining.
- **Private Network Pitch**: Details for joining a more exclusive "Creator Circle". Uses modular grids with generic icons indicating past members.
- **Marquee Testimonials**: A constant flow of positive feedback at the bottom.

### 6. `Contact.tsx`
- **Pathways System**: Instead of just a form, explicitly breaks down *why* someone should contact (Speaking, Partnerships, Advising).
- **Form Area**: Standard inputs with a friendly, conversational tone (e.g., "Where should I send the signal?").

### 7. `FAQ.tsx`
- **Accordion Design**: Clean, easy-to-read Q&A tailored for objections related to digital products and community entry.
- **Fallback Support**: Bottom area directing users to contact support if their question isn't answered.

## Crucial Restrictions
- **No Direct Branding Clones**: This template holds NO specific Ali Abdaal or specific YouTuber text, colors, or structural exacts. It mimics the *category* (high-energy creator/educator), not the person.
- **No Intrusive Preview Chrome**: All routing logic stays purely within the template. It adheres strictly to the Direct View catalog experience rule.
