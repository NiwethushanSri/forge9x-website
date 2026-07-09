import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Lightbulb, Handshake, Zap } from "lucide-react";
import SriLankaBanner from "@/components/SriLankaBanner";

const values = [
  { icon: <Target size={22} />, title: "Results-Driven", desc: "Every solution we build is focused on delivering measurable results for your business." },
  { icon: <Lightbulb size={22} />, title: "Innovative", desc: "We stay at the forefront of technology to bring you cutting-edge solutions." },
  { icon: <Handshake size={22} />, title: "Partnership", desc: "We build lasting relationships, not just software. Your success is our success." },
  { icon: <Zap size={22} />, title: "Agile", desc: "We work efficiently and adapt quickly to deliver on time and within budget." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left */}
            <div className="flex-1 max-w-xl">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
                About us
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                We are advisors,<br />builders, and innovators
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                At Forge9x, we believe great digital products are built where expertise, culture, and innovation come together. Founded in the UK with a world-class development team across Sri Lanka, we combine strategic thinking with modern engineering to solve real business challenges.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                We work with startups, SMEs, and growing enterprises to design, build, and scale powerful web platforms, mobile apps, AI solutions, and digital brands. Every project is an opportunity to learn, build, and grow together.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white border border-gray-600 hover:border-white transition-colors text-sm"
                >
                  Work with us
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white transition-all hover:brightness-110 text-sm"
                  style={{ backgroundColor: "#111" , border: "1px solid #333" }}
                >
                  Join our team
                </Link>
              </div>
            </div>

            {/* Right - image */}
            <div className="lg:w-[52%] shrink-0 w-full">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85"
                  alt="Forge9x team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-black border-t border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Clients Served" },
              { value: "5+",   label: "Years Experience" },
              { value: "120+", label: "Projects Delivered" },
              { value: "98%",  label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Building technology<br />that moves businesses forward
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Our standout quality, expert team, transparent processes, and cutting-edge technology have made us a trusted partner for driving growth. We are dedicated to helping businesses gain leads, convert them into sales, and achieve new heights with innovative, reliable solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We don't just provide software solutions. We build lasting partnerships that fuel your success. Trust us to elevate your tech game with tailored, results-driven innovations that help your business thrive in an ever-changing digital landscape.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-400 bg-blue-500/10 mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SriLankaBanner />

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Forge9x?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let us help you unlock the true potential of your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
