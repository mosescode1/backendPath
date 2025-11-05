import { Hono } from 'hono'

/**
 * Helper to rapidly scaffold a module router with a conventional shape.
 * Each module gets:
 * - GET /            -> returns module name and status
 * - GET /health      -> simple health probe
 * - GET /version     -> placeholder version info
 */
export const moduleRouter = (moduleName: string) => {
  const r = new Hono()

  r.get('/', (c) => c.json({ module: moduleName, status: 'ok' }))
  r.get('/health', (c) => c.json({ ok: true, module: moduleName }))
  r.get('/version', (c) => c.json({ module: moduleName, version: '0.0.1' }))

  return r
}
