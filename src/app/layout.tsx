import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportButton } from "@/components/SupportButton";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rectify - Free enterprise-grade software, no licensing fees",
    template: "%s - Rectify",
  },
  description:
    "Rectify is a software studio building enterprise-grade business software and giving it away free. No licensing fees, no per-seat pricing, no sales calls, just download it.",
  openGraph: {
    title: "Rectify - Free enterprise-grade software",
    description:
      "Enterprise-grade business software, free. No licensing fees, no per-seat pricing, no sales calls.",
    url: SITE_URL,
    siteName: "Rectify",
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rectify - Free enterprise-grade software",
    description:
      "Enterprise-grade business software, free. No licensing fees, no per-seat pricing, no sales calls.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rectify",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.png`,
  description:
    "A small software studio building enterprise-grade business software and giving it away free.",
  sameAs: ["https://github.com/RectifySoftware"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
        <SupportButton />
        <CookieConsent />
      </body>
    </html>
  );
}
