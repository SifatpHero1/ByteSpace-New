/** 3D shapes exported from the Figma matcap renders, pre-coloured lime / white. */
type Tone = "lime" | "white";
type P = { tone?: Tone; className?: string };

const shadow = "drop-shadow(0 14px 14px rgba(0,0,0,.18))";

function Shape({ name, tone, className }: { name: string; tone: Tone; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/images/shapes/${name}-${tone}.png`} alt="" aria-hidden className={className} style={{ filter: shadow }} />;
}

/** variant "a" = tall coil, "b" = diagonal zig-zag */
export const Squiggle = ({ tone = "lime", variant = "b", flip, className }: P & { variant?: "a" | "b"; flip?: boolean }) => (
  <Shape name={`coil-${variant}`} tone={tone} className={`${flip ? "-scale-x-100 " : ""}${className ?? ""}`} />
);
export const Ring = ({ tone = "white", className }: P) => <Shape name="ring" tone={tone} className={className} />;
export const Cone = ({ tone = "white", className }: P) => <Shape name="cone" tone={tone} className={className} />;
export const Cylinder = ({ tone = "lime", className }: P) => <Shape name="cylinder" tone={tone} className={className} />;
export const Pyramid = ({ tone = "white", className }: P) => <Shape name="pyramid" tone={tone} className={className} />;
