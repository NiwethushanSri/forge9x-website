import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Contact Us — Get a Free Quote",
  description: "Get in touch with Forge9x for web development, AI, mobile apps, and SEO services. Based in the UK, serving clients worldwide. Free consultation available.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
