import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Lightbulb, Handshake, Zap } from "lucide-react";
import SriLankaBanner from "@/components/SriLankaBanner";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

const valueIcons = [
  <Target size={22} key="target" />,
  <Lightbulb size={22} key="lightbulb" />,
  <Handshake size={22} key="handshake" />,
  <Zap size={22} key="zap" />,
];

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.about;
  const isCy = lang === "cy";

  return (
    <>
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 max-w-xl">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />{t.badge}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{t.title}</h1>
              <p className="text-gray-400 text-base leading-relaxed mb-4">{t.desc1}</p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">{t.desc2}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white border border-gray-600 hover:border-white transition-colors text-sm">
                  {isCy ? "Gweithio gyda ni" : "Work with us"}
                </Link>
                <Link href={`/${lang}/careers`} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white transition-all hover:brightness-110 text-sm" style={{ backgroundColor: "#111", border: "1px solid #333" }}>
                  {isCy ? "Ymuno â'n tîm" : "Join our team"}
                </Link>
              </div>
            </div>
            <div className="lg:w-[52%] shrink-0 w-full">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85" alt="Forge9x team" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" priority />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                {isCy ? "Ein Cenhadaeth" : "Our Mission"}
              </p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                {isCy ? "Adeiladu technoleg sy'n symud busnesau ymlaen" : "Building technology that moves businesses forward"}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                {isCy ? "Mae ein hansawdd rhagorol, tîm arbenigol, prosesau tryloyw a thechnoleg flaengar wedi'n gwneud yn bartner dibynadwy ar gyfer sbarduno twf. Rydym yn ymroddedig i helpu busnesau i ennill arweiniadau, eu trosi yn werthiannau, a chyrraedd uchelfannau newydd."
                  : "Our standout quality, expert team, transparent processes, and cutting-edge technology have made us a trusted partner for driving growth. We are dedicated to helping businesses gain leads, convert them into sales, and achieve new heights."}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {isCy ? "Nid yn unig rydym yn darparu datrysiadau meddalwedd — rydym yn adeiladu partneriaethau parhaol sy'n ysgogi eich llwyddiant. Ymddiriedwch ynom i godi eich gêm technoleg gydag arloeseddau wedi'u teilwra."
                  : "We don't just provide software solutions — we build lasting partnerships that fuel your success. Trust us to elevate your tech game with tailored, results-driven innovations."}
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.values.map((v, i) => (
                <div key={v.title} className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-400 bg-blue-500/10 mb-4">{valueIcons[i]}</div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SriLankaBanner lang={lang} dict={t.sriLankaBanner} />

      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{isCy ? "Yn Barod i Weithio gyda Forge9x?" : "Ready to Work with Forge9x?"}</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">{isCy ? "Gadewch i ni eich helpu i ddatgloi potensial gwirioneddol eich busnes." : "Let us help you unlock the true potential of your business."}</p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            {isCy ? "Cysylltwch â Ni Heddiw" : "Contact Us Today"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
