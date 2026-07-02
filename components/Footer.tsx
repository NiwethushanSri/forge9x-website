import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: "#60A5FA" }}>Forge</span>
              <span style={{ color: "#FFCC33" }}>9x</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your go-to partner for cutting-edge IT solutions. We build, grow, and maintain powerful web presences for businesses of all sizes.
            </p>
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
            </div>
          </div>

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
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
