import Link from "next/link";
import Image from "next/image";
import {
  Globe, Code2, Brain, Smartphone, Search, Palette,
  CheckCircle, ArrowRight, Star, Users, Award, Zap
} from "lucide-react";
import TechMarquee from "@/components/TechMarquee";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    desc: "Custom websites   from simple informational sites to complex web applications   built to align with your business goals.",
    href: "/services/web-development",
    color: "#E76F51",
  },
  {
    icon: <Code2 size={28} />,
    title: "Web Applications",
    desc: "ERP, CRM, HRM, reservation, logistics, and appointment management systems designed for operational excellence.",
    href: "/services/web-applications",
    color: "#8AB17D",
  },
  {
    icon: <Brain size={28} />,
    title: "AI Development",
    desc: "Custom AI apps, bots, automation, ML integration, NLP, image recognition, and facial biometrics   tailored to your needs.",
    href: "/services/ai-development",
    color: "#E9C46A",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    desc: "Native and cross-platform iOS & Android apps with exceptional UX and enterprise mobility solutions.",
    href: "/services/mobile-development",
    color: "#6FA8DC",
  },
  {
    icon: <Search size={28} />,
    title: "SEO",
    desc: "Competitor analysis, on-page optimisation, link building, and landing page strategies that convert traffic into sales.",
    href: "/services/seo",
    color: "#B39DDB",
  },
  {
    icon: <Palette size={28} />,
    title: "Graphic Design",
    desc: "Visual identity, branding, logo animation, social media content, and marketing materials that leave a lasting impression.",
    href: "/services/graphic-design",
    color: "#E8A0BF",
  },
];

const stats = [
  { icon: <Users size={24} />, value: "200+", label: "Clients Served" },
  { icon: <Award size={24} />, value: "5+", label: "Years Experience" },
  { icon: <CheckCircle size={24} />, value: "500+", label: "Projects Delivered" },
  { icon: <Star size={24} />, value: "98%", label: "Client Satisfaction" },
];

const whyUs = [
  "Standout quality with expert team",
  "Transparent processes and communication",
  "Cutting-edge technology stack",
  "Tailored, results-driven innovations",
  "Ongoing support and maintenance",
  "Scalable solutions for all business sizes",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6">
              <Zap size={12} />
              UK-Based Digital Innovation Agency
            </div>
            <h1 className="font-bold leading-tight mb-5 sm:mb-6 text-4xl sm:text-6xl lg:text-7xl">
              Build. Grow. <span style={{ color: "#FFCC33" }}>Dominate</span> Your Digital Presence.
            </h1>
            <p className="text-white font-semibold leading-relaxed mb-4 text-xl sm:text-2xl max-w-2xl">
              Where bold ideas become intelligent digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl">
              At Forge9X, we partner with ambitious businesses to design, build, and scale powerful digital products and AI-driven solutions. From the first idea to launch and beyond, we combine strategic thinking, modern software engineering, and artificial intelligence to solve complex challenges, accelerate innovation, and create technology built for lasting growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white transition-all hover:brightness-110 text-sm sm:text-base"
                style={{ backgroundColor: "#00679A" }}
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 transition-colors text-sm sm:text-base"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={[
            { value: 200, suffix: "+", label: "Clients Served",      icon: <Users size={32} /> },
            { value: 5,   suffix: "+", label: "Years Experience",    icon: <Award size={32} /> },
            { value: 500, suffix: "+", label: "Projects Delivered",  icon: <CheckCircle size={32} /> },
            { value: 98,  suffix: "%", label: "Client Satisfaction", icon: <Star size={32} /> },
          ]} />
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="bg-black py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Technologies We Work With</p>
        </div>
        <TechMarquee />
      </section>


      {/* Services */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span style={{ color: "#00679A" }}>Offer</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From websites to AI   we have the expertise to digitise and accelerate your business at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                style={{ backgroundColor: s.color }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-gray-900 bg-black/10 group-hover:bg-black/15 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-800/80 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Forge9x */}
      <section className="w-full overflow-hidden flex flex-col lg:flex-row">
          {/* Left — gold background with content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 xl:px-16 py-12 lg:py-16 lg:w-1/2" style={{ backgroundColor: "#FFCC33" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#111827" }}>
              Why Choose <span style={{ color: "#00679A" }}>Forge</span><span style={{ color: "#FFFFFF" }}>9x</span>?
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "#1f2937" }}>
              We don't just provide software solutions — we build lasting partnerships that fuel your success. At Forge9x, we believe impactful software has the power to keep customers engaged longer than they intended.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {whyUs.map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium" style={{ color: "#111827" }}>
                  <CheckCircle size={18} className="shrink-0" style={{ color: "#00679A" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:brightness-110 w-fit"
              style={{ backgroundColor: "#00679A" }}
            >
              About Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — full-bleed office photo */}
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-0" style={{ flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/office-team.jpg"
              alt="Forge9x team at work"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Client Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our <span style={{ color: "#00679A" }}>Clients Say</span>
          </h2>
          <a
            href="https://g.page/r/CeoXP2uTs5uHEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:brightness-110 bg-white border border-gray-200 shadow-sm text-gray-800"
          >
            <Image src="/icons/google.svg" alt="Google" width={18} height={18} />
            Leave Us a Google Review
            <Star size={16} style={{ color: "#FBBC05" }} fill="currentColor" />
          </a>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
            Ready to Unlock Your Business Potential?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>
            Let Forge9x help you build, grow, and maintain a powerful web presence. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
