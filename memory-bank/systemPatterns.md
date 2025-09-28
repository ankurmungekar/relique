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

// Enhanced Navbar with dropdowns and active states
const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  // Click-outside handling, route change detection, active state management
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

### Dropdown Management
```typescript
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

// Click-outside handling
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActiveDropdown(null);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
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

// Apply active styles conditionally
className={`${isActivePage('/') ? 'bg-[#4EC6C6] text-[#0F071D]' : 'text-[#F5F5F5]'}`}
```

## Performance Patterns

### Motion-Free Animations
```css
/* CSS transitions instead of JavaScript animations */
.transition-smooth {
  @apply transition-all duration-300;
}

.hover-effect {
  @apply hover:bg-[#F5F5F5] hover:text-[#0F071D];
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
