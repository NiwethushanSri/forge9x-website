import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/middleware";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isCy = lang === "cy";
  return (
    <section className="bg-black max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 py-24">
      <h1 className="text-4xl font-bold text-white mb-2">{dict.privacy.title}</h1>
      <p className="text-gray-500 text-sm mb-10">{dict.privacy.updated}</p>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <h2 className="text-white font-semibold text-xl">{isCy ? "1. Yr Wybodaeth Rydym yn Ei Chasglu" : "1. Information We Collect"}</h2>
        <p>{isCy ? "Rydym yn casglu gwybodaeth rydych chi'n ei darparu'n uniongyrchol, megis pan fyddwch yn llenwi ffurflen gyswllt neu'n cysylltu a ni'n uniongyrchol." : "We collect information you provide directly to us, such as when you fill out a contact form or contact us directly."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "2. Sut Rydym yn Defnyddio Eich Gwybodaeth" : "2. How We Use Your Information"}</h2>
        <p>{isCy ? "Rydym yn defnyddio'r wybodaeth rydym yn ei chasglu i ddarparu, cynnal a gwella ein gwasanaethau, prosesu trafodion, ac ymateb i sylwadau a chwestiynau." : "We use the information we collect to provide, maintain, and improve our services, process transactions, and respond to comments and questions."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "3. Diogelwch Data" : "3. Data Security"}</h2>
        <p>{isCy ? "Rydym yn cymryd mesurau rhesymol i helpu diogelu gwybodaeth amdanoch chi rhag cael ei cholli, ei dwyn, ei chamddefnyddio neu ei chyrchu heb awdurdod." : "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorised access."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "4. Cwcis" : "4. Cookies"}</h2>
        <p>{isCy ? "Rydym yn defnyddio cwcis i olrhain gweithgaredd ar ein gwasanaeth. Gallwch gyfarwyddo eich porwr i wrthod pob cwci." : "We use cookies to track activity on our service. You can instruct your browser to refuse all cookies."}</p>
        <h2 className="text-white font-semibold text-xl">{isCy ? "5. Cysylltwch a Ni" : "5. Contact Us"}</h2>
        <p>{isCy ? "Os oes gennych gwestiynau am y Polisi Preifatrwydd hwn, cysylltwch a ni yn: hello@forge9x.co.uk" : "If you have any questions about this Privacy Policy, please contact us at: hello@forge9x.co.uk"}</p>
      </div>
    </section>
  );
}
