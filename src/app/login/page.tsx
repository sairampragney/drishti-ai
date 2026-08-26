import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
export default function Login() { return <div className="shell-bg flex min-h-screen flex-col"><Link href="/" className="p-6 text-sm font-bold text-[#486581]">← Back to home</Link><main className="flex flex-1 items-center justify-center px-5 pb-16"><AuthForm /></main></div> }