# Customization Notes: Clinic Expert Local

## How to Customize
This template is built to be "brand-blind." To adapt it for a specific clinic:

1. **Global Identity**:
   - Change `CLINIC EXPERT` to the business name in `Navbar.tsx` and `Footer.tsx`.
   - Update the logo text (currently `CE`).

2. **Colors & Tokens**:
   - The primary color is Indigo (`indigo-600`).
   - For a dental practice, consider changing Indigo to a "Dental Blue."
   - For a wellness/therapy center, consider changing Indigo to "Sage Green" or "Soft Teal."

3. **Clinicians/Team**:
   - Update the `specialists` array in `Team.tsx`.
   - Ensure portraits are high-resolution for the premium hover effect.

4. **Service Groupings**:
   - Modify `serviceCategories` in `Services.tsx` to match the practice's actual departments.

5. **Contact Methods**:
   - The form is current a React-state-local placeholder. Hook it up to a backend service.
   - Update phone and maps links in `Navbar.tsx`, `Footer.tsx`, and `Contact.tsx`.

6. **Turkey-Local Implementation**:
   - The typography (Black/ExtraBold) is chosen to tolerate longer Turkish headings.
   - Update district/city names in the location blocks.
