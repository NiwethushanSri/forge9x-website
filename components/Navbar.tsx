"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Web Development",    href: "/services/web-development" },
  { label: "Web Applications",   href: "/services/web-applications" },
  { label: "AI Development",     href: "/services/ai-development" },
  { label: "Mobile Development", href: "/services/mobile-development" },
  { label: "SEO",                href: "/services/seo" },
  { label: "Graphic Design",     href: "/services/graphic-design" },
];

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Blog",      href: "/blog" },
  { label: "Careers",   href: "/careers" },
  { label: "Team",      href: "/team" },
  { label: "About",     href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 text-2xl sm:text-3xl lg:text-4xl font-black shrink-0 outline-none" onClick={() => setMenuOpen(false)}>
            <span style={{ color: "#00679A" }}>Forge</span>
            <span style={{ color: "#FFCC33" }}>9x</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            <Link href="/" className="text-lg font-semibold text-gray-200 hover:text-[#5EA8D9] transition-colors whitespace-nowrap outline-none">
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-lg font-semibold text-gray-200 hover:text-[#5EA8D9] transition-colors whitespace-nowrap outline-none">
                Services <ChevronDown size={18} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-gray-800 rounded-xl shadow-lg border border-gray-700 pt-4 pb-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-gray-700 hover:text-[#5EA8D9] transition-colors outline-none"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-semibold text-gray-200 hover:text-[#5EA8D9] transition-colors whitespace-nowrap outline-none">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 text-lg font-semibold text-white rounded-xl transition-all hover:brightness-110 whitespace-nowrap outline-none"
              style={{ backgroundColor: "#00679A" }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors ml-2 outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-black shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-3 gap-1">
            <Link href="/" className="py-3 px-2 text-base font-semibold text-gray-200 border-b border-gray-800 hover:text-[#5EA8D9] outline-none" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <button
              className="flex items-center justify-between py-3 px-2 text-base font-semibold text-gray-200 border-b border-gray-800 hover:text-[#5EA8D9] w-full text-left outline-none"
              onClick={() => setMobileServices(!mobileServices)}
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="bg-gray-800 rounded-xl mb-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2.5 px-4 text-sm text-gray-300 hover:text-[#5EA8D9] border-b border-gray-700 last:border-0 outline-none"
                    onClick={() => setMenuOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-2 text-base font-semibold text-gray-200 border-b border-gray-800 hover:text-[#5EA8D9] outline-none"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-3 mb-2 py-3 text-center text-base font-bold text-white rounded-xl outline-none"
              style={{ backgroundColor: "#00679A" }}
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
