#!/usr/bin/env node
import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { dirname } from 'path';

const src = 'dist/index.html';
const dest = 'dist/404.html';

try {
  mkdirSync(dirname(dest), { recursive: true });
  if (!existsSync(src)) {
    console.error(`Source file not found: ${src} — skipping copy.`);
    // Don't fail the build if dist/index.html doesn't exist yet
    process.exit(0);
  }
  copyFileSync(src, dest);
  console.log(`Copied ${src} → ${dest}`);
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
