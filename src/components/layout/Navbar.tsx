import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { LogoMark } from "@/components/ui/Icons";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-[120px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-lime" aria-label="ByteSpace home">
          <LogoMark cut="#003be2" />
          <span className="font-display text-[24px] font-bold leading-[30px] text-shuttle-50">ByteSpace</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l, i) => (
            <Link key={l.label} href={l.href} className={`text-[16px] text-shuttle-50 hover:text-lime ${i === 0 ? "font-medium" : ""}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-[16px] text-shuttle-50">
          <Link href="/login" className="hover:text-lime">Sign In</Link>
          <Link href="/signup" className="hover:text-lime">Join Us</Link>
          <ShoppingBag size={22} aria-label="Cart" className="hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
