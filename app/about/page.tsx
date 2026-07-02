import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Lightbulb, Handshake, Zap } from "lucide-react";

const values = [
  { icon: <Target size={22} />, title: "Results-Driven", desc: "Every solution we build is focused on delivering measurable results for your business." },
  { icon: <Lightbulb size={22} />, title: "Innovative", desc: "We stay at the forefront of technology to bring you cutting-edge solutions." },
  { icon: <Handshake size={22} />, title: "Partnership", desc: "We build lasting relationships, not just software. Your success is our success." },
  { icon: <Zap size={22} />, title: "Agile", desc: "We work efficiently and adapt quickly to deliver on time and within budget." },
];

const whyUs = [
  "Standout quality with an expert team",
  "Transparent processes and clear communication",
  "Cutting-edge technology stack",
  "Tailored, results-driven innovations",
  "Ongoing support and maintenance",
  "Scalable solutions for all business sizes",
  "Years of experience across multiple industries",
  "Dedicated project managers for every engagement",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span style={{ color: "#FFCC33" }}>Forge9x</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Forge9x, we turn ideas into reality with cutting-edge IT solutions. Backed by years of experience, we provide innovative software services designed to empower businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our standout quality, expert team, transparent processes, and cutting-edge technology have made us a trusted partner for driving growth. We are dedicated to helping businesses gain leads, convert them into sales, and achieve new heights with innovative, reliable solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don't just provide software solutions; we build lasting partnerships that fuel your success. Trust us to elevate your tech game with tailored, results-driven innovations that help your business thrive.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 bg-blue-50 mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Forge9x?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We are your go-to partner for elevating your tech game.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyUs.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={18} className="text-blue-600 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Forge9x?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let us help you unlock the true potential of your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
