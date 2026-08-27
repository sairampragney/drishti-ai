"use client";
import Link from "next/link";
import { Activity, ClipboardPlus, History, LayoutDashboard, LogOut, Settings, Users } from "lucide-react";
import { useDemoAuth, useRequireDemoAuth } from "@/lib/demo-auth";

const links = [["Dashboard", "/dashboard", LayoutDashboard], ["Patients", "/patients", Users], ["New scan", "/scan", ClipboardPlus], ["History", "/history", History], ["Settings", "/settings", Settings]] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const auth = useRequireDemoAuth();
  const { logout } = useDemoAuth();
  if (!auth.ready || !auth.user) return null;
  function signOut() { logout(); window.location.href = "/login"; }
  return <div className="shell-bg flex min-h-screen"><aside className="hidden w-64 shrink-0 border-r border-white/70 bg-[#102a43] p-5 text-white lg:block"><Link href="/dashboard" className="mb-12 flex items-center gap-2 font-bold"><span className="grid size-9 place-items-center rounded-xl bg-[#2a9d8f]"><Activity size={19} /></span>DrishtiAI</Link><nav className="space-y-2">{links.map(([label, href, Icon]) => <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white"><Icon size={18} />{label}</Link>)}<button onClick={signOut} className="mt-8 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-blue-100 hover:bg-white/10"><LogOut size={18} />Logout</button></nav><div className="mt-16 rounded-2xl border border-white/15 bg-white/10 p-4 text-xs leading-5 text-blue-100"><p className="mb-2 font-bold text-white">Demo mode</p>Local authentication and synthetic records only.</div></aside><main className="min-w-0 flex-1"><div className="mx-auto max-w-6xl px-5 py-6 sm:px-8"><div className="mb-6 flex items-center justify-between lg:hidden"><Link href="/dashboard" className="flex items-center gap-2 font-bold"><span className="grid size-8 place-items-center rounded-lg bg-[#102a43] text-white"><Activity size={16} /></span>DrishtiAI</Link><button onClick={signOut} className="button-secondary px-3 py-2 text-sm"><LogOut size={16} />Logout</button></div>{children}</div></main></div>;
}
