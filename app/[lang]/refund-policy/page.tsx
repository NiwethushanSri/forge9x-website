import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function RefundPolicyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="bg-black text-gray-300 border-t border-gray-800 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-white">{dict.refund.title}</h1>
        <h2 className="text-white font-semibold text-xl">1. General Refund Policy</h2>
        <p>Forge9x is committed to providing high-quality services. We address any concerns promptly and fairly.</p>
        <h2 className="text-white font-semibold text-xl">2. Website Development Projects</h2>
        <p>Deposit payments are refundable within 14 days if work has not yet commenced. Once work has begun, fees are paid proportionally to work completed.</p>
        <h2 className="text-white font-semibold text-xl">3. Ongoing Services</h2>
        <p>Monthly maintenance plans can be cancelled with 30 days notice. Payments already made are non-refundable.</p>
        <h2 className="text-white font-semibold text-xl">4. Contact Us</h2>
        <p>To discuss refund requests, contact us at: hello@forge9x.co.uk</p>
      </div>
    </section>
  );
}
