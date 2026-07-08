import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 mb-14">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: "#60A5FA" }}>Forge</span>
              <span style={{ color: "#FFCC33" }}>9x</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your go-to partner for cutting-edge IT solutions. We build, grow, and maintain powerful web presences for businesses of all sizes.
            </p>
            <a
              href="https://g.page/r/CeoXP2uTs5uHEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-6"
            >
              <Image src="/icons/google.svg" alt="Google" width={14} height={14} />
              Leave Us a Google Review
            </a>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+447466008727" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={14} /> +44 7466 008727
              </a>
              <a href="tel:+94777233179" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={14} /> +94 777 233 179
              </a>
              <a href="mailto:hello@forge9x.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={14} /> hello@forge9x.co.uk
              </a>
              <a href="mailto:info@forge9x.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={14} /> info@forge9x.co.uk
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=140+Avon+Road,+Chelmsford,+England,+CM1+2LB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" /> 140 Avon Road, Chelmsford, England, CM1 2LB
              </a>
            </div>
          </div>

          {/* Map */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=140+Avon+Road,+Chelmsford,+England,+CM1+2LB"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 lg:h-full min-h-[220px] rounded-2xl overflow-hidden border border-gray-700 relative block"
            title="View on Google Maps"
          >
            <iframe
              title="Forge9x UK Office Location"
              src="https://www.google.com/maps?q=140+Avon+Road,+Chelmsford,+England,+CM1+2LB&output=embed"
              className="w-full h-full pointer-events-none"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                ["Web Development", "/services/web-development"],
                ["Web Applications", "/services/web-applications"],
                ["AI Development", "/services/ai-development"],
                ["Mobile Development", "/services/mobile-development"],
                ["SEO", "/services/seo"],
                ["Graphic Design", "/services/graphic-design"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Portfolio", "/portfolio"],
                ["Pricing", "/pricing"],
                ["Blog", "/blog"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest insights on web development, AI, and digital growth.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "#00679A" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
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
