BackendPath modular monolith (Bun + Hono)

Modules included
- core, auth, user, roadmap, credit, progress, admin, notification, share

Quick start
1) Install dependencies:
   bun install

2) Run locally:
   bun run dev
   open http://localhost:3000

3) Docker (dev):
   docker compose up --build
   open http://localhost:3000

HTTP routes
- GET / -> service health/info
- Module base routes are available under /api/{module}
  - GET /api/{module}/ -> { module, status: 'ok' }
  - GET /api/{module}/health -> { ok: true }
  - GET /api/{module}/version -> version info

Structure
- src/modules/{module}/router.ts -> router per module
- src/index.ts -> Hono app mounting all module routers

Notes
- This is a scaffold for a modular monolith; expand each module router with controllers/services as needed.
