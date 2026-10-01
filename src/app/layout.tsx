import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace — Learn and create courses",
  description:
    "Get access to hundreds of courses, or publish your own on the ByteSpace Course Library.",
};

const FONTS =
  "https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=satoshi@400,500,700&display=swap";
const POPPINS =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
        <link rel="stylesheet" href={POPPINS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
