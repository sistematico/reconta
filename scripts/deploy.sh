#!/bin/bash

PATH=$PATH:/home/nginx/.bun/bin/bun

cd ./apps/api
$BUN install

cd ../site
$BUN install
$BUN run build