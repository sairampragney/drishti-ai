"use client";

import { useRef, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Disclaimer } from "@/components/disclaimer";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getRandomImage } from "@/lib/dataset";

export default function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const proceed = async () => {
    const selected = await getRandomImage();
    sessionStorage.setItem("drishti-selected-image", JSON.stringify(selected));
    router.push("/results/demo");
  };

  return (
    <AppShell>
      <Link href="/scan" className="inline-flex items-center gap-2 text-sm font-bold text-[#486581]">
        <ArrowLeft size={16} /> Back to Scan
      </Link>
      <h1 className="mt-4 text-3xl font-black">Upload Retina Image</h1>
      <p className="mt-2 text-[#627d98]">
        Select an image file to analyze. For the prototype we will show a random dataset image as the result.
      </p>
      <div className="mt-6">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="button-primary cursor-pointer inline-flex items-center gap-2">
          <Upload size={18} /> Choose File
        </label>
        {preview && (
          <div className="mt-4">
            <Image src={preview} alt="Preview" width={400} height={300} className="rounded-xl" unoptimized />
          </div>
        )}
      </div>
      <button className="button-primary mt-6" onClick={proceed} disabled={!preview}>
        Analyze
      </button>
      <Disclaimer />
    </AppShell>
  );
}
