"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Icons";
import { FOOTER_COLUMNS } from "@/lib/constants";

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="border-t border-shuttle-200 bg-white pt-16">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-[440px]">
            <Link href="/" className="flex items-center gap-2 text-lime-glow" aria-label="ByteSpace home">
              <LogoMark cut="#fff" />
              <span className="font-display text-[24px] font-bold leading-[30px] text-shuttle-950">ByteSpace</span>
            </Link>
            <p className="mt-3 text-[14px] leading-[160%]">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="mt-8 flex items-center gap-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input id="newsletter" type="email" required placeholder="Enter your email"
                className="h-[46px] min-w-0 flex-1 rounded-full border border-shuttle-200 bg-white px-5 text-[16px] placeholder:text-shuttle-950" />
              <Button variant="lime" type="submit" className="!px-7 !py-2.5">Search</Button>
            </form>
            <p className="mt-4 text-[12px] leading-[160%]" aria-live="polite">
              {done ? "Thanks! You are on the list." : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            {FOOTER_COLUMNS.map((col, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {col.map((l) => <li key={l}><Link href="#" className="text-[14px] leading-[160%] hover:underline">{l}</Link></li>)}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-shuttle-200 py-6 text-[12px] leading-[160%] sm:flex-row">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link></div>
        </div>
      </Container>
    </footer>
  );
}
