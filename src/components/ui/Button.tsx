import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Props = {
  variant?: "lime" | "dark" | "ghost";
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const styles = {
  lime: "bg-lime text-shuttle-950 hover:brightness-95",
  dark: "bg-shuttle-950 text-shuttle-50 hover:bg-shuttle-900",
  ghost: "border border-shuttle-50/60 text-shuttle-50 hover:bg-white/10",
};

export default function Button({ variant = "lime", href, className, children, ...rest }: Props) {
  const cls = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-[18px] font-medium leading-[120%] transition",
    styles[variant], className,
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
