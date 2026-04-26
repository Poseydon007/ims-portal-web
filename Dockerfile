# syntax=docker/dockerfile:1.7
# Production image for ims-portal-web (the IMS portal monolith).
#
# Multi-stage:
#   1. builder — installs full deps, runs Vite client build + esbuild server bundle
#   2. runtime — slim Alpine image with only dist/ + node_modules + drizzle migrations

# ---- Stage 1: builder ------------------------------------------------------
FROM node:24-alpine AS builder
WORKDIR /app

RUN apk add --no-cache python3 make g++  # native deps for some packages
RUN corepack enable

# Copy manifest + lockfile first so the install layer caches independently of
# source changes.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./

# Workspace package manifests need to exist before pnpm install.
COPY apps/app/package.json        apps/app/package.json
COPY apps/content/package.json    apps/content/package.json
COPY apps/server/package.json     apps/server/package.json
COPY packages/db/package.json     packages/db/package.json
COPY packages/design-system/package.json packages/design-system/package.json
COPY packages/schemas/package.json packages/schemas/package.json
COPY packages/trpc-client/package.json packages/trpc-client/package.json

RUN corepack pnpm install --frozen-lockfile

# Now copy the rest of the source.
COPY . .

# Build the client (Vite -> dist/public/) and the server bundle (esbuild -> dist/index.js)
RUN corepack pnpm run build

# ---- Stage 2: runtime -----------------------------------------------------
FROM node:24-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy build output + the bits we need at runtime
COPY --from=builder /app/dist           ./dist
COPY --from=builder /app/node_modules   ./node_modules
COPY --from=builder /app/drizzle        ./drizzle
COPY --from=builder /app/package.json   ./package.json
COPY --from=builder /app/drizzle.config.ts ./drizzle.config.ts
COPY --from=builder /app/seed-admin.mjs ./seed-admin.mjs

EXPOSE 3000

# Health check — Express returns the SPA shell at /
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --quiet --spider http://localhost:3000/ || exit 1

CMD ["node", "dist/index.js"]
