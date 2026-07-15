#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname } from 'path';

const src = 'dist/index.html';
const dest = 'dist/404.html';

try {
  mkdirSync(dirname(dest), { recursive: true });
  if (!existsSync(src)) {
    console.error(`Source file not found: ${src} — skipping copy.`);
    process.exit(0);
  }
  
  const html = readFileSync(src, 'utf8');
  writeFileSync(dest, html, 'utf8');
  console.log(`Created ${dest} (copy of index.html for SPA routing)`);
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
}
