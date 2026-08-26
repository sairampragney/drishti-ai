import type { DatasetImage, Patient, Screening } from "@/types/domain";

export const demoImages: DatasetImage[] = [
  { id: "mbrset-0-10-1", source: "mbrset", originalFilename: "10.1.jpg", imagePath: "mBRSET Data/0/10.1.jpg", sourceLabel: "0", prototypeCategory: "0", severity: "No diabetic retinopathy" },
  { id: "mbrset-1-315-3", source: "mbrset", originalFilename: "315.3.jpg", imagePath: "mBRSET Data/1/315.3.jpg", sourceLabel: "1", prototypeCategory: "1", severity: "Mild non-proliferative diabetic retinopathy" },
  { id: "mbrset-2-555-3", source: "mbrset", originalFilename: "555.3.jpg", imagePath: "mBRSET Data/2/555.3.jpg", sourceLabel: "2", prototypeCategory: "2", severity: "Moderate non-proliferative diabetic retinopathy" },
  { id: "mbrset-3-73-3", source: "mbrset", originalFilename: "73.3.jpg", imagePath: "mBRSET Data/3/73.3.jpg", sourceLabel: "3", prototypeCategory: "3", severity: "Severe non-proliferative diabetic retinopathy" },
  { id: "mbrset-4-1-1", source: "mbrset", originalFilename: "1.1.jpg", imagePath: "mBRSET Data/4/1.1.jpg", sourceLabel: "4", prototypeCategory: "4", severity: "Proliferative diabetic retinopathy" }
];

export const demoPatients: Patient[] = [{ id: "patient-001", patientCode: "DR-2401", name: "Aarav Mehta", age: 52, gender: "Male", diabetesDuration: "8 years", createdAt: "2026-08-24" }, { id: "patient-002", patientCode: "DR-2402", name: "Meera Iyer", age: 47, gender: "Female", diabetesDuration: "5 years", createdAt: "2026-08-22" }];
export const demoScreenings: Screening[] = [{ id: "screen-001", patientId: "patient-001", patientName: "Aarav Mehta", datasetImage: demoImages[1], status: "review_required", createdAt: "2026-08-24" }];