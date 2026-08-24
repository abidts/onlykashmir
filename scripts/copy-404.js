#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

// GitHub Pages cannot rewrite all requests to a single SPA entry point. Creating
// a folder index for every public route makes each URL return HTTP 200 instead
// of a 404, which is essential for crawling and direct visits.
const routes = [
  '/',
  '/about',
  '/adventure',
  '/cabs',
  '/contact',
  '/destinations',
  '/gallery',
  '/hotels',
  '/packages',
  '/reviews',
  '/request-callback',
  '/destinations/srinagar',
  '/destinations/gulmarg',
  '/destinations/pahalgam',
  '/destinations/sonmarg',
  '/destinations/dal-lake',
  '/destinations/leh-ladakh',
  '/destinations/manasbal-lake',
  '/destinations/sinthon-top',
  '/destinations/doodhpathri',
  '/destinations/drung-fall',
  '/destinations/mughal-gardens',
  '/destinations/amarnath',
  '/packages/short-adventure-trip',
  '/packages/jk-bliss',
  '/packages/honeymoon-special',
  '/packages/grand-jk',
  '/packages/family-fun',
  '/packages/adventure-explorer',
  '/packages/budget-jk',
  '/packages/kashmir-with-katra',
  '/packages/kashmir-with-ladakh',
  '/packages/srinagar-houseboat',
  '/packages/gulmarg-snow',
];

const siteUrl = 'https://www.onlykashmir.com';

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);

  for (const route of routes) {
    if (route === '/') continue;
    const routeDir = path.join(distDir, route.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
  }

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log(`Created fallback, sitemap, and ${routes.length} crawlable route entries`);
} else {
  console.warn('index.html not found in dist; skipping 404 fallback');
}
