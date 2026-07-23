import type { Metadata } from "next";

const base = "https://www.forge9x.co.uk";
const siteName = "Forge9x";
const defaultImage = `${base}/office-team.jpg`;

export function seo(args: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${base}${args.path ?? ""}`;
  const image = args.image ?? defaultImage;
  return {
    title: `${args.title} | ${siteName}`,
    description: args.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${args.title} | ${siteName}`,
      description: args.description,
      url,
      siteName,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${args.title} | ${siteName}`,
      description: args.description,
      images: [image],
    },
  };
}
