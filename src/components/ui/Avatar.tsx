import { clsx } from "@/lib/clsx";

const COLORS = ["#f59e0b", "#ec4899", "#6366f1", "#10b981", "#ef4444", "#0ea5e9", "#8b5cf6"];

/** Round avatar. Use `src`, or `n` (1-9) for /public/images/avatar-n.png, or `placeholder` for a colour circle. */
export function Avatar({ n, src, placeholder, size = 28, className, style }: { n?: number; src?: string; placeholder?: number; size?: number; className?: string; style?: React.CSSProperties }) {
  const cls = clsx("inline-block rounded-full border-2 border-white object-cover", className);
  if (src || n) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src ?? `/images/avatar-${(((n ?? 1) - 1) % 9) + 1}.png`} alt="" width={size} height={size} className={cls} style={{ width: size, height: size, ...style }} />;
  }
  return <span aria-hidden className={cls} style={{ width: size, height: size, background: `linear-gradient(135deg, ${COLORS[(placeholder ?? 0) % 7]}, #242528)`, ...style }} />;
}

type StackProps = {
  count?: number; size?: number; label?: string; dark?: boolean;
  /** exact faces to show (paths); otherwise avatar-1..n */
  srcs?: string[];
  /** px each face overlaps the previous one */
  overlap?: number;
  badgeSize?: number;
};

export function AvatarStack({ count = 5, size = 28, label = "26+", dark = false, srcs, overlap = 8, badgeSize }: StackProps) {
  const faces = srcs ?? Array.from({ length: count }, (_, i) => `/images/avatar-${(i % 9) + 1}.png`);
  const b = badgeSize ?? size + 4;
  return (
    <div className="flex items-center">
      {faces.map((src, i) => (
        <Avatar key={i} src={src} size={size} style={i ? { marginLeft: -overlap } : undefined} />
      ))}
      <span
        className={clsx("grid place-items-center rounded-full border-2 border-white text-[12px] font-bold", dark ? "bg-shuttle-950 text-shuttle-50" : "bg-lime text-shuttle-950")}
        style={{ width: b, height: b, marginLeft: -overlap / 2 }}
      >
        {label}
      </span>
    </div>
  );
}
