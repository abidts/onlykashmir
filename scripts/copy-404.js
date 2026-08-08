#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { dirname } from 'path';

const src = 'public/404.html';
const dest = 'dist/404.html';

try {
  mkdirSync(dirname(dest), { recursive: true });
  if (!existsSync(src)) {
    console.error(`Source file not found: ${src} — skipping copy.`);
    process.exit(0);
  }
  
  copyFileSync(src, dest);
  console.log(`Created ${dest} (GitHub Pages SPA redirect)`);
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
}
