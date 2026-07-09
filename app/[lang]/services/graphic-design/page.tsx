import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Palette, BookOpen, Package, Video, FileImage } from "lucide-react";

export const metadata: Metadata = seo({
  title: "Graphic Design Services — Branding & Visual Identity",
  description: "Forge9x creates stunning brand identities, logos, and marketing materials. Professional graphic design services for businesses in the UK and worldwide.",
  path: "/services/graphic-design",
});

const designAreas = [
  { icon: <Palette size={24} />, color: "#E76F51", title: "Visual Identity & Branding", desc: "Logo design, brand guidelines, and consistent visual identity across all platforms." },
  { icon: <FileImage size={24} />, color: "#8AB17D", title: "Marketing & Advertising", desc: "Flyers, posters, social media posts, business presentations, and promotional materials." },
  { icon: <BookOpen size={24} />, color: "#E9C46A", title: "Books & Publications", desc: "E-book cover design, editorial layouts, and professional print-ready publications." },
  { icon: <Package size={24} />, color: "#6FA8DC", title: "Packaging Materials", desc: "Product packaging design that stands out on shelves and resonates with your brand." },
  { icon: <Video size={24} />, color: "#B39DDB", title: "Short Video Ads", desc: "Engaging animated ads and logo animations for digital marketing campaigns." },
  { icon: <FileImage size={24} />, color: "#E8A0BF", title: "Digital Design", desc: "Website graphics, social media content, banners, and digital marketing creatives." },
];

const deliverables = [
  "Logo Animation",
  "Business Card, Resume & Letterhead Design",
  "Envelope and Invoice Design",
  "Short Video Ads",
  "Social Media Posts",
  "Business Presentations and Proposals",
  "Flyers and Posters",
  "E-book Cover Design",
  "Product Design",
];

export default async function GraphicDesignPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / Graphic Design</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Graphic Design Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At Forge9x, graphic design is more than aesthetics   it's about crafting visual content that engages, communicates effectively, and delivers results. Every design is built around your business goals.
            </p>
            <Link href={`/contact`} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Start Creating <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Design Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designAreas.map((s) => (
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

      <section className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">What We Deliver</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {deliverables.map((d) => (
              <span key={d} className="px-5 py-2 rounded-full bg-gray-800 text-gray-200 font-medium text-sm border border-gray-700">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#111827" }}>Let's Create Together!</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>Develop a strong visual identity that leaves a lasting impression and aligns with your brand's goals.</p>
          <Link href={`/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}


