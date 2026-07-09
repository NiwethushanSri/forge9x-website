import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function RefundPolicyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isCy = lang === "cy";
  return (
    <section className="bg-black max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 py-24">
      <h1 className="text-4xl font-bold text-white mb-2">{dict.refund.title}</h1>
      <p className="text-gray-500 text-sm mb-10">{dict.refund.updated}</p>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <h2 className="text-white font-semibold text-xl">{isCy ? "1. Polisi Ad-daliad Cyffredinol" : "1. General Refund Policy"}</h2>
        <p>{isCy ? "Mae Forge9x yn ymroddedig i ddarparu gwasanaethau o ansawdd uchel. Rydym yn mynd i'r afael ag unrhyw bryderon yn brydlon ac yn deg." : "Forge9x is committed to providing high-quality services. We address any concerns promptly and fairly."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "2. Prosiectau Datblygu Gwefannau" : "2. Website Development Projects"}</h2>
        <p>{isCy ? "Mae taliadau blaendal yn ad-daladwy o fewn 14 diwrnod os nad yw'r gwaith wedi dechrau. Unwaith y bydd gwaith wedi dechrau, telir ffioedd yn ol cyfran y gwaith a gwblhawyd." : "Deposit payments are refundable within 14 days if work has not yet commenced. Once work has begun, fees are paid proportionally to work completed."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "3. Gwasanaethau Parhaus" : "3. Ongoing Services"}</h2>
        <p>{isCy ? "Gellir canslo cynlluniau cynnal a chadw misol gyda rhybudd o 30 diwrnod. Ni ad-delir taliadau a wnaed eisoes." : "Monthly maintenance plans can be cancelled with 30 days notice. Payments already made are non-refundable."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "4. Cysylltwch a Ni" : "4. Contact Us"}</h2>
        <p>{isCy ? "I drafod ceisiadau ad-daliad, cysylltwch a ni yn: hello@forge9x.co.uk" : "To discuss refund requests, contact us at: hello@forge9x.co.uk"}</p>
      </div>
    </section>
  );
}
