import { describe, expect, it } from "vitest";
import { datasetSources, selectPrototypeImage } from "@/lib/dataset";

describe("prototype dataset selection", () => {
  it("keeps APTOS and mBRSET source inventories separate", () => {
    expect(datasetSources.aptos.records).toBe(3662);
    expect(datasetSources.mbrset.images).toBe(4884);
  });
  it("supports deterministic selection for reproducible tests", () => {
    expect(selectPrototypeImage(1).id).toBe(selectPrototypeImage(1).id);
  });
  it("returns a verified mBRSET dataset classification", () => {
    expect(selectPrototypeImage(4).source).toBe("mbrset");
    expect(selectPrototypeImage(4).severity).toContain("Proliferative");
  });
});