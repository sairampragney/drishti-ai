import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const contentTypes: Record<string, string> = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg" };

export async function GET(_request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const root = process.env.DATASET_ROOT;
  if (!root) return NextResponse.json({ error: "Dataset storage is not configured" }, { status: 404 });
  const segments = (await params).path;
  const extension = path.extname(segments.at(-1) ?? "").toLowerCase();
  if (!contentTypes[extension]) return NextResponse.json({ error: "Only JPEG images are supported" }, { status: 400 });
  const rootPath = path.resolve(root);
  const imagePath = path.resolve(rootPath, ...segments);
  if (!imagePath.startsWith(`${rootPath}${path.sep}`)) return NextResponse.json({ error: "Invalid image path" }, { status: 400 });
  try {
    const image = await readFile(imagePath);
    return new NextResponse(image, { headers: { "Content-Type": contentTypes[extension], "Cache-Control": "public, max-age=3600" } });
  } catch {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}