# Structure Notes: Clinic Expert Local

## Directory Structure
```
working-template/
├── components/
│   ├── Navbar.tsx      # Sticky, glassmorphic navigation
│   ├── Footer.tsx      # Practice info & HIPAA trust strip
│   └── Icons.tsx       # Brand & custom SVG definitions
├── pages/
│   ├── Home.tsx        # Hero, services preview, lead specialist
│   ├── Services.tsx    # Specialty groupings, diagnostic flow
│   ├── Team.tsx        # Specialist cards, credentials
│   ├── Reviews.tsx     # Masonry patient stories, outcome stats
│   ├── About.tsx       # Practice history, values, facility info
│   ├── Contact.tsx     # Department-based appointment form
│   └── FAQ.tsx         # Patient knowledge base
└── page.tsx            # Main state-driven router
```

## Component Breakdown
- **Navbar**: Implements a scroll-aware transition from transparent to solid white, suitable for premium heroes.
- **Hero**: Uses large typography and subtle gradient overlays to establish an immediate high-trust elite clinical feel.
- **Service Cards**: Each card includes a "Feature List" to allow for detailed service explanations without clutter.
- **Team Cards**: Uses a "Grayscale to Color" hover effect to add a premium, professional touch to provider portraits.
- **Form System**: The Contact page uses clinical departmental choices to qualify leads automatically.
