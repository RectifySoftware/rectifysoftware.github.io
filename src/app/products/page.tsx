import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { resolveProducts, type ResolvedProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Free enterprise-grade business software from Rectify. Real internal tools, no licensing fees, no per-seat pricing. Download the installer or grab the source.",
};

export default async function ProductsPage() {
  const products = await resolveProducts();

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-charcoal-2 to-charcoal text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-serif text-4xl md:text-5xl">Products</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper-dim/90">
            This is the whole offering: real, enterprise-grade internal
            tools, built properly and released free. There&rsquo;s no
            pricing tier to pick, because there&rsquo;s only one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-20">
          {products.map((product) =>
            product.status === "available" ? (
              <AvailableProductCard key={product.slug} product={product} />
            ) : (
              <ComingSoonProductCard key={product.slug} product={product} />
            )
          )}
        </div>
      </section>
    </>
  );
}

function AvailableProductCard({
  product,
}: {
  product: Extract<ResolvedProduct, { status: "available" }>;
}) {
  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="overflow-hidden border border-line bg-charcoal">
        <Image
          src={product.screenshot}
          alt={product.screenshotAlt}
          width={1456}
          height={640}
          className="w-full"
        />
      </div>
      <div>
        <h2 className="font-serif text-3xl text-ink">
          <Link href={`/${product.slug}`} className="hover:underline">
            Rectify <span className="italic text-red">{product.name}</span>
          </Link>
        </h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-red">
          v{product.latestVersion}
        </p>
        <p className="mt-5 leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          <span className="font-medium text-ink">Built for: </span>
          {product.audience}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={product.downloadUrl}
            className="bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
          >
            Download for Windows ({product.downloadSize})
          </a>
          <a
            href={product.repoUrl}
            className="border border-ink px-6 py-3 text-sm font-medium text-ink transition-all hover:border-red hover:bg-gradient-to-b hover:from-red-light hover:to-red-dark hover:text-paper"
          >
            View on GitHub
          </a>
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          <Link
            href={`/${product.slug}`}
            className="underline decoration-line underline-offset-4 hover:text-red"
          >
            Read the full product page
          </Link>
          {" · "}
          <Link
            href="/changelog"
            className="underline decoration-line underline-offset-4 hover:text-red"
          >
            See what&rsquo;s changed in each version
          </Link>
        </p>
      </div>
    </article>
  );
}

function ComingSoonProductCard({
  product,
}: {
  product: Extract<ResolvedProduct, { status: "coming-soon" }>;
}) {
  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="flex aspect-video items-center justify-center border border-line-dark bg-gradient-to-b from-charcoal-2 to-charcoal">
        <span className="font-serif text-2xl italic text-paper-dim/50">
          Rectify {product.name}
        </span>
      </div>
      <div>
        <h2 className="font-serif text-3xl text-ink">
          Rectify <span className="italic text-red">{product.name}</span>
        </h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-red">
          Coming soon
        </p>
        <p className="mt-5 leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          <span className="font-medium text-ink">Built for: </span>
          {product.audience}
        </p>
        <div className="mt-8">
          <span className="inline-block cursor-default border border-line px-6 py-3 text-sm font-medium text-ink-soft">
            In development, no download yet
          </span>
        </div>
      </div>
    </article>
  );
}
