type P = { className?: string };



export const LogoMark = ({ className }: P & { cut?: string }) => (
  <svg className={className} width="32" height="36" viewBox="0 0 32 36" aria-hidden>
    {/* বাঁয়ের stem — leaf shape (rounded top-left, pointy bottom) */}
    <path
      d="M11.8 0C5.3 0 0 5.3 0 11.8v9.8c0 5.6 3.4 10.9 8.9 14.4 2.2-2.9 2.9-6.7 2.9-10.6V0Z"
      fill="currentColor"
    />
    {/* ডানের bowl — play-triangle gap + right-edge leaf notch */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 12.4 21.5 19.4 14 26.4C16 31 19.5 36 24 36C29.5 36 32 29.5 32 22C32 14.5 29.5 8 24 8C19.5 8 16 9.4 14 12.4ZM32 21.6c-3.8 0-6.9-1.3-9.3-3.8c3.1-1 6.7 .2 9.3 2.1v1.7Z"
      fill="currentColor"
    />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="m12 2 3 6.600 7 .8-5.200 4.800 1.500 7L12 17.600 5.700 21.200l1.500-7L2 9.400l7-.8z" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="m7 12.500 3.200 3.200L17 9" fill="none" stroke="#fff" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);