import sharp from 'sharp';

const SRC = 'D:/Website Files/Blackout Files/Stock Photos';
const DEST = 'public/images';

const swaps = [
  { src: 'pexels-pixabay-163443 (1).jpg',              dest: 'services-social.jpg' },
  { src: 'Noah Instructing.JPG',                        dest: 'services-courses.jpg' },
  { src: 'pexels-dbgalvanis-5894622.jpg',               dest: 'services-products.jpg' },
  { src: 'nathan-dumlao-lvWw_G8tKsk-unsplash.jpg',     dest: 'services-sales.jpg' },
  { src: 'pexels-pixabay-264156.jpg',                   dest: 'about-photo.jpg' },
];

for (const { src, dest } of swaps) {
  try {
    await sharp(`${SRC}/${src}`)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(`${DEST}/${dest}`);
    console.log(`✓ ${dest}`);
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`);
  }
}
