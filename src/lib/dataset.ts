import { demoImages } from "@/lib/demo-data";
import type { DatasetImage } from "@/types/domain";

export function selectPrototypeImage(seed?: number): DatasetImage {
  const index = seed === undefined ? Math.floor(Math.random() * demoImages.length) : Math.abs(seed) % demoImages.length;
  return demoImages[index];
}

export const datasetSources = {
  aptos: { records: 3662, labels: ["0", "1", "2", "3", "4"] },
  mbrset: { images: 4884, folders: ["0", "1", "2", "3", "4"] }
} as const;