/**
 * Generates the derived images for each product from its main photo:
 *   public/images/thumbs/<slug>-640.avif  cards on the homepage, catalog, related products
 *   public/images/thumbs/<slug>-96.avif   header dropdown
 *   public/og/<slug>.jpg                  social share preview (JPEG: crawlers skip AVIF)
 *
 * Run after adding a product or changing a main photo:
 *   node scripts/make-product-images.mjs
 *
 * Add the product's slug and main photo to PHOTOS below first.
 */
import sharp from "sharp";

const PHOTOS = {
  "5kg-coco-peat-blocks": "public/images/product-blocks-1.avif",
  "grow-bags": "public/images/product-growbags-1.avif",
  "5kg-coco-chip-blocks": "public/images/product-chip-blocks-1.avif",
  "coir-fibre-bales": "public/images/product-fibre-1.avif",
  "25kg-coco-peat-bales": "public/images/product-bales-1.avif",
  "coco-peat-discs": "public/images/product-discs-1.avif",
};

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const [slug, source] of Object.entries(PHOTOS)) {
  const card = await sharp(source)
    .resize({ width: 640, withoutEnlargement: true })
    .avif({ quality: 55 })
    .toFile(`public/images/thumbs/${slug}-640.avif`);

  const icon = await sharp(source)
    .resize(96, 96, { fit: "cover" })
    .avif({ quality: 55 })
    .toFile(`public/images/thumbs/${slug}-96.avif`);

  const share = await sharp(source)
    .resize(1200, 630, { fit: "contain", background: "#f3f8f0" })
    .flatten({ background: "#f3f8f0" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`public/og/${slug}.jpg`);

  console.log(
    `${slug}: card ${kb(card.size)}, icon ${kb(icon.size)}, share ${kb(share.size)}`,
  );
}
