FROM node:22-alpine AS builder
ARG UMAMI_WEBSITE_ID
ENV PUBLIC_UMAMI_WEBSITE_ID=$UMAMI_WEBSITE_ID
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
