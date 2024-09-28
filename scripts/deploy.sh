#!/bin/bash

export PATH=$PATH:/home/nginx/.bun/bin/bun

cd ./apps/api
bun install

cd ../site
bun install
bun run build