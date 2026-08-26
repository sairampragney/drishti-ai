export type DatasetSource = "mbrset" | "aptos";

export interface DatasetImage {
  id: string;
  source: DatasetSource;
  originalFilename: string;
  imagePath: string;
  sourceLabel: string;
  prototypeCategory: string;
  severity: string;
}

export interface Patient {
  id: string;
  patientCode: string;
  name: string;
  age: number;
  gender: string;
  diabetesDuration: string;
  createdAt: string;
}

export interface Screening {
  id: string;
  patientId: string;
  patientName: string;
  datasetImage: DatasetImage;
  status: "prototype_result" | "review_required";
  createdAt: string;
}