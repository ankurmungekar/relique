# System Patterns

## Component Architecture

### Layout Components (`components/layout/`)
```typescript
// Layout wrapper with routing
const Layout: React.FC = () => {
  return (
    <div className="Layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Enhanced Navbar with hover-based dropdowns, active states, and mobile menu
const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Hover-based dropdown handling, route change detection, active state management
  // Mobile hamburger menu with animated icon
  // Focus states removed for cleaner appearance
  // Services dropdown order: Go-to-Market Strategy, Startup Advisory, BFSI & IT Advisory, 
  //                          AI Innovations, Project Excellence, Business Growth & Retention
};

// ServiceLayout - Reusable layout for service pages
interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
const ServiceLayout: React.FC<ServiceLayoutProps> = ({ title, description, children }) => {
  // Consistent service page structure with hero banner
  // Responsive padding and spacing
  // Breadcrumb navigation
};
```

### Section Components (`components/sections/`)
```typescript
// Motion-free section components with Figma-based styling
const HeroSection: React.FC = () => {
  // Swiper-based hero slider with autoplay
  // 4-second intervals, pause on hover
  // Manual pagination controls
  // Responsive heights and text sizes
};

const CoreExpertiseSection: React.FC = () => {
  // Swiper carousel with manual navigation
  // Progress bar showing percentage completion
  // Disabled button states at carousel boundaries
  // Responsive card layouts and stacking
};

const SolutionsSection: React.FC = () => {
  // Auto-sliding carousel with drag functionality
  // 4-second intervals, smooth transitions
  // Responsive card dimensions and grid
};
```

### Page Components (`pages/`)
```typescript
// Page components that aggregate sections
const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <HeroSection />
      <CoreExpertiseSection />
      <AboutSection />
      <SolutionsSection />
    </div>
  );
};

const AboutPage: React.FC = () => {
  // Hero banner, company story, mission/vision, core values
  // Fully responsive with stacked layouts on mobile
};

const ContactPage: React.FC = () => {
  // Contact form with validation
  // Company details and location
  // Responsive form layout and grid
};

const SolutionsHubPage: React.FC = () => {
  // All 6 solutions displayed in responsive grid
  // Cards with icons, titles, descriptions, and CTAs
};

// Service Pages using ServiceLayout
const GoToMarketStrategyPage: React.FC = () => {
  // ServiceLayout wrapper with custom content
  // Responsive cards and grid layouts
};
// Similar pattern for:
// - StartupAdvisoryPage
// - BFSIAdvisoryPage
// - AIInnovationsPage
// - ProjectExecutionPage
// - BusinessGrowthPage
```

## Styling Patterns

### Figma-Based Design System
```typescript
// Consistent color palette
const colors = {
  primary: '#0F071D',      // Dark background
  secondary: '#7B4EFF',    // Purple CTA buttons
  accent: '#4EC6C6',       // Cyan active states
  text: '#F5F5F5',         // Light text
  muted: '#B0B0B0',        // Muted text
  surface: '#1B1328',      // Card backgrounds
};

// Typography with Roboto font
style={{ fontFamily: 'Roboto' }}
```

### Responsive Design Patterns
```css
/* Mobile-first responsive approach */
.container {
  @apply max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px];
}

/* Consistent spacing */
.section-spacing {
  @apply py-[60px] md:py-[90px] lg:py-[120px];
}

/* Component spacing */
.component-gap {
  @apply gap-[16px] md:gap-[20px] lg:gap-[24px];
}

/* Responsive breakpoints strategy */
/* sm: 640px  - Small devices (large phones) */
/* md: 768px  - Medium devices (tablets) */
/* lg: 1024px - Large devices (desktops) */

/* Responsive grid patterns */
.grid-responsive-2 {
  @apply grid-cols-1 md:grid-cols-2;
}

.grid-responsive-3 {
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}

.grid-responsive-4 {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-4;
}

/* Responsive text sizes */
.heading-1-responsive {
  @apply text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px];
}

.heading-2-responsive {
  @apply text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px];
}

.body-text-responsive {
  @apply text-[14px] md:text-[16px];
}

/* Responsive flex layouts */
.flex-stack-mobile {
  @apply flex-col lg:flex-row;
}

/* Mobile hamburger menu pattern */
.hamburger-icon {
  @apply flex lg:hidden flex-col gap-[6px] w-[28px] h-[24px];
}

.hamburger-line {
  @apply w-full h-[3px] bg-[#F5F5F5] rounded-full transition-all duration-300;
}

/* Mobile menu slide animation */
.mobile-menu {
  @apply max-h-0 overflow-hidden transition-all duration-300 ease-in-out;
}

.mobile-menu-open {
  @apply max-h-screen;
}
```

## State Management Patterns

### Dropdown Management (Hover-Based)
```typescript
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

// Hover-based dropdown with seamless interaction
const handleDropdownOpen = (dropdownName: string) => {
  setActiveDropdown(dropdownName);
};

const handleDropdownClose = () => {
  setActiveDropdown(null);
};

// Wrapper div bridges gap between trigger and menu
<div 
  onMouseEnter={() => handleDropdownOpen('services')}
  onMouseLeave={handleDropdownClose}
>
  <button>Services</button>
  {activeDropdown === 'services' && (
    <div className="absolute top-full left-0 pt-[4px]">
      <div className="dropdown-menu">
        {/* Menu items */}
      </div>
    </div>
  )}
</div>

// Route change handling
useEffect(() => {
  setActiveDropdown(null);
}, [location.pathname]);
```

### Mobile Menu Management
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
};

// Close mobile menu on route change
useEffect(() => {
  setMobileMenuOpen(false);
  setActiveDropdown(null);
}, [location.pathname]);

// Animated hamburger icon
<button 
  onClick={toggleMobileMenu}
  className="lg:hidden flex flex-col gap-[6px] w-[28px] h-[24px]"
>
  <span className={`hamburger-line ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
  <span className={`hamburger-line ${mobileMenuOpen ? 'opacity-0' : ''}`} />
  <span className={`hamburger-line ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
</button>

// Slide-down mobile menu
<div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
  mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
}`}>
  {/* Mobile navigation items */}
</div>
```

### Carousel State Management
```typescript
const [currentSlide, setCurrentSlide] = useState(0);
const [isDragging, setIsDragging] = useState(false);

// Auto-slide with pause on interaction
useEffect(() => {
  if (!isDragging) {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }
}, [isDragging, items.length]);
```

## Routing Patterns

### React Router Setup
```typescript
// App.tsx routing configuration
<Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  </Routes>
</Router>
```

### Active Link Detection
```typescript
const isActivePage = (path: string) => {
  return location.pathname === path;
};

// Apply active styles conditionally (color-only, no background)
className={`outline-none focus:outline-none ${
  isActivePage('/') 
    ? 'text-[#4EC6C6]' 
    : 'text-[#F5F5F5] hover:text-[#4EC6C6]'
}`}
```

## Navigation UI/UX Patterns

### Services Dropdown Menu Order
```typescript
// Consistent ordering across all pages
const servicesOrder = [
  { path: '/services/go-to-market-strategy', label: 'Go-to-Market Strategy' },
  { path: '/services/startup-advisory', label: 'Startup Advisory' },
  { path: '/services/bfsi-it-advisory', label: 'BFSI & IT Advisory' },
  { path: '/services/ai-innovations', label: 'AI Innovations' },
  { path: '/services/project-execution', label: 'Project Excellence' },
  { path: '/services/business-growth', label: 'Business Growth & Retention' },
];
```

### Focus State Management
```typescript
// Remove default browser focus outlines for cleaner appearance
// All interactive elements use: outline-none focus:outline-none
<Link className="outline-none focus:outline-none" />
<button className="outline-none focus:outline-none" />
```

### Hover Bridge Pattern (Prevents Dropdown Flicker)
```typescript
// Wrapper div with padding creates seamless hover area
<div className="absolute top-full left-0 pt-[4px]">
  <div className="bg-[#08040F] rounded-[16px]">
    {/* Dropdown content */}
  </div>
</div>
// The pt-[4px] padding prevents dropdown from closing when mouse 
// moves from trigger to menu through the gap
```

## Performance Patterns

### Motion-Free Animations
```css
/* CSS transitions instead of JavaScript animations */
.transition-smooth {
  @apply transition-all duration-300;
}

/* Navbar hover effects (color-only, no background) */
.nav-hover-effect {
  @apply hover:text-[#4EC6C6] outline-none focus:outline-none;
}

/* Dropdown menu item hover */
.dropdown-hover {
  @apply hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200;
}
```

### Image Optimization
```typescript
// Proper image sizing and formats
<img 
  src="/images/image.png" 
  alt="Description" 
  className="w-[104px] h-[70px] object-contain"
/>
```

## Event Handling Patterns

### Drag Functionality
```typescript
const handleMouseDown = (e: React.MouseEvent) => {
  setIsDragging(true);
  setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
  setScrollLeft(carouselRef.current?.scrollLeft || 0);
};

const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
  const walk = (x - startX) * 2;
  if (carouselRef.current) {
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }
};
```

## Build & Deployment Patterns

### Production Configuration
```json
// package.json optimizations
{
  "homepage": "./",
  "scripts": {
    "build": "react-scripts build",
    "serve": "serve -s build"
  }
}
```

### Static Asset Management
```
public/
├── images/
│   ├── relique-logo-white.png
│   ├── about.png
│   └── icons/
└── index.html
```

## Component Communication Patterns

### Props Interface Design
```typescript
interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}
```

### Event Propagation
```typescript
// Prevent event bubbling in interactive components
onClick={(e) => {
  e.stopPropagation();
  handleAction();
}}
```
