#!/bin/bash

PATH=$PATH:/home/nginx/.bun/bin

cd ./apps/api
[ ! -f .env ] && [ -f .env.example ] && cp .env.example .env
bun install

cd ../site
[ ! -f .env ] && [ -f .env.example ] && cp .env.example .env
bun install
bun run build