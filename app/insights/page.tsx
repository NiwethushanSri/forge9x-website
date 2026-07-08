import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    slug: "why-every-business-needs-a-custom-website",
    tag: "Web Development",
    date: "June 2026",
    title: "Why Every Business Needs a Custom Website in 2026",
    excerpt: "Template websites served a purpose, but they're no longer enough. We explore why custom-built websites are now the baseline for any business serious about digital growth.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    color: "#E76F51",
    readTime: "5 min read",
  },
  {
    slug: "ai-in-business-getting-started",
    tag: "AI Development",
    date: "May 2026",
    title: "AI in Business: A Practical Guide to Getting Started",
    excerpt: "Artificial intelligence isn't just for tech giants. Discover how small and medium businesses are using AI tools to automate tasks, improve customer service, and unlock new revenue streams.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    color: "#E9C46A",
    readTime: "7 min read",
  },
  {
    slug: "seo-mistakes-killing-your-traffic",
    tag: "SEO",
    date: "May 2026",
    title: "10 SEO Mistakes That Are Quietly Killing Your Website Traffic",
    excerpt: "From slow page speeds to ignoring Core Web Vitals, these common mistakes are costing businesses thousands of potential customers. Here's what to fix first.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#8AB17D",
    readTime: "6 min read",
  },
  {
    slug: "mobile-app-vs-responsive-website",
    tag: "Mobile Development",
    date: "April 2026",
    title: "Mobile App vs Responsive Website: Which Does Your Business Actually Need?",
    excerpt: "It's one of the most common questions we get. The answer depends on your users, your goals, and your budget. We break down the decision clearly.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    color: "#6FA8DC",
    readTime: "5 min read",
  },
  {
    slug: "erp-vs-crm-whats-the-difference",
    tag: "Web Applications",
    date: "April 2026",
    title: "ERP vs CRM: What's the Difference and Which One Do You Need?",
    excerpt: "Both systems manage business data, but they serve very different purposes. This guide explains the key differences and how to choose the right platform for your stage of growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    color: "#B39DDB",
    readTime: "6 min read",
  },
  {
    slug: "how-good-design-increases-conversions",
    tag: "Graphic Design",
    date: "March 2026",
    title: "How Good Design Directly Increases Conversions and Revenue",
    excerpt: "Design isn't decoration. We look at the data behind how professional branding, UX decisions, and visual hierarchy translate into measurable business outcomes.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    color: "#E8A0BF",
    readTime: "5 min read",
  },
  {
    slug: "choosing-tech-stack-2026",
    tag: "Web Development",
    date: "March 2026",
    title: "How to Choose the Right Tech Stack for Your Project in 2026",
    excerpt: "React, Next.js, Node, Laravel — the options are overwhelming. We explain how we help clients make smart technology choices that reduce long-term cost and complexity.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    color: "#E76F51",
    readTime: "8 min read",
  },
  {
    slug: "data-privacy-gdpr-uk-businesses",
    tag: "Insights",
    date: "February 2026",
    title: "Data Privacy in 2026: What UK Businesses Must Know About GDPR",
    excerpt: "GDPR compliance remains a legal requirement for any business handling EU or UK citizen data. We cover the essentials every digital business owner needs to understand.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    color: "#8AB17D",
    readTime: "6 min read",
  },
  {
    slug: "cloud-hosting-vs-dedicated-server",
    tag: "Web Development",
    date: "January 2026",
    title: "Cloud Hosting vs Dedicated Server: Which Is Right for Your Business?",
    excerpt: "Choosing the wrong hosting setup can cost you speed, security, and money. We break down the key differences between cloud and dedicated hosting so you can make the right call.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    color: "#6FA8DC",
    readTime: "5 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Knowledge Hub</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Insights</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Practical thinking on web development, AI, design, and digital strategy — from the team at Forge9x.
          </p>
        </div>
      </section>

      <section className="bg-black pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured — first article large */}
          <Link href={`/insights/${insights[0].slug}`} className="group flex flex-col md:flex-row gap-10 mb-16 pb-16 border-b border-gray-800">
            <div className="md:w-1/2 relative rounded-2xl aspect-video overflow-hidden shrink-0 bg-gray-900">
              <Image
                src={insights[0].image}
                alt={insights[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full w-fit" style={{ backgroundColor: insights[0].color + "22", color: insights[0].color }}>
                {insights[0].tag}
              </span>
              <p className="text-gray-500 text-sm mb-3">{insights[0].date} · {insights[0].readTime}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug group-hover:text-gray-200 transition-colors">
                {insights[0].title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{insights[0].excerpt}</p>
              <div className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-700 text-sm text-white font-medium w-fit group-hover:border-white transition-colors">
                Read More <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          {/* Grid — remaining articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.slice(1).map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group flex flex-col">
                <div className="relative rounded-2xl aspect-[4/3] overflow-hidden mb-5 shrink-0 bg-gray-900">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full w-fit" style={{ backgroundColor: article.color + "22", color: article.color }}>
                  {article.tag}
                </span>
                <p className="text-gray-500 text-xs mb-2">{article.date} · {article.readTime}</p>
                <h3 className="text-white font-bold text-base leading-snug mb-3 flex-1 group-hover:text-gray-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-700 text-sm text-white font-medium w-fit group-hover:border-white transition-colors">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
