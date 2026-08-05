import type { Metadata } from "next";
import SpaceFrontier from "./SpaceFrontier";

export const metadata: Metadata = {
  title: "The Autonomous Frontier — Mehan Observatory",
  description:
    "An interactive field record of global space missions, onboard intelligence, commercial space, and the growing need for machine autonomy beyond Earth.",
  alternates: { canonical: "/space/" },
  openGraph: {
    title: "The Autonomous Frontier — Mehan Observatory",
    description: "The farther intelligence travels, the less it can wait for us.",
    url: "https://mehanonline.com/space/",
    images: [{
      url: "https://mehanonline.com/space-frontier-og.png",
      width: 1774,
      height: 887,
      alt: "A signal traveling from Earth toward an autonomous spacecraft in deep space",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Autonomous Frontier — Mehan Observatory",
    description: "The farther intelligence travels, the less it can wait for us.",
    images: ["https://mehanonline.com/space-frontier-og.png"],
  },
};

export default function SpacePage() {
  return <SpaceFrontier />;
}
