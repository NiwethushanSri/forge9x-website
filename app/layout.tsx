import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Forge9x | Web Development, AI & Digital Solutions",
  description: "Forge9x specialises in custom web development, AI solutions, mobile apps, SEO, and graphic design. We help businesses build, grow, and maintain a powerful web presence.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-20 lg:pt-24 min-w-0">{children}</main>
        {/* Sri Lanka Business Banner */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/contact" className="block w-full overflow-hidden">
          <img
            src="/sri-lanka-banner.jpg"
            alt="Starting a Business in Sri Lanka? Forge9x is Here to Help"
            className="w-full block"
          />
        </a>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
