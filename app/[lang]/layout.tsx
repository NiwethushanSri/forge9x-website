import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeProvider from "@/components/ThemeProvider";
import CookieBanner from "@/components/CookieBanner";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";
import { locales } from "@/middleware";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isCy = lang === "cy";
  return {
    title: isCy
      ? "Forge9x | Datblygu Gwefannau, AI a Datrysiadau Digidol"
      : "Forge9x | Web Development, AI & Digital Solutions",
    description: isCy
      ? "Mae Forge9x yn arbenigo mewn datblygu gwefannau pwrpasol, datrysiadau AI, apiau symudol, SEO a dylunio graffig."
      : "Forge9x specialises in custom web development, AI solutions, mobile apps, SEO, and graphic design.",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    icons: { icon: "/favicon.svg" },
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
    <html lang={lang} className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navbar lang={lang} dict={dict.nav} />
          <main className="flex-1 pt-16 sm:pt-20 lg:pt-24 min-w-0">{children}</main>
          <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
          <WhatsAppButton />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
