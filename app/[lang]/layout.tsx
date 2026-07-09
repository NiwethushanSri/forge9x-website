import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  return {
    title: "Forge9x — Digital Innovation Agency",
    description: "UK-based digital innovation agency specialising in web development, AI, mobile apps, and SEO.",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={inter.className}>
      <body className="bg-black text-white">
        <Navbar lang={lang} dict={dict.nav} />
        <main className="pt-16 sm:pt-20 lg:pt-24">{children}</main>
        <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
      </body>
    </html>
  );
}
