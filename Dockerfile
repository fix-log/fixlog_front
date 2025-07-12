# 1단계: 빌드
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# 2단계: 실행
FROM node:22-alpine

WORKDIR /app

# standalone 폴더만 복사 (Next.js의 standalone 빌드)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

#ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
