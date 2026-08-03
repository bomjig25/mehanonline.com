import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

const origin = "https://mehanonline.com";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "Mehan Observatory — Observe the Accelerating Future",
  description: "The interactive companion to History's Future. Track frontier intelligence, explore the evidence, and test the scales reshaping civilization.",
  openGraph: {
    title: "Mehan Observatory",
    description: "Observe the forces reshaping intelligence.",
    type: "website",
    url: origin,
    images: [{ url: `${origin}/og.png`, width: 1792, height: 896, alt: "Mehan Observatory — Observe the forces reshaping intelligence." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehan Observatory",
    description: "Observe the forces reshaping intelligence.",
    images: [`${origin}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
