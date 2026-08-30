// src/lib/store.ts
// Zustand store for managing scan history and persisting it in localStorage.
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface EyeBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ScanResult {
  /** Data URL of the captured webcam image */
  capturedImage: string;
  /** Path or URL of the dataset image used for comparison */
  datasetImage: string;
  /** Timestamp of the scan */
  timestamp: number;
  /** Detected eye bounding boxes */
  eyeBoxes: {
    left: EyeBox | null;
    right: EyeBox | null;
  };
  /** Optional classification label */
  label?: string;
}

export interface AppState {
  scans: ScanResult[];
  addScan: (scan: ScanResult) => void;
  clearScans: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      scans: [],
      addScan: (scan) => set({ scans: [...get().scans, scan] }),
      clearScans: () => set({ scans: [] }),
    }),
    {
      name: 'drishti-ai-store', // key in localStorage
    }
  )
);
