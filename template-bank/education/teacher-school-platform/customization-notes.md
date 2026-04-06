# Customization Notes

## Branding
- **Logo:** Replace the `EduLogo` component placeholder with real SVG or image assets.
- **Colors:** Update CSS variables in `globals.css` or the template's specific style block to match school colors.
- **Copy:** Localization-ready headings; lengths are tested for Turkish equivalents.

## Features
- **Reporting Grid:** The reporting section is modular—simply add/remove `DataMetricCard` components.
- **Solution Groups:** The solutions page uses a standard grid—easy to swap for different software verticals.

## Localization (Tr-Tr)
- All navigation links are centralized in `config/navigation.ts` (if applicable) or the `Header` component for easy translation.
- Form fields in the Request Demo page are standard HTML/React forms, ready for validation messages in any language.
