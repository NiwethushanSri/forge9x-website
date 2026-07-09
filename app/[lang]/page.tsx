import Link from "next/link";
import {
  Globe, Code2, Brain, Smartphone, Search, Palette,
  CheckCircle, ArrowRight, Star, Users, Award
} from "lucide-react";
import TechMarquee from "@/components/TechMarquee";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

const serviceIcons = [
  <Globe size={28} key="globe" />,
  <Code2 size={28} key="code2" />,
  <Brain size={28} key="brain" />,
  <Smartphone size={28} key="smartphone" />,
  <Search size={28} key="search" />,
  <Palette size={28} key="palette" />,
];

const serviceColors = ["#E76F51", "#8AB17D", "#E9C46A", "#6FA8DC", "#B39DDB", "#E8A0BF"];
const serviceHrefs = [
  "web-development",
  "web-applications",
  "ai-development",
  "mobile-development",
  "seo",
  "graphic-design",
];

const statsIcons = [
  <Users size={32} key="users" />,
  <Award size={32} key="award" />,
  <CheckCircle size={32} key="check" />,
  <Star size={32} key="star" />,
];
const statsValues = [100, 5, 120, 98];
const statsSuffixes = ["+", "+", "+", "%"];

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            <h1 className="font-bold leading-tight mb-5 sm:mb-6 text-4xl sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="text-white font-semibold leading-relaxed mb-4 text-xl sm:text-2xl max-w-2xl">
              {t.heroSubtitle}
            </p>
            <p className="text-gray-300 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white transition-all hover:brightness-110 text-sm sm:text-base" style={{ backgroundColor: "#00679A" }}>
                {t.startProject} <ArrowRight size={16} />
              </Link>
              <Link href={`/${lang}/portfolio`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 transition-colors text-sm sm:text-base">
                {t.viewWork}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={statsValues.map((v, i) => ({
            value: v,
            suffix: statsSuffixes[i],
            label: t.stats[i].label,
            icon: statsIcons[i],
          }))} />
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="bg-black border-t border-gray-800 py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{t.techTitle}</p>
        </div>
        <TechMarquee />
      </section>

      {/* Services */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.servicesTitle}</h2>
            <p className="text-gray-400 max-w-xl mx-auto">{t.servicesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <Link key={serviceHrefs[i]} href={`/${lang}/services/${serviceHrefs[i]}`} className="group rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all" style={{ backgroundColor: serviceColors[i] }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-black/10 group-hover:bg-black/15 transition-colors" style={{ color: "#111827" }}>
                  {serviceIcons[i]}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#111827" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#1f2937" }}>{s.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#111827" }}>
                  {t.learnMore} <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Forge9x */}
      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t.whyBadge}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">{t.whyTitle}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.whyDesc}</p>
              <div className="flex items-center gap-4">
                <Link href={`/${lang}/about`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white hover:bg-white hover:text-black transition-all w-fit">
                  {t.aboutUs}
                </Link>
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black transition-all hover:opacity-90 w-fit" style={{ backgroundColor: "#FFCC33" }}>
                  {dict.nav.getInTouch}
                </Link>
              </div>
            </div>
            <div className="lg:w-[48%] shrink-0 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/office-team.jpg" alt="Forge9x team at work" className="w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsShowcase />

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>{t.ctaTitle}</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>{t.ctaDesc}</p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors">
            {t.ctaBtn} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
