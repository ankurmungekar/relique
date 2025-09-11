# Tech Context

## Design → Code
- Source: Figma file (Relique UI)
- MCP: Figma MCP server integrated with Cursor
- Workflow: Generate UI → Insert into React components → Add CMS integration

## Frontend
- React 18
- Vite build tool
- TailwindCSS for styling
- React Router DOM for routing

## Backend / CMS
- WordPress installed under `/cms`
- REST API for Services & Case Studies
- CRUD via WP admin panel

## Hosting
- GoDaddy Shared Hosting
- React build deployed to `public_html/`
- WordPress installed in `public_html/cms/`

## Integration
- Components designed in Figma → auto-generated via MCP → wired with CMS data
- WordPress REST API as backend
- Contact form via PHP (`/api/contact.php`)
