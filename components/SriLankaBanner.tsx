import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type BannerDict = { title: string; desc: string; btn: string };

export default function SriLankaBanner({
  lang = "en",
  dict,
}: {
  lang?: string;
  dict?: BannerDict;
}) {
  const title = dict?.title ?? "Starting a Business in Sri Lanka? We're Here to Help!";
  const desc = dict?.desc ?? "Forge9x has a dedicated team in Sri Lanka ready to support your business with local expertise, cost-effective solutions, and world-class digital services.";
  const btn = dict?.btn ?? "Get in Touch";

  return (
    <section className="bg-black py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
              Sri Lanka
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{desc}</p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              {btn} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:w-[48%] shrink-0 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80" alt="Business in Sri Lanka" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
