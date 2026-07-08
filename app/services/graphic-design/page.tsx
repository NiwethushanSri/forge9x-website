import Link from "next/link";
import { ArrowRight, Palette, BookOpen, Package, Video, FileImage } from "lucide-react";

const designAreas = [
  { icon: <Palette size={24} />, title: "Visual Identity & Branding", desc: "Logo design, brand guidelines, and consistent visual identity across all platforms." },
  { icon: <FileImage size={24} />, title: "Marketing & Advertising", desc: "Flyers, posters, social media posts, business presentations, and promotional materials." },
  { icon: <BookOpen size={24} />, title: "Books & Publications", desc: "E-book cover design, editorial layouts, and professional print-ready publications." },
  { icon: <Package size={24} />, title: "Packaging Materials", desc: "Product packaging design that stands out on shelves and resonates with your brand." },
  { icon: <Video size={24} />, title: "Short Video Ads", desc: "Engaging animated ads and logo animations for digital marketing campaigns." },
  { icon: <FileImage size={24} />, title: "Digital Design", desc: "Website graphics, social media content, banners, and digital marketing creatives." },
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

export default function GraphicDesignPage() {
  return (
    <>
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / Graphic Design</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Graphic <span style={{ color: "#FFCC33" }}>Design</span> Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At Forge9x, graphic design is more than aesthetics   it's about crafting visual content that engages, communicates effectively, and delivers results. Every design is built around your business goals.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Start Creating <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designAreas.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-600 bg-blue-50 mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What We Deliver</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {deliverables.map((d) => (
              <span key={d} className="px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm border border-blue-100">
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
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
