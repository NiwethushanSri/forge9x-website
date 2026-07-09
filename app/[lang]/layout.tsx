import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export const metadata: Metadata = {
  title: "Forge9x — Digital Innovation Agency",
  description: "UK-based digital innovation agency specialising in web development, AI, mobile apps, and SEO.",
  verification: {
    google: "fd13b6425fad0c86",
  },
};

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
    <>
      <Navbar lang={lang} dict={dict.nav} />
      <main className="pt-16 sm:pt-20 xl:pt-24">{children}</main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
