#!/bin/bash

PATH=$PATH:/home/nginx/.bun/bin

cd ./apps/api
bun install

cd ../site
bun install
bun run build