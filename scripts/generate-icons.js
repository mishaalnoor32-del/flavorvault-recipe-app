import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Helper to write a basic uncompressed/deflated valid PNG from raw RGBA buffer
function createPng(width, height, getPixelRgba) {
  // Row filter byte (0 = None) + 4 bytes per pixel (RGBA)
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(rowBytes * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // CRC32 table
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c >>> 0;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bit depth
  ihdrData[9] = 6; // Color type 6: RGBA
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace: none

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Pixel drawing function for FlavorVault brand icon (Warm dark slate background, orange chef hat & flame)
function drawFlavorVaultIcon(x, y, w, h, isMaskable = false) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Background
  const bgR = 26; // #1a
  const bgG = 29; // #1d
  const bgB = 34; // #22

  if (!isMaskable) {
    // Squircle radius
    const cornerR = w * 0.22;
    const inBoxX = Math.abs(dx) <= (cx - cornerR);
    const inBoxY = Math.abs(dy) <= (cy - cornerR);
    if (!inBoxX && !inBoxY) {
      const cornerDx = Math.abs(dx) - (cx - cornerR);
      const cornerDy = Math.abs(dy) - (cy - cornerR);
      if (Math.sqrt(cornerDx * cornerDx + cornerDy * cornerDy) > cornerR) {
        return [0, 0, 0, 0]; // Transparent outside squircle
      }
    }
  }

  // Brand colors:
  // Orange: [249, 115, 22] (#f97316)
  // Amber gold: [245, 158, 11] (#f59e0b)
  // Light gold: [254, 240, 138] (#fef08a)

  // Scale factor relative to 512
  const s = w / 512;

  // Hat Base bar: rect x: 176..336, y: 320..352
  const hatBaseLeft = (176 * s);
  const hatBaseRight = (336 * s);
  const hatBaseTop = (320 * s);
  const hatBaseBottom = (345 * s);

  if (x >= hatBaseLeft && x <= hatBaseRight && y >= hatBaseTop && y <= hatBaseBottom) {
    return [245, 158, 11, 255]; // Amber base
  }

  // Chef Hat Crown (three overlapping circles and base bridge)
  const leftBulbDist = Math.hypot(x - (190 * s), y - (250 * s));
  const midBulbDist = Math.hypot(x - (256 * s), y - (210 * s));
  const rightBulbDist = Math.hypot(x - (322 * s), y - (250 * s));

  const isHatCrown =
    (leftBulbDist <= 55 * s) ||
    (midBulbDist <= 65 * s) ||
    (rightBulbDist <= 55 * s) ||
    (x >= 180 * s && x <= 332 * s && y >= 240 * s && y <= 325 * s);

  // Flame inside the vault (center)
  const flameDist = Math.hypot(x - (256 * s), y - (280 * s));
  if (flameDist <= 28 * s && y <= 315 * s) {
    if (flameDist <= 14 * s) {
      return [255, 255, 255, 255]; // White flame core
    }
    return [254, 240, 138, 255]; // Warm yellow flame
  }

  if (isHatCrown) {
    // Subtle orange-to-amber gradient
    const gradFactor = (y - 150 * s) / (180 * s);
    const r = Math.round(249 + (234 - 249) * gradFactor);
    const g = Math.round(115 + (88 - 115) * gradFactor);
    const b = Math.round(22 + (12 - 22) * gradFactor);
    return [Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b)), 255];
  }

  // Soft ambient glow around center
  if (dist < 180 * s) {
    const alphaGlow = Math.max(0, 1 - dist / (180 * s)) * 0.2;
    const r = Math.round(bgR * (1 - alphaGlow) + 249 * alphaGlow);
    const g = Math.round(bgG * (1 - alphaGlow) + 115 * alphaGlow);
    const b = Math.round(bgB * (1 - alphaGlow) + 22 * alphaGlow);
    return [r, g, b, 255];
  }

  return [bgR, bgG, bgB, 255];
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. 192x192 PNG
const png192 = createPng(192, 192, (x, y, w, h) => drawFlavorVaultIcon(x, y, w, h, false));
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), png192);

// 2. 512x512 PNG
const png512 = createPng(512, 512, (x, y, w, h) => drawFlavorVaultIcon(x, y, w, h, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), png512);

// 3. 512x512 Maskable PNG (full bleed background with padded center)
const pngMaskable512 = createPng(512, 512, (x, y, w, h) => drawFlavorVaultIcon(x, y, w, h, true));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), pngMaskable512);

// 4. 180x180 Apple Touch Icon PNG
const appleTouchPng = createPng(180, 180, (x, y, w, h) => drawFlavorVaultIcon(x, y, w, h, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchPng);

// 5. Favicon ICO (use 192 PNG buffer or copy as favicon.png/ico)
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), png192);

console.log('Successfully generated all PWA icons: 192x192, 512x512, maskable 512x512, apple-touch-icon!');
