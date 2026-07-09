import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

type FooterDict = {
  services: string;
  company: string;
  stayUpdated: string;
  stayUpdatedDesc: string;
  emailPlaceholder: string;
  subscribe: string;
  privacy: string;
  terms: string;
  refund: string;
  rights: string;
  leaveReview: string;
};

type NavDict = {
  servicesList: {
    webDev: string;
    webApps: string;
    ai: string;
    mobile: string;
    seo: string;
    graphic: string;
  };
  portfolio: string;
  about: string;
  pricing: string;
  blog: string;
  careers: string;
  team: string;
  contact: string;
};

export default function Footer({
  lang,
  dict,
  nav,
}: {
  lang: string;
  dict: FooterDict;
  nav: NavDict;
}) {
  const l = `/${lang}`;
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="text-3xl font-black mb-6">
              <span style={{ color: "#FFFFFF" }}>Forge</span>
              <span style={{ color: "#FFCC33" }}>9x</span>
            </div>
            <div className="flex flex-col gap-3 text-base mb-6">
              <a href="tel:+447466008727" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={15} /> +44 7466 008727</a>
              <a href="tel:+447444878193" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={15} /> +44 7444 878193</a>
              <a href="tel:+94777233179" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={15} /> +94 777 233 179</a>
              <a href="mailto:hello@forge9x.co.uk" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={15} /> hello@forge9x.co.uk</a>
              <a href="mailto:info@forge9x.co.uk" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={15} /> info@forge9x.co.uk</a>
              <div className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> 140 Avon Road, Chelmsford, England, CM1 2LB</div>
            </div>
            <a href="https://g.page/r/CeoXP2uTs5uHEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base hover:text-white transition-colors">
              <Image src="/icons/google.svg" alt="Google" width={16} height={16} />
              {dict.leaveReview}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-500 font-normal mb-5 text-base">{dict.services}</h3>
            <ul className="flex flex-col gap-4">
              {[
                [nav.servicesList.webDev, `${l}/services/web-development`],
                [nav.servicesList.webApps, `${l}/services/web-applications`],
                [nav.servicesList.ai, `${l}/services/ai-development`],
                [nav.servicesList.mobile, `${l}/services/mobile-development`],
                [nav.servicesList.seo, `${l}/services/seo`],
                [nav.servicesList.graphic, `${l}/services/graphic-design`],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-white text-base sm:text-lg font-normal hover:text-gray-300 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-500 font-normal mb-5 text-base">{dict.company}</h3>
            <ul className="flex flex-col gap-4">
              {[
                [nav.about, `${l}/about`],
                [nav.portfolio, `${l}/portfolio`],
                [nav.pricing, `${l}/pricing`],
                [nav.blog, `${l}/blog`],
                [nav.careers, `${l}/careers`],
                [nav.team, `${l}/team`],
                [nav.contact, `${l}/contact`],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-white text-base sm:text-lg font-normal hover:text-gray-300 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-gray-500 font-normal mb-5 text-base">{dict.stayUpdated}</h3>
            <p className="text-base text-gray-400 mb-5 leading-relaxed">{dict.stayUpdatedDesc}</p>
            <form className="flex flex-col gap-3">
              <input type="email" placeholder={dict.emailPlaceholder} className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-base text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
              <button type="submit" className="px-4 py-3 rounded-lg text-base font-semibold text-white transition-colors" style={{ backgroundColor: "#00679A" }}>
                {dict.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-base text-gray-500">
          <p>© {new Date().getFullYear()} Forge9x. {dict.rights}</p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link href={`${l}/privacy`} className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href={`${l}/terms`} className="hover:text-white transition-colors">{dict.terms}</Link>
            <Link href={`${l}/refund-policy`} className="hover:text-white transition-colors">{dict.refund}</Link>
            <a href="https://ico.org.uk/ESDWebPages/Entry/CSN6873165" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg px-3 py-1.5 flex items-center hover:opacity-90 transition-opacity" title="Registered with the ICO, ref. CSN6873165">
              <Image src="/ico-logo.png" alt="Information Commissioner's Office" width={64} height={35} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
