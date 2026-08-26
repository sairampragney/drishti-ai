import Link from "next/link";
import { Eye, LogIn } from "lucide-react";

export function TopNav() {
  return <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5"><Link href="/" className="flex items-center gap-2 font-bold"><span className="grid size-9 place-items-center rounded-xl bg-[#102a43] text-white"><Eye size={19} /></span><span>Drishti<span className="text-[#0f766e]">AI</span></span></Link><nav className="hidden items-center gap-6 text-sm font-semibold text-[#486581] md:flex"><Link href="/#features">How it works</Link><Link href="/login" className="button-secondary"><LogIn size={16} />Sign in</Link></nav></header>;
}