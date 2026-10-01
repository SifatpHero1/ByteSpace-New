"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart3, Star } from "lucide-react";
import Button from "./Button";
import { LogoMark } from "./Icons";
import { AvatarStack } from "./Avatar";
import { Ring, Pyramid, Squiggle } from "./Shapes";
import { COURSES } from "@/lib/constants";
import { clsx } from "@/lib/clsx";

type Mode = "login" | "signup";

const COPY = {
  signup: {
    title: "Sign up and come in",
    text: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    label: "Create an Account",
    heading: "Welcome to ByteSpace",
    button: "Continue",
  },
  login: {
    title: "Sign in with ease",
    text: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    label: "Sign In",
    heading: "Welcome Back",
    button: "Sign In",
  },
};

/** Faces used in the illustration (files in /public/images). */
const CARD_FACES = ["/images/avatar-7.png", "/images/avatar-8.png", "/images/sarah.png", "/images/alex.png"];
const HAPPY_FACES = ["/images/avatar-1.png", "/images/avatar-7.png", "/images/avatar-5.png", "/images/avatar-3.png", "/images/avatar-4.png", "/images/avatar-6.png"];

const pill = "whitespace-nowrap rounded-full bg-white/60 px-3 py-1.5 text-[12px] font-medium leading-5 text-ink backdrop-blur-sm";
const labelCls = "mb-2 block text-[14px] font-medium leading-[120%] text-shuttle-950";
const inputCls =
  "h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 text-[18px] leading-[160%] placeholder:text-shuttle-400 focus:border-blue focus:outline-none";

function CardBody({ title, rating }: { title: string; rating?: boolean }) {
  return (
    <>
      <div className="mt-[18px] flex items-center justify-between">
        <h3 className="font-heading text-[20px] font-semibold leading-7 tracking-[-0.01em] text-black">{title}</h3>
        {rating && (
          <span className="flex items-center gap-1 text-[18px] font-medium leading-7 text-ink">
            4.5 <Star size={20} className="fill-lime text-lime" />
          </span>
        )}
      </div>
      <p className="text-[12px] leading-5 text-ink">by <span className="text-blue">purepearl studio</span></p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-8 items-center gap-2 rounded-full bg-shuttle-50 px-3 text-[12px] font-medium text-shuttle-700">
          <BarChart3 size={14} />Beginner
        </span>
        <AvatarStack srcs={CARD_FACES} size={32} overlap={6} label="26+" dark />
      </div>
      <p className="mt-3 font-heading text-[20px] font-medium leading-7 tracking-[-0.01em] text-blue">
        $25<span className="font-body text-[12px] font-normal text-ink">/lifetime</span>
      </p>
    </>
  );
}

/** Figma frame "548 x 585": stacked course cards, lime shapes and the Happy Students card. */
function Illustration({ className }: { className?: string }) {
  const [, back, front] = COURSES;
  return (
    <div aria-hidden className={clsx("h-[585px] w-[548px]", className)}>
      <div className="absolute left-[26px] top-[89px] h-[384px] w-[370px] rounded-[24px] bg-white p-[15px]">
        <div className="relative h-[195px] w-full overflow-hidden rounded-[14px] bg-shuttle-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={back.image} alt="" className="h-full w-full object-cover" />
          <span className={`${pill} absolute bottom-3 left-3`}>{back.lessons}</span>
        </div>
        <CardBody title="Build Digital Asset" />
      </div>

      <div className="absolute left-[137px] top-px w-[370px] rounded-[24px] bg-white p-[15px]">
        <div className="relative h-[195px] w-full overflow-hidden rounded-[14px] bg-shuttle-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={front.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute bottom-3 left-3 flex gap-3">
            <span className={pill}>{front.lessons}</span>
            <span className={pill}>{front.duration}</span>
            <span className={pill}>{front.comments}</span>
          </div>
        </div>
        <CardBody title="the Power of Big Data" rating />
      </div>

      <div className="absolute left-[251px] top-[435px] h-[121px] w-[259px] rounded-xl bg-lime p-4">
        <p className="text-[16px] font-medium leading-6 text-shuttle-950">Happy Students</p>
        <p className="flex items-center gap-1 text-[10px] font-bold leading-[150%] text-shuttle-950">
          4.5 <span className="font-normal text-shuttle-700">(240)</span> <Star size={14} className="fill-blue text-blue" />
        </p>
        <div className="mt-2"><AvatarStack srcs={HAPPY_FACES} size={43} overlap={13} badgeSize={43} label="2K+" dark /></div>
      </div>

      <Ring tone="lime" className="absolute left-[77px] top-[41px] w-[99px]" />
      <Pyramid tone="lime" className="absolute left-[26px] top-[417px] w-[124px]" />
      <Squiggle tone="white" variant="a" flip className="absolute left-[406px] top-[350px] w-[114px]" />
    </div>
  );
}

const Facebook = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#000" />
    <path d="M13.300 20v-6.600h2.200l.4-2.600h-2.600V9.200c0-.8.3-1.300 1.400-1.300H16V5.600c-.3 0-1.100-.1-2-.1-2 0-3.300 1.200-3.300 3.400v1.900H8.500v2.600h2.200V20z" fill="#fff" />
  </svg>
);
const Google = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" aria-hidden fill="#000">
    <path d="M21.350 11.100H12v2.900h5.350c-.5 2.500-2.600 3.900-5.350 3.900a6 6 0 1 1 0-12c1.500 0 2.900.55 3.950 1.450l2.100-2.100A9 9 0 1 0 12 21c5 0 8.600-3.500 8.600-8.400 0-.5 0-1-.25-1.500z" />
  </svg>
);

function FormCard({ mode, className }: { mode: Mode; className?: string }) {
  const isLogin = mode === "login";
  const copy = COPY[mode];
  const [sent, setSent] = useState(false);

  return (
    <section className={clsx("relative flex flex-col rounded-[32px] bg-white px-[63px] pt-[61px]", className)}>
      <p className="text-[18px] leading-[160%] text-blue">{copy.label}</p>
      <h2 className="max-w-[453px] font-heading text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-shuttle-950">
        {copy.heading}
      </h2>

      <form className="mt-10 flex flex-col" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <div className="flex flex-col gap-[25px]">
          {!isLogin && (
            <div>
              <label htmlFor="name" className={labelCls}>Full Name</label>
              <input id="name" required placeholder="Jamie Davis" className={inputCls} />
            </div>
          )}
          <div>
            <label htmlFor="email" className={labelCls}>Email</label>
            <input id="email" type="email" required placeholder="designer@example.com" className={inputCls} />
          </div>
          <div>
            <label htmlFor="pw" className={labelCls}>Password</label>
            <input id="pw" type="password" required minLength={8} placeholder="********" className={inputCls} />
          </div>
        </div>
        <Button variant="lime" type="submit" className="mt-6 self-end !py-3">{copy.button}</Button>
        <p className="mt-3 text-right text-[14px] text-ink" aria-live="polite">{sent ? "Demo only: no account was created." : ""}</p>
      </form>

      {isLogin && (
        <div className="mt-[52px]">
          <div className="flex items-center gap-[10px] text-[18px] leading-[160%] text-[#888]">
            <span className="h-px w-[200px] bg-[#d1d1d1]" />or<span className="h-px w-[200px] bg-[#d1d1d1]" />
          </div>
          <div className="mt-[41px] flex justify-center gap-4">
            <button aria-label="Continue with Facebook" className="grid h-[72px] w-[72px] place-items-center rounded-3xl border border-[#d1d1d1] hover:bg-shuttle-50"><Facebook /></button>
            <button aria-label="Continue with Google" className="grid h-[72px] w-[72px] place-items-center rounded-3xl border border-[#d1d1d1] hover:bg-shuttle-50"><Google /></button>
          </div>
        </div>
      )}

      <p className={clsx("absolute inset-x-0 text-center text-[16px] leading-[160%]", isLogin ? "bottom-10 text-[#888]" : "bottom-[51px] text-shuttle-700")}>
        {isLogin ? "New user? " : "Already have an account? "}
        <Link className="text-blue hover:underline" href={isLogin ? "/signup" : "/login"}>
          {isLogin ? "Create an account" : "Login"}
        </Link>
      </p>
    </section>
  );
}

const STAGE_W = 1440;
const STAGE_H = 1024;

export default function AuthForm({ mode }: { mode: Mode }) {
  const copy = COPY[mode];
  // null = not measured yet, 0 = mobile layout, otherwise the scale applied to the 1440px design
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const w = document.documentElement.clientWidth;
      setScale(w >= 768 ? Math.min(1, w / STAGE_W) : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <main className={clsx("relative isolate min-h-screen overflow-hidden bg-blue transition-opacity", scale === null ? "opacity-0" : "opacity-100")}>
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" style={{ backgroundPosition: "50% 0" }} />

      {scale === 0 ? (
        <div className="mx-auto flex max-w-[520px] flex-col gap-8 px-5 py-8 text-shuttle-50">
          <Link href="/" aria-label="ByteSpace home" className="text-lime"><LogoMark cut="#003be2" className="h-[31.5px] w-[28.88px]" /></Link>
          <div>
            <h1 className="font-heading text-[20px] font-semibold leading-[120%] tracking-[-0.01em]">{copy.title}</h1>
            <p className="mt-3 text-[18px] leading-[160%]">{copy.text}</p>
          </div>
          <FormCard mode={mode} className="px-6 pb-24 sm:px-[63px]" />
        </div>
      ) : (
        scale !== null && (
          <div style={{ width: STAGE_W * scale, height: STAGE_H * scale, margin: "0 auto" }}>
            <div className="relative text-shuttle-50" style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
              <Link href="/" aria-label="ByteSpace home" className="absolute left-[122px] top-[35px] text-lime">
                <LogoMark cut="#003be2" className="h-[31.5px] w-[28.88px]" />
              </Link>
              <h1 className="absolute left-[122px] top-[119px] font-heading text-[20px] font-semibold leading-[120%] tracking-[-0.01em]">{copy.title}</h1>
              <p className="absolute left-[122px] top-[160px] w-[475px] text-[18px] leading-[160%]">{copy.text}</p>
              <Illustration className="absolute left-[97px] top-[304px]" />
              <FormCard mode={mode} className="absolute left-[740px] top-[120px] h-[782px] w-[577px]" />
            </div>
          </div>
        )
      )}
    </main>
  );
}
