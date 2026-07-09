import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function PricingPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isCy = lang === "cy";

  const plans = [
    {
      name: "Starter", price: "£299",
      period: isCy ? "untro" : "one-off",
      desc: isCy ? "Perffaith ar gyfer busnesau bach a chwmnïau newydd sydd angen presenoldeb digidol cryf." : "Perfect for small businesses and startups needing a strong digital presence.",
      features: isCy ? ["Hyd at 5 tudalen", "Dyluniad ymatebol", "Gosodiad SEO sylfaenol", "Ffurflen gyswllt", "1 mis o gymorth", "Integreiddio CMS (WordPress)"] : ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "1 month support", "CMS integration (WordPress)"],
      cta: isCy ? "Cychwyn Arni" : "Get Started", highlight: false,
    },
    {
      name: "Growth", price: "£599",
      period: isCy ? "untro" : "one-off",
      desc: isCy ? "Ar gyfer busnesau sy'n tyfu sydd angen gwefan gyfoethog mewn nodweddion ac offer marchnata." : "For growing businesses that need a feature-rich website and marketing tools.",
      features: isCy ? ["Hyd at 15 tudalen", "Dyluniad pwrpasol", "Optimeiddio SEO llawn", "E-fasnach (hyd at 100 cynnyrch)", "3 mis o gymorth", "Blog a CMS", "Integreiddio Google Analytics", "Integreiddio cyfryngau cymdeithasol"] : ["Up to 15 pages", "Custom design", "Full SEO optimisation", "E-commerce (up to 100 products)", "3 months support", "Blog & CMS", "Google Analytics integration", "Social media integration"],
      cta: isCy ? "Cychwyn Arni" : "Get Started", highlight: true,
    },
    {
      name: "Enterprise", price: isCy ? "Pwrpasol" : "Custom",
      period: isCy ? "dyfynbris" : "quote",
      desc: isCy ? "Datrysiadau wedi'u teilwra ar gyfer busnesau mawr, rhaglenni gwe, AI a gofynion cymhleth." : "Tailored solutions for large businesses, web apps, AI, and complex requirements.",
      features: isCy ? ["Tudalennau di-ben-draw", "Rhaglen we bwrpasol", "Integreiddio AI ac ML", "Datblygu ERP/CRM", "Datblygu ap symudol", "Rheolwr prosiect pwrpasol", "12 mis o gymorth", "Ymateb blaenoriaeth"] : ["Unlimited pages", "Custom web application", "AI & ML integration", "ERP/CRM development", "Mobile app development", "Dedicated project manager", "12 months support", "Priority response"],
      cta: isCy ? "Cysylltu â Ni" : "Contact Us", highlight: false,
    },
  ];

  const maintenance = [
    { name: "Basic", price: "£49/mo", features: isCy ? ["Copïau wrth gefn misol", "Diweddariadau diogelwch", "Monitro amser rhedeg"] : ["Monthly backups", "Security updates", "Uptime monitoring"] },
    { name: "Standard", price: "£99/mo", features: isCy ? ["Copïau wrth gefn wythnosol", "Diweddariadau diogelwch", "Optimeiddio perfformiad", "Diweddariadau cynnwys (2awr/mis)"] : ["Weekly backups", "Security updates", "Performance optimisation", "Content updates (2hrs/mo)"] },
    { name: "Premium", price: "£199/mo", features: isCy ? ["Copïau wrth gefn dyddiol", "Cymorth blaenoriaeth", "Diweddariadau cynnwys di-ben-draw", "Adroddiad SEO misol", "Optimeiddio perfformiad"] : ["Daily backups", "Priority support", "Unlimited content updates", "Monthly SEO report", "Performance optimisation"] },
  ];

  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{dict.pricing.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{dict.pricing.desc}</p>
        </div>
      </section>
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">{isCy ? "Pecynnau Datblygu Gwefannau" : "Website Development Packages"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border flex flex-col ${plan.highlight ? "shadow-xl border-blue-500 relative" : "bg-[#0a0a0a] border-gray-900"}`} style={plan.highlight ? { backgroundColor: "#00679A" } : {}}>
                {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FFCC33" }}>{dict.pricing.mostPopular}</div>}
                <div className={`text-sm font-semibold mb-2 ${plan.highlight ? "text-blue-200" : "text-blue-400"}`}>{plan.name}</div>
                <div className="text-4xl font-black mb-1 text-white">{plan.price}</div>
                <div className={`text-sm mb-4 ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>{plan.period}</div>
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-blue-100" : "text-gray-400"}`}>{plan.desc}</p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className={plan.highlight ? "text-blue-200" : "text-blue-400"} />
                      <span className={plan.highlight ? "text-white" : "text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${lang}/contact`} className={`py-3 rounded-xl font-semibold text-center transition-colors ${plan.highlight ? "bg-white hover:bg-gray-100" : "text-white hover:brightness-110"}`} style={plan.highlight ? { color: "#00679A" } : { backgroundColor: "#00679A" }}>{plan.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{isCy ? "Cynlluniau Cynnal a Chadw Gwefannau" : "Website Maintenance Plans"}</h2>
            <p className="text-gray-400 max-w-xl mx-auto">{isCy ? "Cadwch eich gwefan yn ddiogel, cyflym, a chyfredol." : "Keep your website secure, fast, and up-to-date."}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenance.map((m) => (
              <div key={m.name} className="bg-[#0a0a0a] rounded-2xl p-7 border border-gray-900">
                <div className="text-blue-400 font-semibold mb-1">{m.name}</div>
                <div className="text-2xl font-bold text-white mb-4">{m.price}</div>
                <ul className="flex flex-col gap-3">
                  {m.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle size={15} className="text-blue-400 shrink-0" />{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#111827" }}>{dict.pricing.customTitle}</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>{dict.pricing.customDesc}</p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0a0a0a] hover:bg-gray-800 transition-colors">{dict.pricing.customBtn} <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
