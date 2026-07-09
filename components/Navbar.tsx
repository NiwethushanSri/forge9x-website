"use client";

import Link from "next/link";
import { useState } from "react";
import { X, ChevronDown, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type NavDict = {
  services: string;
  knowledgeHub: string;
  caseStudies: string;
  insights: string;
  portfolio: string;
  careers: string;
  about: string;
  pricing: string;
  home: string;
  blog: string;
  team: string;
  contact: string;
  getInTouch: string;
  servicesList: {
    webDev: string;
    webApps: string;
    ai: string;
    mobile: string;
    seo: string;
    graphic: string;
  };
};

export default function Navbar({ lang, dict }: { lang: string; dict: NavDict }) {
  const [gridOpen, setGridOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hubOpen, setHubOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileHub, setMobileHub] = useState(false);
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const services = [
    { label: dict.servicesList.webDev, href: `/${lang}/services/web-development` },
    { label: dict.servicesList.webApps, href: `/${lang}/services/web-applications` },
    { label: dict.servicesList.ai, href: `/${lang}/services/ai-development` },
    { label: dict.servicesList.mobile, href: `/${lang}/services/mobile-development` },
    { label: dict.servicesList.seo, href: `/${lang}/services/seo` },
    { label: dict.servicesList.graphic, href: `/${lang}/services/graphic-design` },
  ];

  const knowledgeHub = [
    { label: dict.caseStudies, href: `/${lang}/case-studies` },
    { label: dict.insights, href: `/${lang}/insights` },
  ];

  const mainLinks = [
    { label: dict.portfolio, href: `/${lang}/portfolio` },
    { label: dict.careers, href: `/${lang}/careers` },
    { label: dict.about, href: `/${lang}/about` },
    { label: dict.pricing, href: `/${lang}/pricing` },
  ];

  const gridLinks = [
    { label: dict.home, href: `/${lang}` },
    { label: dict.portfolio, href: `/${lang}/portfolio` },
    { label: dict.blog, href: `/${lang}/blog` },
    { label: dict.team, href: `/${lang}/team` },
    { label: dict.contact, href: `/${lang}/contact` },
    { label: dict.careers, href: `/${lang}/careers` },
    { label: dict.about, href: `/${lang}/about` },
    { label: dict.pricing, href: `/${lang}/pricing` },
  ];

  function switchLang(newLang: string) {
    // Replace the current locale prefix in the path
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/") || `/${newLang}`;
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000`;
    startTransition(() => {
      router.push(newPath);
    });
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center gap-0.5 text-2xl sm:text-3xl lg:text-4xl font-black shrink-0 outline-none" onClick={() => setGridOpen(false)}>
              <span style={{ color: "#FFFFFF" }}>Forge</span>
              <span style={{ color: "#FFCC33" }}>9x</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 text-lg font-semibold text-gray-200 hover:text-white transition-colors whitespace-nowrap outline-none">
                  {dict.services} <ChevronDown size={18} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-[#111] rounded-xl shadow-lg border border-gray-800 pt-4 pb-2 z-50">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors outline-none" onClick={() => setServicesOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Knowledge Hub dropdown */}
              <div className="relative" onMouseEnter={() => setHubOpen(true)} onMouseLeave={() => setHubOpen(false)}>
                <button className="flex items-center gap-1 text-lg font-semibold text-gray-200 hover:text-white transition-colors whitespace-nowrap outline-none">
                  {dict.knowledgeHub} <ChevronDown size={18} />
                </button>
                {hubOpen && (
                  <div className="absolute top-full left-0 w-44 bg-[#111] rounded-xl shadow-lg border border-gray-800 pt-4 pb-2 z-50">
                    {knowledgeHub.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors outline-none" onClick={() => setHubOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-lg font-semibold text-gray-200 hover:text-white transition-colors whitespace-nowrap outline-none">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-lg overflow-hidden text-sm font-semibold">
                <button
                  onClick={() => switchLang("en")}
                  className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLang("cy")}
                  className={`px-3 py-1.5 transition-colors ${lang === "cy" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
                >
                  CY
                </button>
              </div>

              <Link href={`/${lang}/contact`} className="hidden lg:inline-flex px-6 py-3 text-base font-semibold text-white rounded-xl transition-all hover:brightness-110 whitespace-nowrap outline-none" style={{ backgroundColor: "#00679A" }}>
                {dict.getInTouch}
              </Link>

              {/* Mobile language + menu */}
              <div className="flex items-center gap-2 lg:hidden">
                <button onClick={() => switchLang(lang === "en" ? "cy" : "en")} className="px-2.5 py-1 text-xs font-bold text-white border border-gray-600 rounded-md hover:border-white transition-colors">
                  {lang === "en" ? "CY" : "EN"}
                </button>
                <button className="p-2 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors outline-none" onClick={() => setGridOpen(!gridOpen)} aria-label="Toggle menu">
                  {gridOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>

              {/* Desktop menu toggle */}
              <button className="hidden lg:block p-2 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors outline-none" onClick={() => setGridOpen(!gridOpen)} aria-label="Toggle menu">
                {gridOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {gridOpen && <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setGridOpen(false)} />}

      {/* Right slide-in panel */}
      <div className={`fixed top-0 right-0 h-full z-50 w-[90vw] sm:w-[380px] bg-[#111] flex flex-col transition-transform duration-300 ease-in-out ${gridOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end px-6 pt-6 pb-2">
          <button onClick={() => setGridOpen(false)} className="text-white hover:text-gray-400 transition-colors outline-none">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-8 py-4 flex-1 overflow-y-auto">
          {/* Services accordion */}
          <div>
            <button className="w-full flex items-center justify-between py-4 text-3xl font-bold text-white hover:text-gray-300 transition-colors border-b border-gray-800 outline-none" onClick={() => setMobileServices(!mobileServices)}>
              {dict.services}
              <ChevronDown size={24} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="flex flex-col py-2 pl-4 gap-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setGridOpen(false)} className="py-2.5 text-lg text-gray-300 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Knowledge Hub accordion */}
          <div>
            <button className="w-full flex items-center justify-between py-4 text-3xl font-bold text-white hover:text-gray-300 transition-colors border-b border-gray-800 outline-none" onClick={() => setMobileHub(!mobileHub)}>
              {dict.knowledgeHub}
              <ChevronDown size={24} className={`transition-transform ${mobileHub ? "rotate-180" : ""}`} />
            </button>
            {mobileHub && (
              <div className="flex flex-col py-2 pl-4 gap-1">
                {knowledgeHub.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setGridOpen(false)} className="py-2.5 text-lg text-gray-300 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {gridLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setGridOpen(false)} className="py-4 text-3xl font-bold text-white hover:text-gray-300 transition-colors border-b border-gray-800">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-8 py-6 border-t border-gray-800 flex items-center justify-between">
          <Link href={`/${lang}/contact`} onClick={() => setGridOpen(false)} className="px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110 inline-block" style={{ backgroundColor: "#00679A" }}>
            {dict.getInTouch}
          </Link>
          <div className="flex items-center gap-1 border border-gray-700 rounded-lg overflow-hidden text-sm font-semibold">
            <button onClick={() => switchLang("en")} className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}>EN</button>
            <button onClick={() => switchLang("cy")} className={`px-3 py-1.5 transition-colors ${lang === "cy" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}>CY</button>
          </div>
        </div>
      </div>
    </>
  );
}
