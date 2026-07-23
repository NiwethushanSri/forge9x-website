import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";
import TeamPhoto from "@/components/TeamPhoto";

export const metadata: Metadata = seo({
  title: "Our Team — Meet the Founders",
  description: "Meet the Forge9x leadership team. Founded by Niwethushan Sritharan (CEO) and Gobinath Easwaranathan (CTO), UK-based software engineers and entrepreneurs.",
  path: "/team",
});

const expertiseNiwe = [
  "Artificial Intelligence (AI)",
  "Custom Software Development",
  "Web & Mobile Application Development",
  "Business Process Automation",
  "Enterprise Systems",
  "Cloud Solutions",
  "Cybersecurity",
  "UI/UX Design",
  "Digital Transformation",
  "IT Consultancy",
];

const expertiseGobi = [
  "Network & Computer Systems Security",
  "IT Infrastructure Management",
  "Systems Administration",
  "Cybersecurity",
  "Technical Support & Troubleshooting",
  "End-User Support",
  "System Reliability & Maintenance",
  "IT Operations",
];

export default async function TeamPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.team;

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t.badge}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{t.desc}</p>
        </div>
      </section>

      {/* Niwethushan — Featured Profile */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-start">

            {/* Photo + name card */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <TeamPhoto src="/team/niwethushan.jpg" alt="Niwethushan Sritharan" initials="NS" color="#00679A" />
              </div>
              <div>
                <h2 className="text-white text-xl font-black mb-1">Niwethushan Sritharan</h2>
                <p className="font-semibold text-sm mb-3" style={{ color: "#5EA8D9" }}>Founder &amp; CEO, Forge9X</p>
                <div className="flex items-center gap-3 mb-4">
                  <a href="https://www.open.edu/openlearn/badges/badge.php?hash=dfb6a19a1cbbfc59eefdebda7ce83259c125c00a" target="_blank" rel="noopener noreferrer" title="Cyber Security Training (GICAST) — The Open University" className="hover:opacity-80 transition-opacity">
                    <img src="/badges/gicast.png" alt="Cyber Security Training GICAST — The Open University" className="w-16 h-16 object-contain" />
                  </a>
                  <a href="https://www.open.edu/openlearn/badges/badge.php?hash=36b7661f834f321ab88f857e1e455a2acf9c82f9" target="_blank" rel="noopener noreferrer" title="Introduction to Cyber Security — The Open University" className="hover:opacity-80 transition-opacity">
                    <img src="/badges/intro-cybersecurity.png" alt="Introduction to Cyber Security — The Open University" className="w-16 h-16 object-contain" />
                  </a>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">BEng (Hons) Software Engineering</span>
                    <span className="text-sm text-white font-medium">University of Westminster</span>
                    <span className="text-xs text-gray-500">United Kingdom</span>
                  </div>
                  <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">MSc Advanced Computer Science</span>
                    <span className="text-sm text-white font-medium">Swansea University</span>
                    <span className="text-xs text-gray-500">United Kingdom</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} className="shrink-0" />
                  London, United Kingdom
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  Niwethushan Sritharan is a technology entrepreneur, software engineer, and AI solutions architect based in London, United Kingdom. As the Founder and CEO of Forge9X, he is committed to helping businesses transform through innovative software, artificial intelligence, automation, and modern digital solutions.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  With over six years of experience in software engineering and enterprise technology, Niwethushan has worked across software development, machine learning, business automation, cloud technologies, digital transformation, and legal technology. His mission is simple: build technology that solves real-world problems and creates measurable business value.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  Before founding Forge9X, he worked as a Software Engineer at Informatics International Limited, where he contributed to enterprise software systems, AI-powered applications, predictive analytics, and business intelligence solutions. He later joined S. Satha &amp; Co Solicitors in London, leading digital transformation initiatives, IT infrastructure, cybersecurity improvements, workflow automation, and legal technology systems.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Today, through Forge9X, Niwethushan leads a multidisciplinary team delivering high-quality digital products for startups, SMEs, enterprises, and professional organisations. Beyond Forge9X, he is also the Co-Founder &amp; CEO of CareWeave, a healthcare technology platform focused on connecting families with trusted caregiving services through innovative digital solutions.
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expertiseNiwe.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#111] border border-gray-700 text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gobinath — Featured Profile */}
      <section className="bg-[#0a0a0a] border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-14 items-start">

            {/* Photo + Name */}
            <div className="flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <TeamPhoto src="/team/gobinath.jpg" alt="Gobinath Easwaranathan" initials="GE" color="#8AB17D" />
              </div>
              <div>
                <h2 className="text-white text-xl font-black mb-1">Gobinath Easwaranathan</h2>
                <p className="font-semibold text-sm mb-4" style={{ color: "#5EA8D9" }}>Co-Founder &amp; CTO, Forge9X</p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">MSc Network and Computer Systems Security</span>
                    <span className="text-sm text-white font-medium">University of Greenwich</span>
                    <span className="text-xs text-gray-500">United Kingdom</span>
                  </div>
                  <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">BSc Computer Systems and Networking</span>
                    <span className="text-sm text-white font-medium">University of Greenwich</span>
                    <span className="text-xs text-gray-500">United Kingdom</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} className="shrink-0" />
                  United Kingdom
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  Gobinath Easwaranathan is a cybersecurity and IT infrastructure professional based in the United Kingdom. As Co-Founder of Forge9X, he brings expertise in network security, systems administration, IT operations, and technical support. Helping ensure that the company&apos;s digital solutions are built on secure, reliable, and resilient foundations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  He currently works as an IT Support Administrator at S Satha &amp; Co Solicitors, where he supports day-to-day IT operations, manages technical issues, assists end users, and contributes to maintaining the reliability and security of business-critical systems.
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expertiseGobi.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#111] border border-gray-700 text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
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
          <Link href={`/careers`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0a0a0a] hover:bg-gray-800 transition-colors">
            {t.ctaBtn} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
