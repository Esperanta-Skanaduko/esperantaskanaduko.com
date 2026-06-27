/**
 * generate-og-image.js
 * Generates /public/og-image.png (1200×630) for Open Graph sharing.
 *
 * Prerequisites: npm install @napi-rs/canvas
 *
 * Run: node scripts/generate-og-image.js
 * Or:  npm run generate:og
 *
 * Design:
 *  - Black background (#000000)
 *  - Dark green grid overlay
 *  - "ESPERANTA SKANADUKO" title in Copperplate style (bold, white)
 *  - Green (#00ff00) tagline
 *  - Esperanto green star (★) top-left
 *  - Green glow border
 */

import { createCanvas } from '@napi-rs/canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, '..', 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

function drawGrid(ctx) {
  ctx.strokeStyle = 'rgba(0, 80, 0, 0.35)';
  ctx.lineWidth = 1;
  const step = 40;
  for (let x = 0; x <= WIDTH; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
    ctx.stroke();
  }
  for (let y = 0; y <= HEIGHT; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y);
    ctx.stroke();
  }
}

function drawGlowBorder(ctx) {
  const margin = 16;
  ctx.shadowColor = '#00ff00';
  ctx.shadowBlur = 24;
  ctx.strokeStyle = 'rgba(0, 255, 0, 0.6)';
  ctx.lineWidth = 3;
  ctx.strokeRect(margin, margin, WIDTH - margin * 2, HEIGHT - margin * 2);
  ctx.shadowBlur = 0;
}

function drawStar(ctx, cx, cy, size, color) {
  // 5-pointed star (Esperanto symbol)
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const outer = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const inner = outer + (2 * Math.PI) / 10;
    if (i === 0) ctx.moveTo(size * Math.cos(outer), size * Math.sin(outer));
    else ctx.lineTo(size * Math.cos(outer), size * Math.sin(outer));
    ctx.lineTo((size * 0.4) * Math.cos(inner), (size * 0.4) * Math.sin(inner));
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

async function generate() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // --- Background ---
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle radial gradient overlay
  const grad = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, HEIGHT * 0.8);
  grad.addColorStop(0, 'rgba(0, 30, 0, 0.6)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Grid
  drawGrid(ctx);

  // Glow border
  drawGlowBorder(ctx);

  // --- Esperanto Star ---
  ctx.shadowColor = '#00ff00';
  ctx.shadowBlur = 20;
  drawStar(ctx, 80, 80, 40, '#00ff00');
  ctx.shadowBlur = 0;

  // --- Site Name ---
  ctx.shadowColor = '#00ff00';
  ctx.shadowBlur = 30;
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 88px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ESPERANTA', WIDTH / 2, HEIGHT / 2 - 60);
  ctx.fillText('SKANADUKO', WIDTH / 2, HEIGHT / 2 + 40);
  ctx.shadowBlur = 0;

  // --- Green accent line ---
  ctx.strokeStyle = '#00ff00';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 300, HEIGHT / 2 + 100);
  ctx.lineTo(WIDTH / 2 + 300, HEIGHT / 2 + 100);
  ctx.stroke();

  // --- Tagline ---
  ctx.fillStyle = '#00ff00';
  ctx.font = '500 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Comprehensive Esperanto Learning & Resources', WIDTH / 2, HEIGHT / 2 + 145);

  // --- URL ---
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.font = '22px sans-serif';
  ctx.fillText('esperantaskanaduko.com', WIDTH / 2, HEIGHT - 40);

  // --- Save ---
  const png = canvas.toBuffer('image/png');
  writeFileSync(OUT_PATH, png);
  console.log(`✅ OG image generated → ${OUT_PATH}`);
  console.log(`   Size: ${WIDTH}×${HEIGHT}px`);
}

generate().catch((err) => {
  console.error('❌ Failed to generate OG image:', err.message);
  console.error('   Make sure @napi-rs/canvas is installed: npm install @napi-rs/canvas');
  process.exit(1);
});
