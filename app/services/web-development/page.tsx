import Link from "next/link";
import { ArrowRight, Globe, ShoppingCart, FileText, Layout, Code2, Search } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import TechMarquee from "@/components/TechMarquee";

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Custom Web Development",
    desc: "We specialise in building custom websites tailored to meet the unique needs of your business. Whether you need a simple informational site or a complex web application, our developers deliver outstanding results that align with your goals.",
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Commerce Web Development",
    desc: "Boost your online sales with our e-commerce web development services. We create secure, user-friendly, and feature-rich platforms that deliver an exceptional shopping experience while streamlining your operations.",
  },
  {
    icon: <FileText size={24} />,
    title: "Back-end CMS Development",
    desc: "Our CMS development services empower you to manage your website's content with ease. We offer custom CMS solutions and work with WordPress, Joomla, and Drupal, giving you complete control over your website.",
  },
  {
    icon: <Layout size={24} />,
    title: "Mobile Friendly Responsive Design",
    desc: "In today's mobile-first world, having a responsive website is crucial. We ensure your website is fully optimised for all devices   desktops, tablets, and smartphones   providing a seamless user experience.",
  },
  {
    icon: <Globe size={24} />,
    title: "Web Application Development",
    desc: "We build robust, scalable web applications customised to meet your business's specific needs. From customer portals to custom CRM systems, our web applications enhance efficiency and productivity.",
  },
  {
    icon: <Search size={24} />,
    title: "SEO Friendly Development",
    desc: "We build websites that are optimised for search engines from the ground up. Clean code, fast loading times, and mobile optimisation help your website rank higher and attract more traffic.",
  },
];


export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / Web Development</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Development <span style={{ color: "#FFCC33" }}>Services</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Going digital without a website? A big no-no! Your website is the core of your digital presence. With Forge9x's expert web development, your business can operate at full capacity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: "#00679A" }}
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive solutions covering every aspect of your digital presence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
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

      {/* Technologies */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Technologies We Work With</h2>
          <p className="text-gray-500">Industry-leading tools and platforms to build your digital presence.</p>
        </div>
        <TechMarquee />
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { question: "What is custom web development?", answer: "Custom web development is the creation of a website tailored specifically to your business needs, rather than using a pre-built template. It gives you full control over design, functionality, and scalability." },
            { question: "How long does it take to develop a website?", answer: "Timelines vary based on complexity. A simple site may take 2 to 4 weeks, while a complex web application can take 3 to 6 months. We provide a detailed timeline during our initial consultation." },
            { question: "What is responsive web design?", answer: "Responsive web design ensures your website looks and works perfectly on all devices including desktops, tablets, and smartphones by adapting its layout to the screen size." },
            { question: "Do you offer website maintenance and support?", answer: "Yes! We offer ongoing maintenance and support packages to keep your site secure, up-to-date, and performing at its best." },
            { question: "What platforms do you use for CMS development?", answer: "We work with WordPress, Joomla, Drupal, and custom-built CMS solutions depending on your specific requirements." },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let Forge9x Build Your Perfect Website</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us today to discuss your web development needs and get a free quote.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white transition-colors hover:bg-gray-100"
            style={{ color: "#00679A" }}
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
