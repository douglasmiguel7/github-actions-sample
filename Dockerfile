# builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY src src
COPY package.json .
COPY package-lock.json .
RUN npm ci && npm run build

# runner
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY .env .
RUN npm ci --only=production
CMD ["npm", "start"]
EXPOSE 3000