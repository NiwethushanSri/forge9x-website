import Link from "next/link";
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
  },
  {
    icon: <Code2 size={28} />,
    title: "Web Applications",
    desc: "ERP, CRM, HRM, reservation, logistics, and appointment management systems designed for operational excellence.",
    href: "/services/web-applications",
  },
  {
    icon: <Brain size={28} />,
    title: "AI Development",
    desc: "Custom AI apps, bots, automation, ML integration, NLP, image recognition, and facial biometrics   tailored to your needs.",
    href: "/services/ai-development",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    desc: "Native and cross-platform iOS & Android apps with exceptional UX and enterprise mobility solutions.",
    href: "/services/mobile-development",
  },
  {
    icon: <Search size={28} />,
    title: "SEO",
    desc: "Competitor analysis, on-page optimisation, link building, and landing page strategies that convert traffic into sales.",
    href: "/services/seo",
  },
  {
    icon: <Palette size={28} />,
    title: "Graphic Design",
    desc: "Visual identity, branding, logo animation, social media content, and marketing materials that leave a lasting impression.",
    href: "/services/graphic-design",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, #00679A 0%, transparent 60%), radial-gradient(circle at 75% 20%, #FFCC33 0%, transparent 50%)"
        }} />
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left   text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6">
                <Zap size={12} />
                UK-Based Digital Innovation Agency
              </div>
              <h1 className="font-bold leading-tight mb-5 sm:mb-6">
                Build. Grow. <span style={{ color: "#FFCC33" }}>Dominate</span> Your Digital Presence.
              </h1>
              <p className="text-gray-300 leading-relaxed mb-8 sm:mb-10">
                Forge9x delivers cutting-edge web development, AI solutions, mobile apps, and SEO services that transform your business and fuel sustainable growth.
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

            {/* Right   animated visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md h-[420px]">

                {/* Glowing orb behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#00679A" }} />

                {/* Central card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 shadow-2xl" style={{ animation: "float 4s ease-in-out infinite" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#00679A" }}>
                      <Globe size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Web Dev</div>
                      <div className="text-blue-300 text-xs">Custom & CMS</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/20 w-full" />
                    <div className="h-2 rounded-full bg-white/20 w-3/4" />
                    <div className="h-2 rounded-full w-1/2" style={{ backgroundColor: "#FFCC33", opacity: 0.7 }} />
                  </div>
                </div>

                {/* Top-left card   AI */}
                <div className="absolute top-4 left-0 w-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl" style={{ animation: "float 4s ease-in-out infinite 0.8s" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/30">
                      <Brain size={16} className="text-purple-300" />
                    </div>
                    <div className="text-white font-semibold text-xs">AI Solutions</div>
                  </div>
                  <div className="flex gap-1">
                    {[40, 65, 50, 80, 55, 90].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-purple-400/50" style={{ height: `${h * 0.3}px` }} />
                    ))}
                  </div>
                </div>

                {/* Top-right card   Mobile */}
                <div className="absolute top-8 right-0 w-40 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl" style={{ animation: "float 4s ease-in-out infinite 1.6s" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-green-500/30">
                      <Smartphone size={14} className="text-green-300" />
                    </div>
                    <div className="text-white font-semibold text-xs">Mobile</div>
                  </div>
                  <div className="text-green-400 text-lg font-bold">iOS & Android</div>
                  <div className="text-blue-300 text-xs mt-1">Native & Cross-platform</div>
                </div>

                {/* Bottom-left card   SEO */}
                <div className="absolute bottom-8 left-2 w-40 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl" style={{ animation: "float 4s ease-in-out infinite 2.4s" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-yellow-500/30">
                      <Search size={14} className="text-yellow-300" />
                    </div>
                    <div className="text-white font-semibold text-xs">SEO</div>
                  </div>
                  <div className="text-yellow-400 text-lg font-bold">+340%</div>
                  <div className="text-blue-300 text-xs mt-1">Organic traffic growth</div>
                </div>

                {/* Bottom-right card   stats */}
                <div className="absolute bottom-4 right-0 w-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl" style={{ animation: "float 4s ease-in-out infinite 3.2s" }}>
                  <div className="text-xs text-blue-300 mb-2 font-medium">Projects Delivered</div>
                  <div className="text-3xl font-black text-white">500<span style={{ color: "#FFCC33" }}>+</span></div>
                  <div className="flex items-center gap-1 mt-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />)}
                    <span className="text-xs text-blue-300 ml-1">98% satisfied</span>
                  </div>
                </div>

                {/* Orbiting dot */}
                <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-yellow-400" style={{ animation: "orbit 6s linear infinite", transformOrigin: "0 0", marginLeft: "-6px", marginTop: "-6px" }} />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
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
      <section className="bg-gray-50 py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Technologies We Work With</p>
        </div>
        <TechMarquee />
      </section>


      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We <span style={{ color: "#00679A" }}>Offer</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From websites to AI   we have the expertise to digitise and accelerate your business at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: "#00679A" }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Why Choose <span style={{ color: "#00679A" }}>Forge9x</span>?
            </h2>
            <p className="text-gray-800 leading-relaxed mb-8">
              We don't just provide software solutions — we build lasting partnerships that fuel your success. At Forge9x, we believe impactful software has the power to keep customers engaged longer than they intended.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {whyUs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-900 font-medium">
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
      <section className="bg-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Client Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span style={{ color: "#00679A" }}>Clients Say</span>
          </h2>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Unlock Your Business Potential?
          </h2>
          <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
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
