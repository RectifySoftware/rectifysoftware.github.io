import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportButton } from "@/components/SupportButton";

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

const siteUrl = "https://rectify.getanchor.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rectify - Enterprise-grade software, free",
    template: "%s - Rectify",
  },
  description:
    "Rectify is a software studio building enterprise-grade business software and giving it away free. No licensing fees, no per-seat pricing, no sales calls, just download it.",
  openGraph: {
    title: "Rectify - Enterprise-grade software, free",
    description:
      "Enterprise-grade business software, free. No licensing fees, no per-seat pricing, no sales calls.",
    url: siteUrl,
    siteName: "Rectify",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rectify - Enterprise-grade software, free",
    description:
      "Enterprise-grade business software, free. No licensing fees, no per-seat pricing, no sales calls.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SupportButton />
      </body>
    </html>
  );
}
