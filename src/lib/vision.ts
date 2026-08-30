// src/lib/vision.ts
// Utility to load MediaPipe FaceDetector and perform eye detection.
import { FaceDetector } from "@mediapipe/tasks-vision";
import { FilesetResolver } from "@mediapipe/tasks-vision";

let detector: FaceDetector | null = null;

/**
 * Load the MediaPipe FaceDetector model.
 * Returns a promise that resolves when the model is ready.
 */
export async function loadFaceDetector(): Promise<void> {
  if (detector) return;
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  detector = await FaceDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/face_detector_front/float16/latest/face_detector.task",
      delegate: "GPU",
    },
  });
}

export interface EyeBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Detect eyes from an ImageBitmap (e.g., video frame).
 * Returns an array of left/right eye bounding boxes.
 */
export async function detectEyes(
  frame: ImageBitmap
): Promise<Array<{ left: EyeBox; right: EyeBox }>> {
  if (!detector) {
    throw new Error("FaceDetector not loaded. Call loadFaceDetector() first.");
  }
  // Use a permissive type to accommodate the MediaPipe SDK's return shape.
  const anyResults = (await detector.detect(frame)) as unknown as {
    detections?: Array<{ landmarks?: Array<{ x: number; y: number }> }>;
  };
  if (!anyResults.detections) return [];

  const leftIndices = [33, 133];
  const rightIndices = [362, 263];

  return anyResults.detections.map((det) => {
    const landmarks = det.landmarks ?? [];
    const computeBox = (indices: number[]): EyeBox => {
      const xs = indices.map((i) => landmarks[i]?.x ?? 0);
      const ys = indices.map((i) => landmarks[i]?.y ?? 0);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);
      const width = frame.width;
      const height = frame.height;
      return {
        x: Math.round(minX * width),
        y: Math.round(minY * height),
        width: Math.round((maxX - minX) * width),
        height: Math.round((maxY - minY) * height),
      };
    };
    return { left: computeBox(leftIndices), right: computeBox(rightIndices) };
  });
}
