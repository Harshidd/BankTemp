# Structure Notes: ai-feature-promo

## Technical Architecture
The template is built as a modular multi-page system using a client-side routing pattern for instant transitions within the preview environment.

### Core Folder Structure
- `/components`: Reusable UI elements (Navbar, Footer, Section headers).
- `/pages`: Individual page components (Home, Features, etc.).
- `page.tsx`: Main entry point managing page state and global layout.

### Navigation Rhythm
- Sticky, ultra-minimalist Navbar.
- Consistent Footer with deep linking.
- Integrated `useState` routing for sub-millisecond page switching.

### Component Logic
- **HeroSection**: Heavy emphasis on typography and a single "Main Image/Demo" container.
- **FeatureGrid**: Grouped capabilities with clean iconography.
- **WorkflowCards**: Content-focused layout for use-case storytelling.
- **PricingMatrix**: Simple, low-friction access selection.
- **ReleaseTimeline**: Vertical momentum-driven layout for updates.

### Design Tokens (CSS)
- Uses Tailwind CSS v4 utility classes.
- Standardized spacing scale for consistent vertical rhythm.
- Soft oklch-based color tokens for AI/Productivity vibes.
