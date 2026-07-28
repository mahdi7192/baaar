# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Enable pnpm v9 via corepack
RUN corepack enable && corepack prepare pnpm@9 --activate

# Copy package dependency definition files
COPY package.json pnpm-lock.yaml ./

# Install dependencies cleanly
RUN pnpm install --frozen-lockfile

# Copy application source code
COPY . .

# Build the Astro production static bundle
RUN pnpm build

# Stage 2: Production runner stage using lightweight Nginx
FROM nginx:alpine AS runner

# Default PORT environment variable for cloud platforms (Liara, Render, Cloud Run, Railway, etc.)
ENV PORT=80

# Copy custom Nginx configuration template (Nginx entrypoint converts $PORT dynamically)
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
