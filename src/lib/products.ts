import { getLiveRelease, type LiveRelease } from "./github";

export type ChangelogEntry = {
  version: string;
  date: string;
  /** Markdown, either hand-written or pulled from a GitHub release body. */
  body: string;
};

export type AvailableProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  status: "available";
  screenshot: string;
  screenshotAlt: string;
  github: { owner: string; repo: string };
  /** Used only if the GitHub API can't be reached at build/request time. */
  fallback: LiveRelease;
};

export type ComingSoonProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  status: "coming-soon";
};

export type Product = AvailableProduct | ComingSoonProduct;

export type ResolvedProduct =
  | (AvailableProduct & LiveRelease)
  | ComingSoonProduct;

export const products: Product[] = [
  {
    slug: "jabre",
    name: "Jabre",
    tagline: "A GDS-style booking terminal, without the GDS bill",
    description:
      "Rectify Jabre is a Windows desktop travel booking terminal built for agencies and internal ops teams, modeled on the same command-line workflow used by Sabre Red 360 and Amadeus Selling Platform. Search availability, sell segments, build PNRs, price itineraries, and print them to PDF, all from the keyboard.",
    audience:
      "Travel agencies, ops teams, and anyone who needs a real reservation-terminal workflow without a GDS contract.",
    status: "available",
    screenshot: "/screenshots/jabre-availability.png",
    screenshotAlt:
      "Rectify Jabre terminal showing a flight availability search from Chicago O'Hare to New York JFK, with three nonstop options listed by flight number, departure and arrival time, and fare class.",
    github: { owner: "RectifySoftware", repo: "rectify-jabre" },
    fallback: {
      repoUrl: "https://github.com/RectifySoftware/rectify-jabre",
      latestVersion: "1.0.2",
      downloadUrl:
        "https://github.com/RectifySoftware/rectify-jabre/releases/download/v1.0.2/Rectify-Jabre-Setup-1.0.2.exe",
      downloadSize: "75.5 MB",
      changelog: [
        {
          version: "1.0.2",
          date: "2026-08-23",
          body: "Latest published release.",
        },
      ],
    },
  },
  {
    slug: "beijer",
    name: "Beijer",
    tagline: "A market data terminal, without the Bloomberg bill",
    description:
      "Rectify Beijer is a market data and analytics terminal for traders and analysts, built in the same keyboard-driven spirit as the Bloomberg Terminal, without the five-figure annual license or the enterprise sales cycle.",
    audience:
      "Traders, analysts, and finance teams who want a real market terminal without an enterprise contract.",
    status: "coming-soon",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Merges a product's static editorial content with its live GitHub release data. */
export async function resolveProduct(product: Product): Promise<ResolvedProduct> {
  if (product.status === "coming-soon") return product;

  const live = await getLiveRelease(
    product.github.owner,
    product.github.repo,
    product.fallback
  );
  return { ...product, ...live };
}

export async function resolveProducts(): Promise<ResolvedProduct[]> {
  return Promise.all(products.map(resolveProduct));
}

export const jabreCommands = [
  { command: "A<ORIG><DEST><DDMMM>", description: "Search flight availability, e.g. AORDJFK25AUG" },
  { command: "S<line>[class]", description: "Sell a segment from the last availability display, e.g. S2 or S2M" },
  { command: "NM1<LAST>/<FIRST> [TITLE]", description: "Add a passenger name, e.g. NM1SMITH/JOHN MR" },
  { command: "FXP", description: "Price the itinerary using the last sold fare class" },
  { command: "ER", description: "End & Retrieve, saves the PNR and generates a record locator" },
  { command: "IG", description: "Ignore, discards the current workspace transaction" },
  { command: "RT<LOCATOR>", description: "Retrieve a saved PNR by its record locator" },
  { command: "QR", description: "Queue Review, lists all saved PNRs" },
  { command: "QD<LOCATOR>", description: "Queue Delete, removes a PNR from the queue" },
  { command: "WP", description: "Write/Print itinerary to PDF (PNR must be saved with ER first)" },
  { command: "I / IR", description: "Display the active PNR in the current workspace tab" },
  { command: "SI", description: "Sign off and close the terminal" },
  { command: "CC<CODE>", description: "Set the display currency to a live exchange rate, e.g. CCEUR" },
  { command: "CC", description: "List all available currency codes" },
  { command: "HELP", description: "Show the full command reference in-app" },
];

export const jabreFunctionKeys = [
  { key: "F1", action: "Help / command reference" },
  { key: "F2", action: "New booking tab" },
  { key: "F3", action: "Focus command line" },
  { key: "F4", action: "Queue review (QR)" },
  { key: "F5", action: "Repeat last availability search" },
  { key: "F6", action: "Price itinerary (FXP)" },
  { key: "F7", action: "End & retrieve (ER)" },
  { key: "F8", action: "Print itinerary (WP)" },
  { key: "F9", action: "Ignore transaction (IG)" },
  { key: "F10", action: "Sign off (SI)" },
  { key: "F11", action: "Change display currency (CC)" },
  { key: "F12", action: "Collapse/expand the response log pane" },
];

export const jabreDemoProfiles = [
  { agentId: "1A2B3C", password: "jabre1", duty: "AA or SUP", pcc: "7X4Y" },
  { agentId: "DEMO01", password: "demo", duty: "AA", pcc: "9Q1Z" },
];

export const jabreExampleFlow = [
  { command: "AORDJFK25AUG", note: "search availability Chicago -> New York" },
  { command: "S2", note: "sell line 2, cheapest available class" },
  { command: "NM1SMITH/JOHN MR", note: "add a passenger" },
  { command: "FXP", note: "price the itinerary" },
  { command: "ER", note: "end & retrieve - generates a record locator, saves to queue" },
  { command: "WP", note: "print itinerary to PDF" },
];
