# System Patterns

## Frontend
- Framework: React 18 with Vite
- Styling: TailwindCSS
- Routing: React Router DOM
- Layout: Navbar + Footer
- Components scaffolded from Figma MCP, then adapted to project conventions

## Figma MCP Integration
- Use Figma MCP server to generate component skeletons from design
- Apply Tailwind classes for consistency
- Store generated UI components in `src/components/`
- Adapt dynamic data binding for Services & Case Studies after generation

## Data Fetching
- API client at src/lib/api.js
- Uses fetch() with error handling
- Base URL from CMS_BASE_URL environment variable
- Services endpoint: `${CMS_BASE_URL}/wp-json/wp/v2/services`
- Case Studies endpoint: `${CMS_BASE_URL}/wp-json/wp/v2/case_study`

## Components
- ServiceCard: mapped from Figma design
- CaseStudyCard: mapped from Figma design
- Layout: wraps pages with Navbar + Footer

## Contact Form
- Design imported from Figma
- Submits to `/api/contact.php` (PHP mail backend)
