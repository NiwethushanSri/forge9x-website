import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    slug: "ecommerce-platform-rebuild",
    tag: "Web Development",
    title: "E-Commerce Platform Rebuild Drives 220% Revenue Growth",
    excerpt: "A UK-based fashion retailer needed a complete overhaul of their outdated WooCommerce store. Forge9x rebuilt it from the ground up with a custom checkout flow, advanced product filtering, and mobile-first design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "#E76F51",
  },
  {
    slug: "ai-chatbot-retail",
    tag: "AI Development",
    title: "AI Chatbot Handles 80% of Customer Support for Retail Brand",
    excerpt: "Forge9x built an intelligent NLP-powered chatbot integrated directly into a retail platform, dramatically reducing support ticket volume and improving customer satisfaction scores.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    color: "#E9C46A",
  },
  {
    slug: "crm-system-sme",
    tag: "Web Applications",
    title: "Custom CRM Transforms Sales Pipeline for UK SME",
    excerpt: "A growing UK business was losing leads due to a disconnected sales process. Forge9x designed and built a tailored CRM with automated follow-ups, pipeline tracking, and reporting dashboards.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    color: "#8AB17D",
  },
  {
    slug: "restaurant-booking-app",
    tag: "Mobile Development",
    title: "Restaurant Booking App Increases Reservations by 60%",
    excerpt: "Forge9x developed a cross-platform iOS and Android booking app for a restaurant chain, featuring real-time table availability, push notifications, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    color: "#6FA8DC",
  },
  {
    slug: "logistics-management-system",
    tag: "Web Applications",
    title: "Logistics Platform Cuts Operational Costs by 35%",
    excerpt: "An end-to-end logistics management system built by Forge9x streamlined inventory tracking, order processing, and returns saving the client significant time and operational overhead.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    color: "#B39DDB",
  },
  {
    slug: "seo-law-firm",
    tag: "SEO",
    title: "SEO Strategy Delivers 340% Organic Traffic Growth for Law Firm",
    excerpt: "Forge9x conducted a full SEO audit, rebuilt the site architecture, and executed a content and link-building strategy that tripled organic search visibility within six months.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#E8A0BF",
  },
  {
    slug: "healthcare-appointment-system",
    tag: "Web Applications",
    title: "Cloud Appointment System Modernises Multi-Clinic Healthcare Group",
    excerpt: "A healthcare group with multiple clinics needed a unified appointment booking system. Forge9x delivered a cloud-based platform with calendar sync, SMS reminders, and patient record management.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    color: "#E76F51",
  },
  {
    slug: "facial-biometrics-access",
    tag: "AI Development",
    title: "Facial Biometrics System Secures Corporate Access Across 5 Locations",
    excerpt: "Forge9x built a machine learning-powered facial recognition access control system deployed across multiple corporate sites, replacing legacy key-card systems with frictionless, secure biometric entry.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    color: "#8AB17D",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Knowledge Hub</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Case studies</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Real projects. Real results. Explore how Forge9x has helped businesses across the UK and Sri Lanka grow with technology.
          </p>
        </div>
      </section>

      <section className="bg-black pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3] bg-gray-900">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full w-fit"
                  style={{ backgroundColor: cs.color + "22", color: cs.color }}
                >
                  {cs.tag}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-gray-200 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{cs.excerpt}</p>
                <div className="flex items-center gap-1 mt-4 px-4 py-2 rounded-full border border-gray-700 text-sm text-white font-medium w-fit group-hover:border-white transition-colors">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
