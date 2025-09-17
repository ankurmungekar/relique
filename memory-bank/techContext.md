# Tech Context

## Design → Code
- Source: Figma file (Relique UI)
- MCP: Figma MCP server integrated with Cursor
- Workflow: Generate UI → Insert into React components → Add static content

## Frontend
- React 18
- Vite build tool
- TailwindCSS for styling
- React Router DOM for routing

## Responsive Design Requirements
- **Desktop-first approach** - Design and develop starting from desktop (1024px+)
- **Progressive adaptation** - Scale down designs for tablet and mobile
- **Tablet compatibility** - Adapted layouts for tablets (768px - 1024px)
- **Mobile compatibility** - Optimized experience for mobile (320px - 768px)
- **Breakpoints**: Desktop (default), Tablet (max-width: 1024px), Mobile (max-width: 768px)
- **Touch-friendly interfaces** for mobile and tablet users

## Content Management
- Static content approach
- Services & Case Studies hardcoded in components
- No backend or CMS required

## Hosting
- Static hosting (can be deployed to Vercel, Netlify, or any static host)
- React build deployed as static files
- No server-side components needed

## Integration
- Components designed in Figma → auto-generated via MCP → populated with static data
- Contact form can use client-side solutions or form services (Formspree, Netlify Forms)
- All 5 pages: Home, Services, Case Studies, About, Contact

## Pages Structure
1. **Home** - Hero section and company overview
2. **Services** - Static list of IT consulting services
3. **Case Studies** - Static showcase of successful projects
4. **About** - Company information and team
5. **Contact** - Contact form and company details

## Cross-Device Compatibility
- Full-featured desktop experience as primary design
- Adaptive navigation (desktop menu → hamburger menu on mobile)
- Progressive enhancement for smaller screens
- Optimized performance across all devices
