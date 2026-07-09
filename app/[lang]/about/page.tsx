"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, use } from "react";
import type { Locale } from "@/middleware";

const journey = [
  {
    year: "2019",
    title: "Forge9x Founded in the UK",
    desc: "Started as a lean web development studio in Wales, UK. We believe great technology should be accessible to every business.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    color: "#00679A",
  },
  {
    year: "2020",
    title: "Sri Lanka Team Established",
    desc: "Opened our first offshore development hub in Sri Lanka, bringing together top engineering talent and unlocking 24/7 delivery capability.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    color: "#FFCC33",
  },
  {
    year: "2021",
    title: "AI & Mobile Division Launched",
    desc: "Expanded into AI development and mobile apps, responding to growing client demand for intelligent, cross-platform digital products.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    color: "#8AB17D",
  },
  {
    year: "2022",
    title: "50+ Clients Milestone",
    desc: "Crossed 50 active clients spanning healthcare, legal, logistics, and e-commerce. This validated our multi-sector delivery model.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    color: "#B39DDB",
  },
  {
    year: "2024",
    title: "100+ Clients & Growing",
    desc: "Today Forge9x serves 100+ businesses worldwide with a full-stack team across the UK and Sri Lanka. And we are just getting started.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    color: "#E9C46A",
  },
];

const footprint = [
  { label: "Web & App Development", desc: "Custom websites, SaaS platforms, and e-commerce solutions built for performance and scale." },
  { label: "AI & Automation", desc: "Intelligent systems, NLP chatbots, and ML integrations that give businesses a competitive edge." },
  { label: "Design & SEO", desc: "Brand identity, UI/UX design, and search engine optimisation that drives real organic growth." },
];

const team = [
  { name: "Niwethushan S.", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80", linkedin: "#" },
  { name: "Priya Mahendran", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80", linkedin: "#" },
  { name: "James Owens", role: "Creative Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80", linkedin: "#" },
  { name: "Kavya Patel", role: "Head of AI & Data", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80", linkedin: "#" },
  { name: "Tom Richards", role: "Head of SEO & Growth", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80", linkedin: "#" },
  { name: "Dilani Wijeratne", role: "Project Manager", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80", linkedin: "#" },
];

const values = [
  { title: "Client First", desc: "Every decision we make starts with one question: does this genuinely help our client?" },
  { title: "Radical Transparency", desc: "No hidden costs, no smoke and mirrors. Just honest timelines, clear communication, and real progress." },
  { title: "Excellence in Craft", desc: "We take pride in every line of code, every design pixel, and every SEO recommendation we deliver." },
  { title: "Global Mindset", desc: "With teams in the UK and Sri Lanka, we bring diverse perspectives to every challenge." },
];

export default function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s === 0 ? journey.length - 1 : s - 1));
  const next = () => setSlide((s) => (s === journey.length - 1 ? 0 : s + 1));
  const current = journey[slide];

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-black text-white border-t border-gray-800 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">About Forge9x</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 max-w-4xl">
            We are advisors,<br />builders, and<br />innovators
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-4">
            For more than 5 years, ambitious businesses have trusted Forge9x to help shape their digital products and scale their ideas. Rooted in Welsh entrepreneurial culture where trust, openness, and quality come first. We&apos;ve grown into a global team of 30+ experts who live those values every day.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            We don&apos;t just deliver software. We co-create, advise, and innovate alongside our clients. We help them navigate complexity and grow with confidence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href={`/contact`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Work with us <ArrowRight size={16} />
            </Link>
            <Link href={`/careers`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-gray-600 text-white hover:border-white transition-colors">
              Join our team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0a0a0a] border-t border-gray-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Clients Served" },
              { value: "5+", label: "Years Experience" },
              { value: "120+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Timeline</p>
              <h2 className="text-4xl font-black text-white">Our journey</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-white transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src={current.image} alt={current.title} fill className="object-cover transition-all duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 px-4 py-1.5 rounded-full text-sm font-black text-black" style={{ backgroundColor: "#FFCC33" }}>
                {current.year}
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-4" style={{ color: "#FFCC33" }}>{current.year}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{current.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">{current.desc}</p>
              <div className="flex gap-2 mt-8">
                {journey.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-4 bg-gray-700"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Footprint ── */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What we do</p>
              <h2 className="text-4xl font-black text-white mb-6">Our global footprint</h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                We&apos;re structured as a collective of specialist teams, serving clients across Europe, North America, and Asia. All under one trusted brand.
              </p>
              <div className="flex flex-col gap-6">
                {footprint.map((f) => (
                  <div key={f.label} className="border-l-2 pl-5" style={{ borderColor: "#00679A" }}>
                    <div className="font-bold text-white mb-1">{f.label}</div>
                    <div className="text-sm text-gray-400">{f.desc}</div>
                  </div>
                ))}
              </div>
              <Link href={`/services/web-development`} className="inline-flex items-center gap-2 mt-10 px-6 py-2.5 rounded-full font-semibold text-white text-sm border border-gray-600 hover:border-white transition-colors">
                Our Services <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80" alt="Global presence" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-[#0a0a0a] border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80" alt="Team collaboration" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Who we are today</p>
              <h2 className="text-4xl font-black text-white mb-6">Rooted in trust, growing through collaboration</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Over the past 5 years, Forge9x has helped 100+ businesses across the UK, Europe, and beyond build digital products that actually work and keep working. We&apos;re a team of 30+ specialists across design, engineering, AI, and growth.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every project is guided by the same culture of curiosity, collaboration, and craftsmanship. We deliver real impact for our clients while continuously growing as a company.
              </p>
              <Link href={`/contact`} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white text-sm border border-gray-600 hover:border-white transition-colors">
                Get in touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Teamwork ── */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Insights</p>
              <h2 className="text-4xl font-black text-white mb-4">UK + Sri Lanka. One team.</h2>
              <p className="text-gray-400 leading-relaxed mb-6">How we deliver world-class work across time zones.</p>
              <div className="flex flex-col gap-6">
                <div className="bg-[#111] rounded-xl p-5 border border-gray-800">
                  <div className="font-bold text-white mb-2">Cultural Compatibility - UK & Sri Lanka</div>
                  <div className="text-sm text-gray-400">Both cultures place enormous value on respect, quality, and long-term relationships. Cross-team collaboration feels natural, not forced.</div>
                </div>
                <div className="bg-[#111] rounded-xl p-5 border border-gray-800">
                  <div className="font-bold text-white mb-2">Overlapping Working Hours</div>
                  <div className="text-sm text-gray-400">With a 4.5-hour overlap between UK and Sri Lanka, our clients always have someone available. We never sacrifice speed or momentum.</div>
                </div>
              </div>
              <Link href={`/team`} className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 rounded-full font-semibold text-white text-sm border border-gray-600 hover:border-white transition-colors">
                Meet our team <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80" alt="Team meeting" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Ecosystem ── */}
      <section className="bg-[#0a0a0a] border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80" alt="Tech ecosystem" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Our Stack</p>
              <h2 className="text-4xl font-black text-white mb-6">Our Tech Ecosystem</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Forge9x is a network of specialist practitioners, united by a shared culture of innovation and engineering excellence. From digital solutions in Norway to rapid scaling in London, our transparent delivery model means our clients always know what to expect.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Next.js", "React", "Node.js", "Python", "TypeScript", "AWS", "PostgreSQL", "Tailwind", "OpenAI"].map((tech) => (
                  <div key={tech} className="bg-[#111] border border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300 text-center font-medium">{tech}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What drives us</p>
          <h2 className="text-4xl font-black text-white mb-12">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl p-7 border border-gray-800 bg-[#0a0a0a]">
                <div className="text-3xl font-black mb-4" style={{ color: ["#00679A", "#FFCC33", "#8AB17D", "#B39DDB"][i] }}>0{i + 1}</div>
                <h3 className="font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* ── CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-black mb-4">Ready to work with Forge9x?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Let us help you unlock the true potential of your business with technology that delivers.</p>
          <Link href={`/contact`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors text-lg" style={{ color: "#00679A" }}>
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
