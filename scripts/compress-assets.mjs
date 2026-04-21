import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const SRC = 'D:/Website Files/Blackout Files';
const DEST = 'public';

mkdirSync(`${DEST}/images`, { recursive: true });
mkdirSync(`${DEST}/logos`, { recursive: true });

const photos = [
  // Service card photos — real client shots take priority
  { src: 'Stock Photos/222A1413.jpg',                              dest: 'images/services-social.jpg' },
  { src: 'Stock Photos/222A1518.jpg',                              dest: 'images/services-courses.jpg' },
  { src: 'Stock Photos/222A1556.jpg',                              dest: 'images/services-sales.jpg' },
  { src: 'Stock Photos/Product Photos Gun.jpg',                    dest: 'images/services-products.jpg' },
  // Hero poster fallback
  { src: 'Stock Photos/pexels-dbgalvanis-9037522.jpg',            dest: 'images/hero-poster.jpg' },
  // About section
  { src: 'Stock Photos/Noah Instructing.JPG',                      dest: 'images/about-photo.jpg' },
  { src: 'Stock Photos/TAR Flag Group Photo.JPG',                  dest: 'images/about-action.jpg' },
  // CTA background
  { src: 'Stock Photos/pexels-marc-sartain-2148108718-29922085.jpg', dest: 'images/cta-bg.jpg' },
  // Video stills — extras for portfolio/work section later
  { src: 'Stock Photos/Still 2026-01-09 144727_3.11.2.jpg',       dest: 'images/still-1.jpg' },
  { src: 'Stock Photos/Still 2026-02-07 211810_1.9.1.jpg',        dest: 'images/still-2.jpg' },
  { src: 'Stock Photos/Still 2026-03-13 154410_2.34.1.jpg',       dest: 'images/still-3.jpg' },
  { src: 'Stock Photos/Noah and His Rifle.JPG',                    dest: 'images/noah-rifle.jpg' },
];

const logos = [
  'Logos/NTAC logo shield 3D.png',
  'Logos/Iron rescue Logo.png',
  'Logos/FT-Logo_White_280x80_1.png',
  'Logos/White logo Axil.png',
];

for (const { src, dest } of photos) {
  try {
    await sharp(join(SRC, src))
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(join(DEST, dest));
    console.log(`✓ ${dest}`);
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`);
  }
}

for (const logo of logos) {
  try {
    const destName = logo.split('/')[1].toLowerCase().replace(/\s+/g, '-');
    copyFileSync(join(SRC, logo), join(DEST, 'logos', destName));
    console.log(`✓ logos/${destName}`);
  } catch (e) {
    console.error(`✗ ${logo}: ${e.message}`);
  }
}

console.log('\nDone.');
