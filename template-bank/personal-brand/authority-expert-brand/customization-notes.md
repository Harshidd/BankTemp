# Customization Notes: Authority Expert Brand

## For Developers
This template is built with **Tailwind v4** and **Lucide React**. All components are located in the `working-template/components` directory.

### Branding
- **Colors:** Change the `stone` and `amber` classes in the components to match the client's brand. The `amber-500` is used for primary actions and accents.
- **Typography:** The template uses a mix of serif and sans-serif. Change the `font-serif` and `font-sans` classes as needed.

### Content
- **Placeholders:** All text within `[...]` (like `[Your Name]`) should be replaced first.
- **Images:** Replace the hero image and offer thumbnails in the `public/images` directory. Use photos that emphasize the "Guide" or "expert" persona.

### Navigation
The template uses a custom `onNavigate` prop passed from `page.tsx`. To add a new page:
1. Create the page component in `pages/`.
2. Add the page ID to the `onNavigate` logic in `page.tsx`.
3. Update the `Header` and `Footer` navigation arrays.

## For Content Strategists
- **Hero Section:** Focus on the specific *problem* you solve, not just your title.
- **Resources:** Lead with value. Ensure the newsletter signup is the primary goal of this page.
- **Offers:** Categorize services by "intensity" - from passive learning to 1-on-1 intensive consulting.
