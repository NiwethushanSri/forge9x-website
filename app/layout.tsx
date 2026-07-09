import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forge9x — Digital Innovation Agency",
  description: "UK-based digital innovation agency specialising in web development, AI, mobile apps, and SEO.",
  icons: {
    icon: "/ico-logo.png",
    shortcut: "/ico-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon-f9x.png" type="image/png" sizes="512x512" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
