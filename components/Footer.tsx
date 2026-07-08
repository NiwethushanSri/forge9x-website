import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand — wider column */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="text-3xl font-black mb-6">
              <span style={{ color: "#FFFFFF" }}>Forge</span>
              <span style={{ color: "#FFCC33" }}>9x</span>
            </div>
            <div className="flex flex-col gap-3 text-base mb-6">
              <a href="tel:+447466008727" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} /> +44 7466 008727
              </a>
              <a href="tel:+447444878193" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} /> +44 7444 878193
              </a>
              <a href="tel:+94777233179" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} /> +94 777 233 179
              </a>
              <a href="mailto:hello@forge9x.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} /> hello@forge9x.co.uk
              </a>
              <a href="mailto:info@forge9x.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} /> info@forge9x.co.uk
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" /> 140 Avon Road, Chelmsford, England, CM1 2LB
              </div>
            </div>
            <a
              href="https://g.page/r/CeoXP2uTs5uHEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base hover:text-white transition-colors"
            >
              <Image src="/icons/google.svg" alt="Google" width={16} height={16} />
              Leave Us a Google Review
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-500 font-normal mb-5 text-base">Services</h3>
            <ul className="flex flex-col gap-4">
              {[
                ["Web Development", "/services/web-development"],
                ["Web Applications", "/services/web-applications"],
                ["AI Development", "/services/ai-development"],
                ["Mobile Development", "/services/mobile-development"],
                ["SEO", "/services/seo"],
                ["Graphic Design", "/services/graphic-design"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white text-base sm:text-lg font-normal hover:text-gray-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-500 font-normal mb-5 text-base">Company</h3>
            <ul className="flex flex-col gap-4">
              {[
                ["About Us", "/about"],
                ["Portfolio", "/portfolio"],
                ["Pricing", "/pricing"],
                ["Blog", "/blog"],
                ["Careers", "/careers"],
                ["Team", "/team"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white text-base sm:text-lg font-normal hover:text-gray-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-gray-500 font-normal mb-5 text-base">Stay Updated</h3>
            <p className="text-base text-gray-400 mb-5 leading-relaxed">Get the latest insights on web development, AI, and digital growth.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-base text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-lg text-base font-semibold text-white transition-colors"
                style={{ backgroundColor: "#00679A" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-base text-gray-500">
          <p>© {new Date().getFullYear()} Forge9x. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <a
              href="https://ico.org.uk/ESDWebPages/Entry/CSN6873165"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg px-3 py-1.5 flex items-center hover:opacity-90 transition-opacity"
              title="Registered with the ICO, ref. CSN6873165"
            >
              <Image src="/ico-logo.png" alt="Information Commissioner's Office" width={64} height={35} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
