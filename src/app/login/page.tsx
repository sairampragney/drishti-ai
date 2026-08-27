"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { useDemoAuth } from "@/lib/demo-auth";

export default function Login() {
  const auth = useDemoAuth();
  const [error, setError] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); const form = new FormData(event.currentTarget); const message = await auth.login(String(form.get("email")), String(form.get("password"))); if (message) setError(message); else window.location.href = "/dashboard"; }
  return <div className="shell-bg flex min-h-screen items-center justify-center px-5 py-10"><div className="glass w-full max-w-md rounded-3xl p-7 sm:p-9"><div className="mb-8 flex items-center gap-2 font-bold"><span className="grid size-9 place-items-center rounded-xl bg-[#102a43] text-white"><Eye size={19} /></span>Drishti<span className="text-[#0f766e]">AI</span></div><p className="eyebrow">Local demo authentication</p><h1 className="mt-2 text-3xl font-black">Welcome back</h1><p className="mt-2 text-sm leading-6 text-[#627d98]">Use a demo doctor account to open the prototype workspace.</p><form className="mt-7 space-y-4" onSubmit={submit}><label className="block text-sm font-bold">Email<input name="email" className="input mt-2" type="email" required placeholder="sathwik@gmail.com" /></label><label className="block text-sm font-bold">Password<input name="password" className="input mt-2" type="password" required minLength={6} placeholder="Any demo password" /></label><button className="button-primary w-full" type="submit">Login <ArrowRight size={17} /></button></form>{error && <p className="mt-4 rounded-xl bg-[#fff0ed] p-3 text-sm text-[#b54736]">{error}</p>}<p className="mt-7 text-center text-sm text-[#627d98]">New doctor? <Link className="font-bold text-[#0f766e]" href="/signup">Create a demo account</Link></p></div></div>;
}
