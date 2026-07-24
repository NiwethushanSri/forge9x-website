import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forge9x — Digital Innovation Agency",
  description: "UK-based digital innovation agency specialising in web development, AI, mobile apps, and SEO.",
  icons: {
    icon: "/ico-logo.png",
    shortcut: "/ico-logo.png",
  },
  verification: {
    google: "jm2tqzHkJ2aXd4xBz3bmeGPzVlm0DIxEWPxwfvnD41o",
  },
  openGraph: {
    title: "Forge9x — Digital Innovation Agency",
    description: "Forge9x is a digital agency headquartered in Batticaloa, Sri Lanka with a UK office in Chelmsford. Web development, AI, mobile apps and SEO.",
    url: "https://www.forge9x.co.uk",
    siteName: "Forge9x",
    images: [{ url: "https://www.forge9x.co.uk/office-team.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge9x — Digital Innovation Agency",
    description: "Forge9x is a digital agency headquartered in Batticaloa, Sri Lanka with a UK office in Chelmsford.",
    images: ["https://www.forge9x.co.uk/office-team.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon-f9x.png" type="image/png" sizes="512x512" />
      </head>
      <body className="bg-black text-white">
        <LocalBusinessSchema />
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
