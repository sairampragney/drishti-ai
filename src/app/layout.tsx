import type { Metadata } from "next";
import "./globals.css";
import { DemoAuthProvider } from "@/lib/demo-auth";

export const metadata: Metadata = { title: "DrishtiAI", description: "An academic eye-screening prototype" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><DemoAuthProvider>{children}</DemoAuthProvider></body></html>;
}