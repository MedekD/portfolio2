FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
ARG NEXT_PUBLIC_SITE_URL=https://example.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
RUN npm run build
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup -S portfolio && adduser -S portfolio -G portfolio
COPY --from=build --chown=portfolio:portfolio /app/.next ./.next
COPY --from=build --chown=portfolio:portfolio /app/node_modules ./node_modules
COPY --from=build --chown=portfolio:portfolio /app/package.json ./package.json
COPY --from=build --chown=portfolio:portfolio /app/public ./public
USER portfolio
EXPOSE 3000
CMD ["npm", "start"]
