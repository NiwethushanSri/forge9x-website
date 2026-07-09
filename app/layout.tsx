import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge9x — Digital Innovation Agency",
  description: "UK-based digital innovation agency specialising in web development, AI, mobile apps, and SEO.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
