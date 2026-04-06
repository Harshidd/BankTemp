# Customization Guide: Content Creator & Educator

Here are detailed instructions for the user when deploying this template for an actual client or their own brand.

## High-Level Configuration
The template relies extensively on `emerald` and `amber` Tailwind configurations in addition to `slate`.
- Modify the global text selection and primary buttons using standard Tailwind colors.
- If switching from a vibrant palette to a dark mode palette, be sure to update the `<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 ...">` blobs to use darker colors (e.g., `emerald-900/50`).

## Navigation System
Currently built as a state-based multi-page Single Page App (SPA) to prevent browser reloads.
- To adapt to Next.js full App Router logic, break `/pages/*` into actual directories (e.g., `app/about/page.tsx`).
- Update the `<button>` tags triggering state changes (`onClick={() => onNavigate('about')}`) to Next.js `<Link href="/about">` elements.

## Replacing Abstract Visuals
- **Hero Image:** Ensure the hero image in `Home.tsx` is an isolated PNG or a high-contrast lifestyle shot. Replace `[High Quality Personal Photo]` with a real `<Image />` component or `<img>`.
- **Logos:** In the "Proof Strip", replace the array `['Forbes', 'Entrepreneur', ...]` with actual SVGs or trusted partner logos.

## The Content-First Logic
This template succeeds based on volume of content. 
- In `/pages/Resources.tsx`, wire up the array of `[1, 2, 3, 4, 5, 6]` placeholders to an actual CMS like Sanity or MDX files.
- The Newsletter components appear in both `Home.tsx` and `Community.tsx`. Consider extracting the `form` input into a reusable `<NewsletterCapture />` component to wire it easily to ConvertKit or Mailchimp APIs.

## Tone & Typographic Tuning
- The current aesthetic uses heavy weight uppercase-italic combos (e.g., `font-bold uppercase italic underline`).
- For a softer "lifestyle creator" look, remove the `uppercase` and `italic` flags, and replace `font-bold` with `font-medium`.
