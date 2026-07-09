import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

const articles = [
  { title: "The Future of AI in Business: What to Expect in 2026", category: "AI", tag: "AI Trends", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", featured: true },
  { title: "10 SEO Strategies That Actually Work in 2025", category: "SEO", tag: "SEO", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80" },
  { title: "Why Progressive Web Apps Are the Future of Mobile", category: "Mobile", tag: "Mobile Dev", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" },
  { title: "How to Choose the Right Tech Stack for Your Web App", category: "Web Development", tag: "Development", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80" },
  { title: "UX Design Principles Every Developer Should Know", category: "Design", tag: "UX/UI", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80" },
  { title: "Cloud vs On-Premise: Making the Right Decision for Your Business", category: "Infrastructure", tag: "Cloud", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" },
  { title: "The Complete Guide to E-Commerce Optimisation", category: "E-Commerce", tag: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80" },
  { title: "Building Scalable APIs: Best Practices for 2025", category: "Backend", tag: "API Design", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80" },
  { title: "Data Privacy Laws: What Your Business Needs to Know", category: "Legal", tag: "Compliance", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80" },
];

export default async function InsightsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.insights;
  const featured = articles[0];
  const rest = articles.slice(1);
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t.badge}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{t.desc}</p>
        </div>
      </section>
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 group">
            <div className="relative md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 mb-4 w-fit">{featured.tag}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{featured.title}</h2>
              <Link href={`/${lang}/contact`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:brightness-125 transition-all">
                {t.readMore} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((a) => (
              <div key={a.title} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 mb-2">{a.tag}</span>
                <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{a.title}</h3>
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:brightness-125 transition-all">
                  {t.readMore} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            {t.ctaBtn} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
