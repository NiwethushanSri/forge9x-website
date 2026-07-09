import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="bg-black text-gray-300 border-t border-gray-800 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-white">{dict.privacy.title}</h1>
        <h2 className="text-white font-semibold text-xl">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form or contact us directly.</p>
        <h2 className="text-white font-semibold text-xl">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and respond to comments and questions.</p>
        <h2 className="text-white font-semibold text-xl">3. Data Security</h2>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorised access.</p>
        <h2 className="text-white font-semibold text-xl">4. Cookies</h2>
        <p>We use cookies to track activity on our service. You can instruct your browser to refuse all cookies.</p>
        <h2 className="text-white font-semibold text-xl">5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: hello@forge9x.co.uk</p>
      </div>
    </section>
  );
}
