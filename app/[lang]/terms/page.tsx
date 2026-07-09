import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function TermsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isCy = lang === "cy";
  return (
    <section className="bg-black max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 py-24">
      <h1 className="text-4xl font-bold text-white mb-2">{dict.terms.title}</h1>
      <p className="text-gray-500 text-sm mb-10">{dict.terms.updated}</p>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <h2 className="text-white font-semibold text-xl">{isCy ? "1. Derbyn y Telerau" : "1. Acceptance of Terms"}</h2>
        <p>{isCy ? "Drwy gyrchu a defnyddio gwefan Forge9x, rydych chi'n cytuno i gael eich rhwymo gan y Telerau Gwasanaeth hyn." : "By accessing and using the Forge9x website, you agree to be bound by these Terms of Service."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "2. Defnydd o'r Gwasanaethau" : "2. Use of Services"}</h2>
        <p>{isCy ? "Rydych chi'n cytuno i ddefnyddio ein gwasanaethau at ddibenion cyfreithlon yn unig." : "You agree to use our services only for lawful purposes."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "3. Eiddo Deallusol" : "3. Intellectual Property"}</h2>
        <p>{isCy ? "Pob cynnwys ar y wefan hon yw eiddo Forge9x ac fe'u diogelir gan gyfreithiau hawlfraint." : "All content on this website is the property of Forge9x and is protected by copyright laws."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "4. Ymwadiad" : "4. Disclaimer"}</h2>
        <p>{isCy ? "Darperir ein gwasanaethau fel y maent heb unrhyw warant. Nid yw Forge9x yn gwarantu y bydd ein gwasanaethau'n ddi-dor neu'n ddi-wall." : "Our services are provided as-is without any warranty. Forge9x does not warrant that our services will be uninterrupted or error-free."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "5. Cysylltwch a Ni" : "5. Contact Us"}</h2>
        <p>{isCy ? "Os oes gennych gwestiynau, cysylltwch a ni yn: hello@forge9x.co.uk" : "If you have questions, contact us at: hello@forge9x.co.uk"}</p>
      </div>
    </section>
  );
}
