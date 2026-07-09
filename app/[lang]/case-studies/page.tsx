import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

const studies = [
  { title: "Empliora HR Platform", category: "Web Applications", tags: ["HR Tech", "Compliance", "SaaS"], image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?w=600&q=80", desc: "Built a comprehensive HR and compliance platform for UK employers, featuring Right to Work checks and audit-ready reporting." },
  { title: "AI Customer Service Bot", category: "AI", tags: ["NLP", "Python", "API"], image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80", desc: "Developed an intelligent chatbot that handles 80% of customer support queries for a major retail brand." },
  { title: "CRM for UK SME", category: "Web Applications", tags: ["React", "Node.js", "PostgreSQL"], image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", desc: "Custom CRM system managing customer interactions, sales pipelines, and automated follow-ups." },
  { title: "Restaurant Booking App", category: "Mobile", tags: ["React Native", "Firebase"], image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", desc: "Cross-platform mobile app for restaurant reservations with real-time availability and push notifications." },
  { title: "Logistics Management System", category: "Web Applications", tags: ["Next.js", "MySQL"], image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80", desc: "End-to-end logistics platform covering inventory, order processing, shipping tracking and returns." },
  { title: "Healthcare Appointment System", category: "Web Applications", tags: ["React", "AWS", "Twilio"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", desc: "Cloud-based booking system for a multi-clinic healthcare group with calendar sync and SMS reminders." },
  { title: "Analytics Dashboard", category: "Web Applications", tags: ["React", "D3.js", "Python"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", desc: "Real-time analytics dashboard with interactive charts, KPI tracking and custom reporting for a financial services client." },
  { title: "Facial Biometrics Access Control", category: "AI", tags: ["Python", "ML", "OpenCV"], image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80", desc: "Secure facial recognition system for access control in corporate offices across multiple locations." },
];

const tagColors: Record<string, string> = {
  "HR Tech": "bg-blue-500/10 text-blue-400",
  "Compliance": "bg-purple-500/10 text-purple-400",
  "SaaS": "bg-green-500/10 text-green-400",
  "NLP": "bg-orange-500/10 text-orange-400",
  "AI": "bg-indigo-500/10 text-indigo-400",
  "Web Applications": "bg-pink-500/10 text-pink-400",
};

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.caseStudies;
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((s) => (
              <div key={s.title} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {s.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tag] || "bg-gray-800 text-gray-300"}`}>{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link href={`/contact`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:brightness-125 transition-all">
                  {t.readMore} <ArrowRight size={14} />
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
          <Link href={`/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            {t.ctaBtn} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
