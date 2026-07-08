import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeProvider from "@/components/ThemeProvider";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Forge9x | Web Development, AI & Digital Solutions",
  description: "Forge9x specialises in custom web development, AI solutions, mobile apps, SEO, and graphic design. We help businesses build, grow, and maintain a powerful web presence.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16 sm:pt-20 lg:pt-24 min-w-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
