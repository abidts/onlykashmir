#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname } from 'path';

const src = 'dist/index.html';
const dest = 'dist/404.html';

const redirectScript = `
    <script>
      // Single Page Application redirect for GitHub Pages
      (function() {
        var pathname = window.location.pathname;
        var search = window.location.search;
        var hash = window.location.hash;
        var redirectUrl =
          window.location.protocol +
          '//' +
          window.location.hostname +
          (window.location.port ? ':' + window.location.port : '') +
          '/' +
          '?p=/' +
          pathname.slice(1).replace(/&/g, '~and~') +
          (search ? '&q=' + search.slice(1).replace(/&/g, '~and~') : '') +
          hash;
        window.location.replace(redirectUrl);
      })();
    </script>
`;

try {
  mkdirSync(dirname(dest), { recursive: true });
  if (!existsSync(src)) {
    console.error(`Source file not found: ${src} — skipping copy.`);
    process.exit(0);
  }
  
  let html = readFileSync(src, 'utf8');
  
  // Insert redirect script at the beginning of the <head>
  html = html.replace('<head>', `<head>${redirectScript}`);
  
  writeFileSync(dest, html, 'utf8');
  console.log(`Created ${dest} with redirect script`);
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
}
