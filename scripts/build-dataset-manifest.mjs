import fs from "node:fs/promises";
import path from "node:path";

const root = process.env.DATASET_ROOT;
if (!root) throw new Error("DATASET_ROOT is required");
const entries = [];
for (const folder of ["0", "1", "2", "3", "4"]) {
  const directory = path.join(root, folder);
  for (const filename of await fs.readdir(directory)) {
    if (filename.toLowerCase().endsWith(".jpg")) entries.push({ source: "mbrset", folder, filename, imagePath: `${folder}/${filename}` });
  }
}
entries.sort((left, right) => left.imagePath.localeCompare(right.imagePath, undefined, { numeric: true }));
await fs.mkdir("public/dataset", { recursive: true });
await fs.writeFile("public/dataset/mbrset-manifest.json", JSON.stringify({ source: "mBRSET Data", entries }, null, 2));
console.log(`Wrote ${entries.length} image records.`);