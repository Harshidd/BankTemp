# Customization Notes: Modern Interactive Learning

## Rebranding Logic (Platform Setup)
Customizing this template for a specific education brand (e.g., [ScienceAcademy], [CodeHub]) is focused on replacing placeholder copy and modifying core theme tokens.

### Theme & Accent Colors
Change the `blue-600` primary accent to:
- `emerald-600` for Bio/Science Academies.
- `rose-600` for Creative Arts/Modern Design Hubs.
- `slate-950` for Highly Academic/Traditional Digital Schools.
- `indigo-600` for Tech/Coding Bootcamps.

### Subject & Level Modification
The `Programs.tsx` page uses a structured array for subject cards. Update the titles, levels (Beginner, Intermediate, Advanced), and icon themes to match the target curriculum. Category navigation in `Programs.tsx` can be easily expanded or reduced to fit the niche.

### Pricing Structure
Modify the `Pricing.tsx` plans array to adjust:
- Monthly costs ($0, $19, Custom).
- Feature lists (number of subjects, feedback speed).
- Call-to-action text (Enroll, Book Review, Subscribe).

### Audience Focus
The `Audience.tsx` page is dual-direction. You can hide the `educators` tab if targeting learners exclusively, or the `students` tab if building an educator-only tool hub. Both segments use the same visual DNA to maintain institutional consistency.

### MRKDEV Signature Removal
To remove the MRKDEV developer label:
1. Delete the "Academy Preview" ribbon in `page.tsx`.
2. Remove the "MRKDEV STARTER" badge in `Navbar.tsx`.
3. Clear the status indicator / signature in `Footer.tsx`.
