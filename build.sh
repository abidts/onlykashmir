#!/bin/bash
set -e

echo "Building React + Vite app..."
npm ci --legacy-peer-deps || npm install --legacy-peer-deps
npm run build

echo "Build completed successfully!"
echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist
