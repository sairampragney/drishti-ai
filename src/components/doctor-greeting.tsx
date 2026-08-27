"use client";
import { useDemoAuth } from "@/lib/demo-auth";
export function DoctorGreeting() { const { user } = useDemoAuth(); return <h1 className="mt-2 text-4xl font-black tracking-tight">Good morning, {user?.displayName ?? "Doctor"}.</h1>; }