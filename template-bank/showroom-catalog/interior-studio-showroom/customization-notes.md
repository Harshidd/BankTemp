# Customization Notes

## Color Palette
The template relies on Tailwind's `stone` palette to provide a warmer, more natural feel than generic grays.
To shift the mood:
- **Cooler / Modern:** Replace `stone-` with `slate-` or `zinc-`.
- **Warmer / Desert:** Replace `stone-` with `amber-50` for backgrounds and `orange-900` for text.

## Typography
Currently using the default `font-sans` combined with `font-serif` and `italic` for elegant accents.
To elevate the design further:
- Add a custom serif font (e.g., Playfair Display or Lora) to the global CSS and apply it to the `.font-serif` class.
- Use a geometric sans-serif (e.g., Montserrat or Inter) for navigation and body text.

## Imagery
This template is highly dependent on image quality. 
- Ensure project images have consistent aspect ratios (e.g., 4:3 or 16:9).
- Use high-resolution, professionally lit architectural photography.
- Darken or lighten the placeholder images if they clash with the text overlays.

## Adapting for Turkish Market
- The Contact page is already pre-structured with a WhatsApp consultation link and a standard Istanbul address format.
- Translating the headings to Turkish will work well because the generous `leading-tight` and `tracking-tight` settings accommodate longer words without breaking layouts.
- Change the `inquiry` form options to match specific local services (e.g., "Anahtar Teslim Proje", "Mobilya & Malzeme").
