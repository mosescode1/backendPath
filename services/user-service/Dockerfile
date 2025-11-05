# Multi-stage Dockerfile for Bun + Hono modular monolith
FROM oven/bun:1 AS base
WORKDIR /app

# Install only production deps in final image, but we need lockfile
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

# Copy source
COPY src ./src
COPY tsconfig.json ./

# Use Bun's built-in TS transpilation at runtime; no separate build step
EXPOSE 3000
CMD ["bun", "run", "--hot", "src/index.ts"]
