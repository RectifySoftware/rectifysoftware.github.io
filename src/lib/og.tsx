import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "Rectify: enterprise-grade software, free. No licensing fees, no per-seat pricing, no sales calls.";

const HEADLINE = "Enterprise-grade software.";
const ACCENT = "Free.";
const SUB = "No licensing fees. No per-seat pricing. No sales calls.";

async function loadSerif() {
  try {
    const text = `${HEADLINE}${ACCENT}Rectify`;
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&text=${encodeURIComponent(text)}`,
        { signal: AbortSignal.timeout(5000) }
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (
      await fetch(url, { signal: AbortSignal.timeout(5000) })
    ).arrayBuffer();
  } catch {
    return null;
  }
}

export async function renderOgImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const serif = await loadSerif();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(180deg, #1e1e1e 0%, #151515 100%)",
          color: "#faf9f6",
          fontFamily: serif ? "Playfair" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ fontSize: 40 }}>Rectify</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1.05, display: "flex" }}>
            {HEADLINE}
          </div>
          <div
            style={{ fontSize: 88, lineHeight: 1.05, color: "#cc2b2f", display: "flex" }}
          >
            {ACCENT}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#cfcac0",
              fontFamily: "sans-serif",
              display: "flex",
            }}
          >
            {SUB}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: serif
        ? [{ name: "Playfair", data: serif, style: "normal", weight: 600 }]
        : undefined,
    }
  );
}
