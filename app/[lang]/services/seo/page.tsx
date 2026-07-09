import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Search, Target, TrendingUp, FileText, Layout, Link2 } from "lucide-react";

export const metadata: Metadata = seo({
  title: "SEO Services — Search Engine Optimisation UK",
  description: "Boost your Google rankings with Forge9x's SEO services. Technical SEO, content strategy, and link building for UK and international businesses.",
  path: "/services/seo",
});

const seoServices = [
  { icon: <Target size={24} />, color: "#E76F51", title: "Competitor Analysis", desc: "We identify your industry rivals and examine their marketing strategies, comparing and assessing your business's strengths and areas for improvement to help you stay ahead in the market." },
  { icon: <TrendingUp size={24} />, color: "#8AB17D", title: "SEO Strategy", desc: "A content calendar based on relevant topics, keywords, and industry trends, positioning your content to rank higher in search engine results and attract organic traffic." },
  { icon: <FileText size={24} />, color: "#E9C46A", title: "On-Page Optimisation", desc: "From content creation to optimising meta descriptions and title tags, we handle everything to ensure your site performs at its best in search engine rankings." },
  { icon: <Layout size={24} />, color: "#6FA8DC", title: "Improved Content Structure", desc: "We deliver content that is adaptable across any interface. Our improved content structure breaks down information into manageable components, ensuring user-friendly accessibility." },
  { icon: <Search size={24} />, color: "#B39DDB", title: "Landing Page Optimisation", desc: "We optimise your landing pages using A/B testing and conversion rate optimisation techniques, ensuring your pages meet conversion goals and drive business results." },
  { icon: <Link2 size={24} />, color: "#E8A0BF", title: "Better Link Building", desc: "By attracting high-quality and reliable backlinks, we boost your website's authority and visibility, making your content more valuable in the eyes of search engines." },
];

export default async function SEOPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / SEO</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Search Engine Optimisation
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              What's a business without SEO? A missed opportunity! At Forge9x, we analyse market demand and implement proven techniques to drive traffic that converts into sales.
            </p>
            <Link href={`/contact`} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Boost Your Rankings <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Our SEO Services</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Comprehensive SEO strategies that rank your business higher and convert visitors into customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((s) => (
              <div key={s.title} className="rounded-2xl p-7 hover:-translate-y-1 transition-all" style={{ backgroundColor: s.color }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-black/10 mb-5" style={{ color: "#111827" }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#111827" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1f2937" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Rankings?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let Forge9x help you attract organic traffic that converts into real business growth.</p>
          <Link href={`/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Start Your SEO Journey <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}


