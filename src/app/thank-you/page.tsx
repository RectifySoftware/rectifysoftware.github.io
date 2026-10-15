import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getProduct, resolveProduct } from "@/lib/products";
import { ThankYouEffects } from "@/components/ThankYouEffects";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for downloading Rectify.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const slug = typeof params.product === "string" ? params.product : "jabre";
  const found = getProduct(slug);
  const product = found ? await resolveProduct(found) : null;

  if (!product || product.status !== "available") redirect("/products");

  const links = [
    { href: "/faq", label: "Read the FAQ" },
    { href: "/changelog", label: "See what's new" },
    { href: "/products", label: "Browse the products" },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <ThankYouEffects
        type="download"
        product={product.slug}
        downloadUrl={product.downloadUrl}
      />
      <p className="text-sm font-medium uppercase tracking-wide text-red">
        Thank you
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">
        Your download is starting.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Rectify {product.name} v{product.latestVersion} ({product.downloadSize})
        should begin in a moment. If nothing happens,{" "}
        <a
          href={product.downloadUrl}
          className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
        >
          download it directly
        </a>
        .
      </p>
      <div className="mt-8 space-y-3 border-l-2 border-red pl-4 text-ink-soft">
        <p>
          <span className="font-medium text-ink">Windows warning?</span> The
          installer isn&rsquo;t code-signed, so SmartScreen may ask for
          confirmation. Choose &ldquo;More info&rdquo; then &ldquo;Run
          anyway&rdquo;.
        </p>
        <p>
          <span className="font-medium text-ink">
            Sign in with a demo profile.
          </span>{" "}
          The{" "}
          <Link
            href="/jabre"
            className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
          >
            Jabre page
          </Link>{" "}
          lists the demo logins and the full command set.
        </p>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
