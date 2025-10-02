# Session Tokens Demo (Express + Prisma + PostgreSQL + Next.js)

## 1) DB
docker compose up -d

## 2) Server
cd server
npm i
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
# listen http://localhost:4000

## 3) Web (Next.js)
cd ../web
npm i
npm run dev
# listen http://localhost:3000