FROM node:20-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 80
CMD node ./dist/server/entry.mjs