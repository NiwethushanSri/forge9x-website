import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Web Development", "Web Applications", "AI", "Mobile", "Graphic Design"];

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", desc: "A fully custom WooCommerce store with advanced product filtering, custom checkout flow, and inventory management.", tags: ["WordPress", "WooCommerce", "PHP"] },
  { title: "CRM System", category: "Web Applications", desc: "A custom-built CRM to manage customer interactions, sales pipelines, and automated follow-ups for a UK-based SME.", tags: ["React", "Node.js", "PostgreSQL"] },
  { title: "AI Chatbot Integration", category: "AI", desc: "Intelligent customer service bot with NLP capabilities, integrated into a retail platform to handle 80% of support queries.", tags: ["Python", "NLP", "API"] },
  { title: "Restaurant Booking App", category: "Mobile", desc: "Cross-platform iOS & Android app for restaurant reservations with real-time availability and push notifications.", tags: ["React Native", "Firebase"] },
  { title: "Corporate Brand Identity", category: "Graphic Design", desc: "Full visual identity package including logo, brand guidelines, business cards, letterheads, and social media templates.", tags: ["Branding", "Print", "Digital"] },
  { title: "Logistics Management System", category: "Web Applications", desc: "End-to-end logistics platform covering inventory, order processing, shipping tracking, and returns management.", tags: ["Next.js", "TypeScript", "MySQL"] },
  { title: "SEO Campaign   Law Firm", category: "Web Development", desc: "A comprehensive SEO overhaul that improved organic traffic by 340% in 6 months through content strategy and link building.", tags: ["SEO", "Content", "Analytics"] },
  { title: "Healthcare Appointment System", category: "Web Applications", desc: "Cloud-based appointment booking system for a multi-clinic healthcare group with calendar sync and SMS reminders.", tags: ["React", "AWS", "Twilio"] },
  { title: "Facial Biometrics Access Control", category: "AI", desc: "Secure facial recognition system for access control in corporate offices, deployed across multiple locations.", tags: ["Python", "ML", "OpenCV"] },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span style={{ color: "#FFCC33" }}>Work</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Explore a selection of projects we've delivered for clients across multiple industries. From custom websites to AI solutions, every project tells a story of partnership and results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((c) => (
              <span
                key={c}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors border ${c === "All" ? "text-white border-transparent" : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}
                style={c === "All" ? { backgroundColor: "#00679A", borderColor: "#00679A" } : {}}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                {/* Placeholder image */}
                <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}>
                  <div className="text-center">
                    <div className="text-4xl font-black mb-1" style={{ color: "#00679A" }}>
                      {p.title.charAt(0)}
                    </div>
                    <div className="text-xs text-blue-400">{p.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-blue-600 mb-2">{p.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let's add your project to our portfolio. Get in touch and let's make it happen.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
