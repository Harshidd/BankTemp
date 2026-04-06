# Customization Notes: High-Trust Local Business (V2 Multi-Page)

## Core Rebranding Logic (Local-Ready)
To adapt this template for any specific local niche (Plumbing, HVAC, Cleaning, etc.), follow these steps:

### 1. Global Niche/Business Search & Replace
- Replace `[Niche]` with the target service (e.g., "Plumbing", "Electrical").
- Replace `[Main City]` and `[City Name]` with the primary and secondary service areas.
- Replace `[Company Name]` with the actual business name.
- Replace `[Year]` with the founding year for the "Since [Year]" claims.

### 2. Contact & Localization (Turkey-Local ready)
- **Phone:** Replace `(000) 000-0000` with the local business number.
- **WhatsApp:** The `Contact.tsx` page includes a dedicated WhatsApp link placeholder. In Turkey, this is a dominant conversion channel. Use `https://wa.me/90xxxxxx` logic.
- **Address (NAP):** Standardized fields in the footer and contact page accommodate both US/EU and Turkish address formats (İl, İlçe, Mahalle).

### 3. SEO Adaptation (Area Page)
- **City Grid:** Expand the `cities` array in `Areas.tsx` to include specific neighborhoods or districts (e.g., in Istanbul: Beşiktaş, Şişli, Kadıköy). This is critical for local service SEO.
- **Service Tags:** Use the specific H1/H2 tags in `Home.tsx` and `Services.tsx` to include `[Service] [City]` keywords (e.g., "Klima Servisi Beşiktaş").

### 4. Visual Theming (Blue to Niche-Specific)
- Default theme is **Blue-Slate** (Trust/Professional).
- **Plumbing:** Switch `blue-600` to `sky-500` or `indigo-600`.
- **HVAC/Emergency:** Switch `blue-600` to `orange-600` or `red-600` for urgency.
- **Cleaning/Green:** Switch `blue-600` to `emerald-600`.

### 5. MRKDEV Identity Removal
- To remove the template signature for the final client:
  - **Navbar:** Delete the `Sparkles` badge in `Navbar.tsx`.
  - **Footer:** Delete the `MRKDEV STARTER TEMPLATE` note in `Footer.tsx`.
  - **Router Shell:** Remove the `MRKDEV STARTER` floating ribbon in the main `page.tsx`.

### 6. Multilingual Support (Future)
- Components use standard React strings. For a full Turkish site, translate the core labels in each page component. The layouts are designed with flexible flex/grid to prevent breaking with longer Turkish text (e.g., "Appointment" -> "Randevu", "Professional" -> "Profesyonel").
