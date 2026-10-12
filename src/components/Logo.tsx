import Image from "next/image";
import Link from "next/link";

export function Logo({
  product,
  className = "",
  dark = false,
}: {
  product?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label="Rectify home"
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={32}
        height={32}
        className="rounded-full"
        priority
      />
      <span
        className={`font-serif text-lg leading-none ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        Rectify
        <sup className="text-[0.55em]">&trade;</sup>
        {product ? (
          <>
            {" "}
            <span className="italic text-red font-serif">{product}</span>
          </>
        ) : null}
      </span>
    </Link>
  );
}
