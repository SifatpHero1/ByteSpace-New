import { clsx } from "@/lib/clsx";

export default function Container({
  className, children,
}: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)}>{children}</div>;
}
