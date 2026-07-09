"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, use } from "react";
import type { Locale } from "@/middleware";
import enDict from "@/dictionaries/en.json";
import cyDict from "@/dictionaries/cy.json";

const lifeImages = [
  "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
  "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&q=80",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
];
const valueImages = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=600&q=80",
];
const coreColors = ["#8AB17D", "#B39DDB", "#E9C46A"];
const officeColors = ["#8AB17D", "#B39DDB", "#E9C46A", "#E76F51"];

export default function CareersPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const dict = lang === "cy" ? cyDict : enDict;
  const t = dict.careers;

  const [slideIndex, setSlideIndex] = useState(0);
  const maxIndex = lifeImages.length - 4;

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
            {t.heroBadge}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">{t.heroTitle}</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-16">{t.heroDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.coreAreas.map((area, i) => (
              <div key={area.tag} className="rounded-2xl p-8 flex flex-col min-h-[280px]" style={{ backgroundColor: coreColors[i] }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5" style={{ color: "#111827" }}>
                  <span className="w-1 h-1 rounded-full bg-gray-800 inline-block" />{area.tag}
                </p>
                <h3 className="text-xl font-bold mb-3 leading-snug" style={{ color: "#111827" }}>{area.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1f2937" }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Forge9x */}
      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />{t.lifeBadge}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">{t.lifeTitle}</h2>
              <p className="text-gray-400 leading-relaxed">{t.lifeDesc}</p>
            </div>
            <div className="flex items-center gap-3 lg:pt-20">
              <button onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))} disabled={slideIndex === 0} className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white transition-colors disabled:opacity-30">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => setSlideIndex(Math.min(maxIndex, slideIndex + 1))} disabled={slideIndex >= maxIndex} className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white transition-colors disabled:opacity-30">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 transition-transform duration-500" style={{ transform: `translateX(calc(-${slideIndex} * (25% + 1rem)))` }}>
              {lifeImages.map((img, i) => (
                <div key={i} className="shrink-0 w-[calc(25%-0.75rem)] min-w-[220px]">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <Image src={img} alt={t.lifeSlides[i]} fill className="object-cover" sizes="25vw" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-bold text-base">{t.lifeSlides[i]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />{t.valuesBadge}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">{t.valuesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((v, i) => (
              <div key={v.title}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image src={valueImages[i]} alt={v.title} fill className="object-cover" sizes="25vw" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Forge9x */}
      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.joinTitle}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.joinDesc}</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.offices.map((o, i) => (
              <div key={o.region} className="rounded-2xl p-6" style={{ backgroundColor: officeColors[i] }}>
                <p className="font-bold mb-3" style={{ color: "#111827" }}>{o.region}</p>
                <span className="inline-block px-4 py-1.5 rounded-full border text-sm font-medium" style={{ borderColor: "#111827", color: "#111827" }}>{o.greeting}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {t.openings.map((job) => (
              <div key={job.title} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-800 pt-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">{job.dept}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Briefcase size={13} /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                  </div>
                </div>
                <Link href={`/${lang}/contact`} className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white text-sm hover:brightness-110 transition-all" style={{ backgroundColor: "#00679A" }}>
                  {t.applyNow} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />{t.internBadge}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{t.internTitle}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{t.internDesc}</p>
              <a href="mailto:hello@forge9x.co.uk" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white border border-gray-600 hover:border-white transition-colors">
                {t.emailUs} <ArrowRight size={16} />
              </a>
            </div>
            <div className="lg:w-[48%] shrink-0 w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80" alt="Forge9x internship" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#111827" }}>{t.ctaTitle}</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>{t.ctaDesc}</p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-[#0a0a0a] hover:bg-gray-800 transition-colors">
            {t.getInTouch} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
