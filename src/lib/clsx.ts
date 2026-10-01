export function clsx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}
