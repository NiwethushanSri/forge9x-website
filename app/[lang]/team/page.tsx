import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TeamPhoto from "@/components/TeamPhoto";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function TeamPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.team;
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
          <TeamPhoto />
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#111827" }}>{t.ctaTitle}</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>{t.ctaDesc}</p>
          <Link href={`/careers`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0a0a0a] hover:bg-gray-800 transition-colors">
            {t.ctaBtn} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
