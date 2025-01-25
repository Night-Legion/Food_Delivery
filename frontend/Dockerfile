FROM oven/bun:1-slim AS base

# caches the node_modules hence rebuilds will be fast
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev
RUN cd /temp/dev && bun install --frozen-lockfile

FROM base AS prerelease
WORKDIR /app
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN bun check
RUN bun run build

# For the smallest image sizes
FROM base AS release
WORKDIR /app
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=prerelease /app/.svelte-kit .svelte-kit
COPY vite.config.ts package.json .

EXPOSE 4173
ENTRYPOINT [ "bun", "run", "preview", "--host" ]
