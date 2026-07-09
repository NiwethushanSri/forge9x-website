import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "About Us — UK Digital Innovation Agency",
  description: "Learn about Forge9x, a UK-based digital agency founded by Niwethushan Sritharan and Gobinath Easwaranathan, delivering innovative software solutions worldwide.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
