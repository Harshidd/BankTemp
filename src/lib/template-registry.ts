export interface TemplateMetadata {
  id: string;
  name: string;
  category: string;
  description: string;
  styleTag: string;
  status: 'ready' | 'draft' | 'in-progress';
  // Catalog / Showcase Additions
  valueProposition?: string;
  pageCount?: number;
  useCases?: string[];
  strengths?: string[];
  mrkdevContext?: string;
  showcaseSummary?: string;
  catalogReview?: string;
}

export const TEMPLATE_CATEGORIES = [
  { id: 'saas', name: 'SaaS', icon: 'zap' },
  { id: 'education', name: 'Education', icon: 'graduation-cap' },
  { id: 'personal-brand', name: 'Personal Brand', icon: 'user' },
  { id: 'agency', name: 'Agency', icon: 'briefcase' },
  { id: 'product-promotion', name: 'Product Promotion', icon: 'shopping-bag' },
  { id: 'local-business', name: 'Local Business', icon: 'map-pin' },
];

export const TEMPLATES: TemplateMetadata[] = [
  {
    id: 'modern-b2b-saas',
    name: 'Modern B2B SaaS',
    category: 'saas',
    description: 'A premium, high-velocity product starter inspired by Linear and Figma. Engineered for structural clarity and architectural depth.',
    styleTag: 'Minimalist Premium',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'The architectural foundation for high-velocity software teams.',
    pageCount: 6,
    useCases: [
      'DevTools & IDEs',
      'Workflow & Ops Hubs',
      'Collaborative SaaS',
      'Data & AI Observability',
      'Enterprise Platforms',
      'Security & Governance'
    ],
    strengths:[
      '6-Page Full Product Site',
      'High-Density Feature Discovery',
      'Multi-Tier Pricing Comparisons',
      'Enterprise Inquiry Hubs',
      'Architectural Help/FAQ Core',
      'Premium Minimalist DNA'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'This template provides a complete product existence beyond the hero page. It includes deep features breakdown, comprehensive pricing models, mission-driven storytelling, and a professional pre-sales inquiry portal.',
    catalogReview: 'A masterclass in B2B SaaS structural minimalism. It handles complex product hierarchies with sub-millisecond visual clarity.',
  },
  {
    id: 'data-ai-saas',
    name: 'Data & AI SaaS',
    category: 'saas',
    description: 'Intelligence-driven layout with dashboard previews and problem-to-insight storytelling. Optimized for analytic density and high-velocity visibility.',
    styleTag: 'Data-Centric Industrial',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Communicating the clarity behind complex intelligence.',
    pageCount: 6,
    useCases: [
      'Logistics Optimization',
      'EdTech Analytics',
      'Infrastructure Monitoring',
      'E-Commerce Insights',
      'Security Anomaly Detection',
      'Operational BI Ops'
    ],
    strengths: [
      '6-Page Multi-Page Structure',
      'In-Depth Dashboard Mockups',
      'Problem-to-Insight Storytelling',
      'Niche-Targeted Solutions Grid',
      'High-Density Capability Matrix',
      'Technical FAQ Knowledge Hub'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'This template is more than a simple landing demo; it is a full 6-page professional product engine. It translates technical data complexity into actionable business clarity through dashboard-oriented visual storytelling.',
    catalogReview: 'A powerhouse for data-centric software. It maintains high visual density while ensuring structural sub-millisecond clarity for analytics-heavy products.',
  },
  {
    id: 'workflow-ops-saas',
    name: 'Workflow & Ops SaaS',
    category: 'saas',
    description: 'Execution-focused layout with process-oriented storytelling and chaos-to-control framing. Optimized for operational clarity and high-velocity coordination.',
    styleTag: 'Coordination Industrial',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Standardize your execution reality with absolute control.',
    pageCount: 6,
    useCases: [
      'RevOps & Sales Coordination',
      'Engineering Ops Management',
      'Customer Success Org Workflows',
      'Internal Approval Orchestration',
      'Compliance & Audit Protocols',
      'Operational BI Workflows'
    ],
    strengths: [
      '6-Page Multi-Page Structure',
      'Chaos-to-Control Visual Flow',
      'Industrial Team-Sync Mockups',
      'Niche-Segmented Solution Grids',
      'Usage-Based Execution Pricing',
      'Technical Operating Protocol Hub'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'A powerhouse for coordination-heavy software. This 6-page professional engine converts fragmented operational chaos into standardized execution reality through structured visual storytelling.',
    catalogReview: 'One of the cleanest execution-driven starters in the system. It perfectly balances aggressive industrial styling with absolute structural cleanness.',
  },
  {
    id: 'modern-interactive-learning',
    name: 'Modern Interactive Learning',
    category: 'education',
    description: 'An energetic, interactive-first academic starter designed for STEM hubs and digital academies. Optimized for active engagement and structural mastery paths.',
    styleTag: 'Curious & Energetic',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Designing the future of interactive mastery.',
    pageCount: 7,
    useCases: [
      'STEM Learning Platforms',
      'Digital & AI Academies',
      'Skill-Building Hubs',
      'Teacher-Supported Systems',
      'Practice-Based Education',
      'Future Professional Schools'
    ],
    strengths: [
      '7-Page Complete Multi-Page System',
      'First-Principles "Mastery Loop" Flow',
      'Dual Student & Educator Portals',
      'Subject Hierarchy with Level Tiers',
      'High-Density Academic Analytics Mockups',
      'Dynamic Subscription Plan Models'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'The first complete educational existence in the template bank. This 7-page professional engine converts passive information delivery into active structural mastery through practice-first visual storytelling.',
    catalogReview: 'A masterclass in modern educational engagement. It perfectly balances energetic industrial styling with absolute structural clarity for learning.',
  },
  {
    id: 'high-trust-local-service',
    name: 'High-Trust Local Service',
    category: 'local-business',
    description: 'A professional conversion-focused system for regional service businesses that rely on trust, transparency, and rapid local response.',
    styleTag: 'High-Conversion Local',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'The definitive starter for local SEO and trust-based conversions.',
    pageCount: 6,
    useCases: [
      'Plumbing & HVAC', 
      'Electrical Services', 
      'Professional Cleaning', 
      'Repair & Maintenance', 
      'Local Technicians', 
      'Home Service Providers'
    ],
    strengths: [
      '6-Page Full Site Structure',
      'Local-SEO Optimized Directory',
      'High-Velocity Inquiry Forms',
      'WhatsApp/Contact Channel Ready',
      'Turkey-Local Adaptable Layout',
      'Fast Professional Rebranding'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'This template is more than a landing page; it is a complete 6-page professional business engine. It handles everything from storytelling and trust-building on the About page to localized SEO directory logic on the Areas page.',
    catalogReview: 'A strong, catalog-ready starter designed for service businesses that need a credible, high-trust presence in less than 30 minutes of customization.',
  },
  {
    id: 'teacher-school-platform',
    name: 'Teacher & School Platform',
    category: 'education',
    description: 'A clean, institutional-grade academic starter designed for school management, learning analytics, and educator tools. Optimized for structured administrative trust.',
    styleTag: 'Institutional & Structured',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Standardizing excellence across school administrations.',
    pageCount: 7,
    useCases: [
      'School Management SaaS',
      'Learning Management Systems',
      'Teacher Progress Tools',
      'Student Analytics Hubs',
      'District Communication Portals',
      'Academic Administration BI'
    ],
    strengths: [
      '7-Page Comprehensive System',
      'Dual Teacher & Admin Audiences',
      'Modular "Solutions" Grid System',
      'High-Trust Dashboard Previews',
      'Educational Tiered Pricing Models',
      'Clean Institutional Design DNA'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'This 7-page professional engine provides a complete institutional existence beyond a simple landing page. It includes dedicated sections for reporting analytics, dual-audience workflows, and tiered academic pricing protocols.',
    catalogReview: 'A powerhouse for B2B Education SaaS. It perfectly balances trustworthy institutional styling with absolute structural clarity for school administrators.',
  },
  {
    id: 'authority-expert-brand',
    name: 'Authority Expert Brand',
    category: 'personal-brand',
    description: 'A premium, trust-driven system for high-end consultants, creators, and solo experts. Optimized for personal authority, newsletter growth, and high-ticket offers.',
    styleTag: 'Premium & Personal',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Building the definitive platform for solo authority.',
    pageCount: 7,
    useCases: [
      'High-Ticket Consultants',
      'Educators & Course Creators',
      'Executive Coaches',
      'Niche Advisors & Experts',
      'Keynote Speakers',
      'Solo Founders & Builders'
    ],
    strengths: [
      '7-Page Complete Brand System',
      'Calm, Authority-Driven Design DNA',
      'Tiered Offer Implementation Hub',
      'Content-First Resources Framing',
      'Social Proof & Engagement Metrics',
      'Newsletter-Centric Capture'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'The first complete personal brand existence in the template bank. This 7-page professional engine converts expert knowledge into a high-trust digital platform through calm, focused visual storytelling.',
    catalogReview: 'A masterclass in personal brand positioning. It perfectly balances premium minimalism with absolute structural clarity for knowledge-based businesses.',
  },
  {
    id: 'content-creator-educator',
    name: 'Content Creator & Educator',
    category: 'personal-brand',
    description: 'A vibrant, content-first system for modern educators and digital creators. Optimized for course selling, community building, and newsletter growth.',
    styleTag: 'Vibrant & Modern',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Building the ultimate engine for modern content educators.',
    pageCount: 7,
    useCases: [
      'Course Creators & Educators',
      'YouTubers & Video Creators',
      'Newsletter-First Brands',
      'Digital Product Sellers',
      'Community-Led Brands',
      'Knowledge Entrepreneurs'
    ],
    strengths: [
      '7-Page Complete Content System',
      'Vibrant, Creator-Centric Design',
      'Digital Product Showcase Hub',
      'Multi-Format Content Library',
      'Vetted Community Application',
      'Strategic Newsletter Engine'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'A high-energy 7-page professional engine for the modern creator economy. It converts audience interest into deep engagement through structured digital product paths and vibrant content-first storytelling.',
    catalogReview: 'The definitive starter for modern creators. It perfectly balances approachable, high-energy styling with absolute structural clarity for product-driven brands.',
  },
  {
    id: 'ai-feature-promo',
    name: 'AI Feature Promo',
    category: 'product-promotion',
    description: 'A clean, modern, feature-first promotional website starter for AI tools and productivity enhancements. Optimized for premium product storytelling and sub-millisecond conversion.',
    styleTag: 'Feature-First Editorial',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Translating complexity into intelligent product clarity.',
    pageCount: 7,
    useCases: [
      'AI Tools & Assistants',
      'Workflow Enhancers',
      'SaaS Feature Launches',
      'Smart Utility Apps',
      'Developer Tools',
      'Productivity Extensions'
    ],
    strengths: [
      '7-Page Multi-Page System',
      'Feature-First Narrative',
      'Workflow-Specific Stories',
      'Interactive Release Timeline',
      'Clean Editorial DNA',
      'Turkey-Local Ready'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'This 7-page professional engine provides a complete product existence beyond a simple hero page. It handles everything from deep feature breakdowns to interactive release momentum and usage-based accessibility models.',
    catalogReview: 'A masterclass in single-product promotion. It maintains high visual breathing room while ensuring absolute structural clarity for AI-driven products.',
  },
  {
    id: 'clinic-expert-local',
    name: 'Clinic Expert Local',
    category: 'local-business',
    description: 'A premium, trust-driven multi-page system for specialist clinics and expert practices. Optimized for clinical authority and seamless patient appointment flows.',
    styleTag: 'Elite Clinical Trust',
    status: 'ready',
    // Catalog-grade Metadata
    valueProposition: 'Establishing specialist authority for high-trust practices.',
    pageCount: 7,
    useCases: [
      'Dental & Eye Clinics',
      'Therapy & Psychology Hubs',
      'Specialist Medical Practices',
      'Aesthetics & Wellness Centers',
      'Professional Consultant Offices',
      'Expert-Led Care Groups'
    ],
    strengths: [
      '7-Page Complete Multi-Page System',
      'Specialist-First Authority DNA',
      'Departmental Service Grouping',
      'High-Trust Credentialing Blocks',
      'Elite Patient Journey Narrative',
      'Department-Logic Appointment Flow'
    ],
    mrkdevContext: 'MRKDEV STARTER TEMPLATE',
    showcaseSummary: 'This 7-page professional engine converts clinic uncertainty into specialist trust. It handles everything from department-specific service breakdowns and practitioner bio hierarchies to low-friction clinical inquiry protocols.',
    catalogReview: 'The definitive starter for expert-led local practices. It perfectly balances calm, premium clinical styling with absolute structural authority for specialist health and consultation services.',
  },
];
