import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { releaseTag } from "@/lib/github";

/**
 * Called by a GitHub Actions workflow whenever a new release is published,
 * so the site picks up the new version and changelog immediately instead of
 * waiting for the hourly safety-net revalidation.
 *
 * POST /api/revalidate
 * Header: x-revalidate-secret: <REVALIDATE_SECRET>
 * Body:   { "owner": "RectifySoftware", "repo": "rectify-jabre" }
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");
  const expected = process.env.REVALIDATE_SECRET;

  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not configured on this deployment." },
      { status: 500 }
    );
  }

  if (secret !== expected) {
    return NextResponse.json({ ok: false, error: "Invalid secret." }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}) as Record<string, unknown>);
  const owner = typeof body.owner === "string" ? body.owner : "RectifySoftware";
  const repo = typeof body.repo === "string" ? body.repo : "rectify-jabre";

  revalidateTag(releaseTag(owner, repo), { expire: 0 });
  // Belt and braces: also revalidate the pages directly, in case tag-based
  // revalidation ever misses a route.
  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/jabre");
  revalidatePath("/changelog");

  return NextResponse.json({
    ok: true,
    revalidated: true,
    owner,
    repo,
    at: new Date().toISOString(),
  });
}
