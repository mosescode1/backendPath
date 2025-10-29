import { Hono } from 'hono'
import { auth, user, roadmap, credit, progress, admin, notification, share } from '../modules'

const app = new Hono()

// Root health/info endpoint
app.get('/', (c) => c.json({ ok: true, service: 'backendPath', time: new Date().toISOString() }))

// Module routes (modular monolith)
// app.route('/api/core', core)
app.route('/api/auth', auth)
app.route('/api/user', user)
app.route('/api/roadmap', roadmap)
app.route('/api/credit', credit)
app.route('/api/progress', progress)
app.route('/api/admin', admin)
app.route('/api/notification', notification)
app.route('/api/share', share)


// Start the HTTP server when executed directly (not under test)
const PORT = Number(process.env.PORT || 3000)
if (!process.env.VITEST && !process.env.JEST_WORKER_ID) {
  Bun.serve({ port: PORT, fetch: app.fetch })
  console.log(`Server listening on http://localhost:${PORT}`)
}
