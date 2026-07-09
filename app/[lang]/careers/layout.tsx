import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Careers — Join the Forge9x Team",
  description: "Join Forge9x and work on cutting-edge web, AI and mobile projects. We're hiring talented developers, designers and digital marketers worldwide.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
