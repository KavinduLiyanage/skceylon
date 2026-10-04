import Image from "next/image";
import Link from "next/link";
import { productThumb } from "@/content/products";
import type { Product } from "@/content/products";

type RelatedProductsProps = {
  products: Product[];
};

/** Cross-links to other catalog products at the foot of a product page. */
export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="border-b border-rule bg-paper print:hidden"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
              Related products
            </p>
            <h2
              id="related-heading"
              className="mt-2 font-display text-3xl leading-tight font-medium text-ink sm:text-4xl"
            >
              More from our range
            </h2>
          </div>
          <Link
            href="/products/"
            className="font-mono text-xs font-medium text-green-deep underline-offset-4 hover:underline"
          >
            View all products →
          </Link>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:border-rule-strong hover:shadow-lg hover:shadow-ink/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-rule bg-parchment">
                  <Image
                    src={productThumb(product.slug, 640)}
                    alt={product.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-ink-soft text-pretty">
                    {product.tagline}
                  </p>
                  <p className="mt-auto pt-4 font-mono text-xs font-medium text-green-deep group-hover:underline">
                    Specs &amp; wholesale pricing →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
