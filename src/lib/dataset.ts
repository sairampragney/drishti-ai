import type { DatasetImage } from "@/types/domain";

// Function to select a prototype image based on an optional seed.
export function selectPrototypeImage(seed?: number): DatasetImage {
  const index = seed === undefined ? 0 : Math.abs(seed) % 5;
  return {
    id: `mbrset-demo-${index}`,
    source: "mbrset",
    originalFilename: "",
    imagePath: `${index}/`,
    sourceLabel: String(index),
    prototypeCategory: String(index),
    severity: `mBRSET Class ${index}`,
  };
}

// Alias for compatibility with existing imports.
export const getRandomImage = selectPrototypeImage;

export const datasetSources = {
  aptos: { records: 3662, labels: ["0", "1", "2", "3", "4"] },
  mbrset: { images: 4884, folders: ["0", "1", "2", "3", "4"] },
} as const;