# Tech Context

## Design → Code
- Source: Figma file (Relique UI)
- MCP: Figma MCP server integrated with Cursor
- Workflow: Generate UI → Insert into React components → Add static content

## Frontend Architecture
- **React 18** with Create React App
- **React Router DOM** for client-side routing with Layout component
- **TailwindCSS** for styling with Figma-based design system
- **TypeScript** for type safety and better development experience
- **Motion-free** approach for better performance (removed framer-motion)

## Project Structure
```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer, Layout)
│   ├── sections/        # Page sections (Hero, About, Solutions, etc.)
│   └── ui/
│       └── icons/       # Icon components (ChevronIcons, etc.)
├── pages/               # Page components (HomePage, AboutPage, etc.)
└── App.tsx             # Main app with routing configuration
```

## Responsive Design Requirements
- **Desktop-first approach** - Design and develop starting from desktop (1024px+)
- **Progressive adaptation** - Scale down designs for tablet and mobile
- **Tablet compatibility** - Adapted layouts for tablets (768px - 1024px)
- **Mobile compatibility** - Optimized experience for mobile (320px - 768px)
- **Breakpoints**: Desktop (default), Tablet (max-width: 1024px), Mobile (max-width: 768px)
- **Touch-friendly interfaces** for mobile and tablet users

## Navigation & Routing
- **React Router DOM** with nested routing structure
- **Layout component** wrapping all pages with consistent Navbar and Footer
- **Active page highlighting** with proper color schemes (#4EC6C6 for active states)
- **Dropdown menus** for Industries and Solutions with click-outside functionality
- **Smooth transitions** and hover effects throughout the interface

## Content Management
- **Static content approach** with structured components
- **Modular component design** for easy content updates
- **Figma-driven styling** with exact color codes and typography
- **Auto-sliding carousel** for solutions section with drag functionality

## Performance Optimizations
- **No motion libraries** - removed framer-motion for better performance
- **Optimized images** with proper sizing and formats
- **CSS transitions** instead of JavaScript animations
- **Efficient component structure** with proper React patterns

## Hosting & Deployment
- **Static hosting** compatible (Vercel, Netlify, or any static host)
- **React build** deployed as static files
- **Relative path configuration** for direct file system access
- **Production-ready** build configuration

## Integration Features
- **Figma MCP integration** for design-to-code workflow
- **Component-based architecture** for maintainability
- **TypeScript support** for better development experience
- **Contact form** ready for integration with form services

## Pages Structure
1. **Home** - Hero section, expertise overview, about preview, solutions carousel
2. **Services** - Detailed service offerings with proper categorization
3. **About** - Company information, team details, and values
4. **Contact** - Contact form and company details
5. **Industries** - Industry-specific solutions (via dropdown navigation)
6. **Solutions** - Case studies and success stories (via dropdown navigation)

## Cross-Device Compatibility
- **Enhanced navbar** with proper mobile considerations
- **Responsive carousel** with touch/drag support
- **Adaptive layouts** for different screen sizes
- **Optimized performance** across all devices
- **Consistent design language** maintained across breakpoints
