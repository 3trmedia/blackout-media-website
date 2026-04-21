import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const SRC = 'D:/Website Files/Blackout Files';
const DEST = 'public';

mkdirSync(`${DEST}/images`, { recursive: true });
mkdirSync(`${DEST}/logos`, { recursive: true });

const photos = [
  { src: 'Stock Photos/pexels-dbgalvanis-5894622.jpg',       dest: 'images/services-courses.jpg' },
  { src: 'Stock Photos/pexels-dbgalvanis-5894624.jpg',       dest: 'images/services-social.jpg' },
  { src: 'Stock Photos/pexels-dbgalvanis-5910472.jpg',       dest: 'images/services-sales.jpg' },
  { src: 'Stock Photos/Product Photos Gun.jpg',               dest: 'images/services-products.jpg' },
  { src: 'Stock Photos/pexels-dbgalvanis-9037522.jpg',       dest: 'images/hero-poster.jpg' },
  { src: 'Stock Photos/pexels-marc-sartain-2148108718-29922085.jpg', dest: 'images/about-photo.jpg' },
  { src: 'Stock Photos/pexels-dbgalvanis-6621958.jpg',       dest: 'images/about-action.jpg' },
  { src: 'Stock Photos/thomas-tucker-qnpAJnuPBd0-unsplash.jpg', dest: 'images/cta-bg.jpg' },
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
