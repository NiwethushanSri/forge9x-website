"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import type { Locale } from "@/middleware";
import enDict from "@/dictionaries/en.json";

const projects = [
  { title: "Michaelites A/L 2015 Forum", category: "Web Applications", desc: "A community forum platform for the A/L 2015 batch of St. Michael's College, Batticaloa — connecting batchmates worldwide to celebrate achievements and give back to their alma mater.", tags: ["Community", "Forum", "React"], image: "/portfolio/michaelites.png", url: "https://michaelites2015.netlify.app" },
  { title: "Empliora", category: "Web Applications", desc: "A UK HR and compliance platform with Right to Work checks, visa and sponsor-licence tracking, staff records, and audit-ready reporting for employers.", tags: ["HR Tech", "Compliance", "SaaS"], image: "/portfolio/empliora.jpg", url: "https://empliora.co.uk" },
  { title: "Mangala Matrimony", category: "Mobile", desc: "A matrimonial matchmaking platform connecting Sri Lankan singles worldwide, with profile creation, matching, and secure account access.", tags: ["Matchmaking", "Mobile", "SaaS"], image: "/portfolio/managala.jpg", url: "https://mangala.love" },
  { title: "E-Commerce Platform", category: "Web Development", desc: "A fully custom WooCommerce store with advanced product filtering, custom checkout flow, and inventory management.", tags: ["WordPress", "WooCommerce", "PHP"], image: "/portfolio/ecommerce.jpg" },
  { title: "CRM System", category: "Web Applications", desc: "A custom-built CRM to manage customer interactions, sales pipelines, and automated follow-ups for a UK-based SME.", tags: ["React", "Node.js", "PostgreSQL"], image: "/portfolio/crm.jpg" },
  { title: "AI Chatbot Integration", category: "AI", desc: "Intelligent customer service bot with NLP capabilities, integrated into a retail platform to handle 80% of support queries.", tags: ["Python", "NLP", "API"], image: "/portfolio/ai-chatbot.jpg" },
  { title: "Restaurant Booking App", category: "Mobile", desc: "Cross-platform iOS & Android app for restaurant reservations with real-time availability and push notifications.", tags: ["React Native", "Firebase"], image: "/portfolio/restaurant.jpg" },
  { title: "Corporate Brand Identity", category: "Graphic Design", desc: "Full visual identity package including logo, brand guidelines, business cards, letterheads, and social media templates.", tags: ["Branding", "Print", "Digital"], image: "/portfolio/branding.jpg" },
  { title: "Logistics Management System", category: "Web Applications", desc: "End-to-end logistics platform covering inventory, order processing, shipping tracking, and returns management.", tags: ["Next.js", "TypeScript", "MySQL"], image: "/portfolio/logistics.jpg" },
  { title: "SEO Campaign Law Firm", category: "Web Development", desc: "A comprehensive SEO overhaul that improved organic traffic by 340% in 6 months through content strategy and link building.", tags: ["SEO", "Content", "Analytics"], image: "/portfolio/seo.jpg" },
  { title: "Healthcare Appointment System", category: "Web Applications", desc: "Cloud-based appointment booking system for a multi-clinic healthcare group with calendar sync and SMS reminders.", tags: ["React", "AWS", "Twilio"], image: "/portfolio/healthcare.jpg" },
  { title: "Facial Biometrics Access Control", category: "AI", desc: "Secure facial recognition system for access control in corporate offices, deployed across multiple locations.", tags: ["Python", "ML", "OpenCV"], image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80" },
];

const categories = ["All", "Web Development", "Web Applications", "AI", "Mobile", "Graphic Design"];

export default function PortfolioPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = enDict.portfolio;

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{t.desc}</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">{t.filterLabel}</h3>
              <ul className="flex flex-col gap-1">
                {categories.map((c) => (
                  <li key={c}>
                    <button onClick={() => setActiveCategory(c)} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${c === activeCategory ? "text-white" : "text-gray-400 hover:text-white"}`} style={c === activeCategory ? { backgroundColor: "#00679A" } : {}}>
                      {c}
                      <ChevronRight size={14} className={c === activeCategory ? "opacity-100" : "opacity-0 group-hover:opacity-50 transition-opacity"} />
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((p) => (
                <div key={p.title} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-5 bg-gray-900 aspect-video">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-xs font-medium mb-2" style={{ color: "#5EA8D9" }}>{p.category}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:brightness-125 transition-all">
                      {t.readMore} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link href={`/contact`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:brightness-125 transition-all">
                      {t.readMore} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
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
