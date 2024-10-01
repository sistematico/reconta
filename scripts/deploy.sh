#!/usr/bin/env bash

PATH=$PATH:/home/nginx/.bun/bin

cd ./apps/api
[ ! -f .env ] && [ -f .env.example ] && cp .env.example .env
bun install
bun run db:generate
bun run db:migrate
bun run db:seed

cd ../site
[ ! -f .env ] && [ -f .env.example ] && cp .env.example .env
bun install
bun run build

sudo /usr/bin/systemctl restart reconta-hono.service