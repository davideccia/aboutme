FROM node:22-alpine AS builder
ARG UMAMI_WEBSITE_ID
ENV PUBLIC_UMAMI_WEBSITE_ID=$UMAMI_WEBSITE_ID
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
