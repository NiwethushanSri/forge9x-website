import Link from "next/link";
import { ArrowRight, Smartphone, Globe2, Building2, Star } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const mobileServices = [
  {
    icon: <Smartphone size={24} />,
    title: "Native Application Development",
    desc: "Seamless, intuitive apps optimised specifically for their platform. Native apps leverage full access to device features   GPS, cameras, push notifications   offering faster performance and better security.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Cross-Platform Development",
    desc: "Apps that work seamlessly across iOS, Android, and other operating systems. Reach a broader audience with one app on multiple platforms, reducing costs and improving reach.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Enterprise Mobility Solutions",
    desc: "We offer enterprise mobility solutions that allow companies to use cloud technology for secure access to company data, making remote work more efficient and productive.",
  },
  {
    icon: <Star size={24} />,
    title: "Best User Experience (UX)",
    desc: "We prioritise UX by thoroughly understanding your customers' needs, values, and limitations. Forge9x implements best practices to ensure a smooth, enjoyable experience aligned with your corporate goals.",
  },
];

const process = [
  "Understanding your business needs and objectives",
  "Creating a detailed project plan",
  "Designing user-friendly and visually appealing interfaces",
  "Coding the app using the latest technologies",
  "Ensuring the app is bug-free and optimised for performance",
  "Launching the app on app stores",
  "Providing ongoing maintenance and updates",
];

export default function MobileDevelopmentPage() {
  return (
    <>
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / Mobile Development</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile <span style={{ color: "#FFCC33" }}>Development</span> Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We develop iOS and Android apps that retain potential customers and drive business growth. Secure code, powerful back-end systems, and exceptional UI   with ongoing support and maintenance.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Build Your App <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mobile Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileServices.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-600 bg-blue-50 mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
          <div className="flex flex-col gap-3">
            {process.map((step, i) => (
              <div key={step} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: "#00679A" }}>
                  {i + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { question: "What is the process for developing a mobile app?", answer: "Our process includes understanding your business needs, creating a detailed project plan, designing user-friendly interfaces, coding using the latest technologies, thorough testing, launching on app stores, and providing ongoing maintenance." },
            { question: "How long does it take to develop a mobile app?", answer: "A simple app typically takes 2 to 4 months, while a complex app with advanced features can take 6 to 12 months. We provide a detailed timeline after our initial consultation." },
            { question: "How much does it cost to develop a mobile app?", answer: "Costs vary depending on complexity, features, and platforms. We provide a detailed, transparent quote after understanding your specific requirements." },
            { question: "Do you provide app updates and maintenance?", answer: "Yes, we offer ongoing maintenance and update packages to ensure your app stays compatible with the latest OS versions and continues to perform at its best." },
            { question: "Can you develop apps for both iOS and Android?", answer: "Absolutely. We develop native apps for both iOS and Android, as well as cross-platform apps that work seamlessly on both from a single codebase." },
          ]} />
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let Forge9x Build the App That Transforms Your Business</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us today to discuss your mobile app project.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
