import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function TermsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="bg-black text-gray-300 border-t border-gray-800 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-white">{dict.terms.title}</h1>
        <h2 className="text-white font-semibold text-xl">1. Acceptance of Terms</h2>
        <p>By accessing and using the Forge9x website, you agree to be bound by these Terms of Service.</p>
        <h2 className="text-white font-semibold text-xl">2. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes.</p>
        <h2 className="text-white font-semibold text-xl">3. Intellectual Property</h2>
        <p>All content on this website is the property of Forge9x and is protected by copyright laws.</p>
        <h2 className="text-white font-semibold text-xl">4. Disclaimer</h2>
        <p>Our services are provided as-is without any warranty. Forge9x does not warrant that our services will be uninterrupted or error-free.</p>
        <h2 className="text-white font-semibold text-xl">5. Contact Us</h2>
        <p>If you have questions, contact us at: hello@forge9x.co.uk</p>
      </div>
    </section>
  );
}
