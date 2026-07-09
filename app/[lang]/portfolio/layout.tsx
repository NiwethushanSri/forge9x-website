import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Our Portfolio — Web, AI & Mobile Projects",
  description: "Explore Forge9x's portfolio of web development, AI, mobile app, and digital design projects for clients in the UK, Sri Lanka and worldwide.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
