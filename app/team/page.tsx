import Link from "next/link";
import { ArrowRight, MapPin, Globe, Briefcase } from "lucide-react";
import TeamPhoto from "@/components/TeamPhoto";

const teamMembers = [
  {
    name: "Sritharan Niwethushan",
    role: "Founder & CEO",
    location: "London, United Kingdom",
    photo: "/team/niwethushan.jpg",
    initials: "SN",
    color: "#00679A",
    linkedin: "#",
    website: "https://niwethushan.com",
    bio: [
      "Sritharan Niwethushan is a technology entrepreneur, software engineer, and AI solutions architect based in London, United Kingdom. As the Founder and CEO of Forge9X, he is committed to helping businesses transform through innovative software, artificial intelligence, automation, and modern digital solutions.",
      "With over six years of experience in software engineering and enterprise technology, Niwethushan has worked across software development, machine learning, business automation, cloud technologies, digital transformation, and legal technology. His mission is simple: build technology that solves real-world problems and creates measurable business value.",
      "Before founding Forge9X, he worked as a Software Engineer at Informatics International Limited, where he contributed to enterprise software systems, AI-powered applications, predictive analytics, and business intelligence solutions. He later joined S. Satha & Co Solicitors in London, leading digital transformation initiatives, IT infrastructure, cybersecurity improvements, workflow automation, and legal technology systems.",
    ],
    also: "Co-Founder & CEO of CareWeave, a healthcare technology platform focused on connecting families with trusted caregiving services through innovative digital solutions.",
  },
  {
    name: "Gobinath Easwaranathan",
    role: "Co-Founder & CTO",
    location: "London, United Kingdom",
    photo: "/team/co-founder.jpg",
    initials: "GE",
    color: "#00679A",
    linkedin: "#",
    bio: [
      "Gobinath Easwaranathan is a network and cybersecurity specialist based in London, United Kingdom. As Co-Founder and Chief Technology Officer of Forge9X, he leads the technical architecture, infrastructure, and security strategy behind every solution the company delivers.",
      "With a background rooted in network and computer systems security, Gobinath has worked extensively in IT support, infrastructure management, and cybersecurity, ensuring the systems businesses rely on are resilient, secure, and built to scale. His focus at Forge9X is on engineering robust, secure technology that clients can trust.",
      "He currently serves as an Information Technology Support Administrator at S. Satha & Co Solicitors in London, where he manages IT infrastructure and network security. He holds a Master's degree in Network and Computer Systems Security (Merit) from the University of Greenwich, with a specialism in cybersecurity and computer forensics, alongside a Bachelor's degree in Computer Systems and Networking, also from the University of Greenwich.",
    ],
    also: "Co-Founder & CEO of CareWeave, a healthcare technology platform focused on connecting families with trusted caregiving services through innovative digital solutions.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Company / Our Team</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              The passionate technologists, strategists, and innovators behind Forge9X — building the future, one solution at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900" />
      </div>

      {/* Team Members */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
          {teamMembers.map((member, idx) => (
            <div key={member.name}>
              {/* Top: Photo + Name card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
                {/* Photo card */}
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-5">
                  <div className="relative w-full max-w-xs mx-auto lg:mx-0">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-gray-900 shadow-2xl bg-[#0a0a0a]">
                      <TeamPhoto src={member.photo} alt={member.name} initials={member.initials} color={member.color} />
                    </div>
                    {/* Decorative accent */}
                    <div
                      className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10"
                      style={{ backgroundColor: "#FFCC33", opacity: 0.3 }}
                    />
                    <div
                      className="absolute -top-3 -left-3 w-16 h-16 rounded-xl -z-10"
                      style={{ backgroundColor: "#00679A", opacity: 0.2 }}
                    />
                  </div>

                  {/* Name & role card */}
                  <div className="w-full max-w-xs mx-auto lg:mx-0 rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${member.color} 0%, #004e75 100%)` }}>
                    <div className="font-black text-xl mb-1">{member.name}</div>
                    <div className="text-sm font-semibold opacity-80 mb-3">{member.role}</div>
                    <div className="flex items-center gap-1.5 text-xs opacity-70">
                      <MapPin size={12} />
                      {member.location}
                    </div>
                    <div className="mt-4 flex gap-3">
                      <a href={member.linkedin} className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      {member.website && (
                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Globe size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2 flex flex-col gap-5 justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit" style={{ backgroundColor: "#00679A20", color: "#00679A" }}>
                    <Briefcase size={12} /> {member.role}
                  </div>
                  {member.bio.map((para, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed text-[15px]">{para}</p>
                  ))}
                  {member.also && (
                    <div className="bg-blue-500/10 border border-blue-800 rounded-2xl p-4 text-sm text-gray-300 leading-relaxed">
                      <span className="font-semibold" style={{ color: "#5EA8D9" }}>Also: </span>
                      {member.also}
                    </div>
                  )}
                </div>
              </div>

              {idx < teamMembers.length - 1 && <hr className="mt-24 border-gray-900" />}
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900" />
      </div>

      {/* Join CTA */}
      <section className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We are always looking for talented people who share our passion for technology and innovation.</p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
            View Open Positions <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
