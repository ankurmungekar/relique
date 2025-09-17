# System Patterns

## Frontend
- Framework: React 18 with Vite
- Styling: TailwindCSS
- Routing: React Router DOM
- Layout: Navbar + Footer
- Components scaffolded from Figma MCP, then adapted with static content

## Responsive Design Implementation
- **Desktop-first CSS**: Default styles for desktop (1024px+), then use max-width media queries
- **TailwindCSS approach**: Default classes for desktop, `md:` and `sm:` for smaller screens
- **Progressive scaling**: `lg:` (default), `md:` (tablet), `sm:` (mobile) breakpoints
- **Media queries**: `@media (max-width: 1024px)` for tablet, `@media (max-width: 768px)` for mobile

## Figma MCP Integration
- Use Figma MCP server to generate component skeletons from design
- Apply Tailwind classes for consistency
- Store generated UI components in `src/components/`
- Populate components with static data after generation
- **Desktop layouts first** then adapt for smaller screens during MCP conversion

## Static Data Management
- Services data stored in `src/data/services.js`
- Case studies data stored in `src/data/caseStudies.js`
- Static imports in components for type safety
- JSON or JavaScript objects for structured content

## Components
- ServiceCard: mapped from Figma design, populated with static data
- CaseStudyCard: mapped from Figma design, populated with static data
- Layout: wraps pages with Navbar + Footer
- ContactInfo: static company information component
- **AdaptiveNavbar**: Desktop horizontal menu, collapses to hamburger on mobile
- **ResponsiveGrid**: Desktop-first grids that stack on smaller screens

## Progressive Adaptation Patterns
- **Content prioritization**: Full content on desktop, condensed on mobile
- **Navigation scaling**: Full menu → collapsed menu → hamburger menu
- **Layout adaptation**: Multi-column → single column on smaller screens
- **Image scaling**: Full-size images → optimized versions for mobile

## Contact Form
- Design imported from Figma
- Client-side validation using React Hook Form or similar
- Form submission via service like Formspree, Netlify Forms, or EmailJS
- No PHP backend required
- **Desktop-optimized forms** with mobile-friendly adaptations

## Performance Optimization
- **Desktop-first assets**: High-quality images and media for primary experience
- **Progressive optimization**: Smaller assets loaded on mobile devices
- **Lazy loading**: Non-critical content especially important on mobile
- **Code splitting**: Route-based splitting benefits mobile performance

## Deployment
- Build command: `npm run build`
- Deploy `dist/` folder to static hosting
- Environment variables for form service configuration
- Optimized for CDN distribution
- **Cross-device testing** as part of deployment process
