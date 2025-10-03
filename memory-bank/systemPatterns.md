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

// Enhanced Navbar with hover-based dropdowns and active states
const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  // Hover-based dropdown handling, route change detection, active state management
  // Focus states removed for cleaner appearance
  // Services dropdown order: Go-to-Market Strategy, Startup Advisory, BFSI & IT Advisory, 
  //                          AI Innovations, Project Excellence, Business Growth & Retention
};
```

### Section Components (`components/sections/`)
```typescript
// Motion-free section components with Figma-based styling
const HeroSection: React.FC = () => {
  // Auto-sliding hero with manual navigation
};

const SolutionsSection: React.FC = () => {
  // Auto-sliding carousel with drag functionality
  // 4-second intervals, smooth transitions
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
/* Desktop-first approach */
.container {
  @apply max-w-[1440px] mx-auto px-[120px];
}

/* Consistent spacing */
.section-spacing {
  @apply py-[120px];
}

/* Component spacing */
.component-gap {
  @apply gap-[24px];
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
