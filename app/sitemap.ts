import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.forge9x.co.uk";
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 0.9 },
    { url: "/portfolio", priority: 0.9 },
    { url: "/services/web-development", priority: 0.8 },
    { url: "/services/web-applications", priority: 0.8 },
    { url: "/services/ai-development", priority: 0.8 },
    { url: "/services/mobile-development", priority: 0.8 },
    { url: "/services/seo", priority: 0.8 },
    { url: "/services/graphic-design", priority: 0.8 },
    { url: "/pricing", priority: 0.7 },
    { url: "/blog", priority: 0.7 },
    { url: "/careers", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
  ];

  return pages.map(({ url, priority }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
