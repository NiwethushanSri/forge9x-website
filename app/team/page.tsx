import Link from "next/link";
import { ArrowRight, MapPin, Globe, GraduationCap, Briefcase } from "lucide-react";
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
    bio: [
      "Sritharan Niwethushan is a technology entrepreneur, software engineer, and AI solutions architect based in London, United Kingdom. As the Founder and CEO of Forge9X, he is committed to helping businesses transform through innovative software, artificial intelligence, automation, and modern digital solutions.",
      "With over six years of experience in software engineering and enterprise technology, Niwethushan has worked across software development, machine learning, business automation, cloud technologies, digital transformation, and legal technology. His mission is simple: build technology that solves real-world problems and creates measurable business value.",
      "Before founding Forge9X, he worked as a Software Engineer at Informatics International Limited, where he contributed to enterprise software systems, AI-powered applications, predictive analytics, and business intelligence solutions. He later joined S. Satha & Co Solicitors in London, leading digital transformation initiatives, IT infrastructure, cybersecurity improvements, workflow automation, and legal technology systems.",
    ],
    expertise: [
      "Artificial Intelligence (AI)",
      "Custom Software Development",
      "Web & Mobile Application Development",
      "Business Process Automation",
      "Enterprise Systems",
      "Cloud Solutions",
      "Cybersecurity",
      "UI/UX Design",
      "Digital Transformation",
      "IT Consultancy",
    ],
    education: [
      {
        degree: "Master of Science (MSc) – Advanced Computer Science",
        school: "Swansea University, United Kingdom",
        desc: "Advanced postgraduate studies focusing on intelligent systems, modern computing technologies, software engineering, and advanced computer science research.",
      },
      {
        degree: "Bachelor of Engineering (Honours) – Software Engineering",
        school: "University of Westminster, United Kingdom",
        desc: "Graduated with a strong academic foundation in software engineering, software architecture, databases, enterprise application development, networking, system analysis, web technologies, and modern software engineering practices.",
      },
    ],
    vision:
      "At Forge9X, Niwethushan believes technology should do more than look impressive — it should improve efficiency, simplify operations, create opportunities, and empower businesses to grow. Every solution is designed with scalability, innovation, security, and long-term success in mind. His vision is to establish Forge9X as a globally recognised technology company delivering intelligent software solutions that help organisations embrace the future with confidence.",
    also: "Co-Founder & CEO of CareWeave, a healthcare technology platform focused on connecting families with trusted caregiving services through innovative digital solutions.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Company / Our Team</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span style={{ color: "#FFCC33" }}>Team</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              The passionate technologists, strategists, and innovators behind Forge9X — building the future, one solution at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
          {teamMembers.map((member, idx) => (
            <div key={member.name}>
              {/* Top: Photo + Name card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
                {/* Photo card */}
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-5">
                  <div className="relative w-full max-w-xs mx-auto lg:mx-0">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
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
                      <a href="https://niwethushan.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Globe size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2 flex flex-col gap-5 justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit" style={{ backgroundColor: "#00679A20", color: "#00679A" }}>
                    <Briefcase size={12} /> Founder & Chief Executive Officer
                  </div>
                  {member.bio.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{para}</p>
                  ))}
                  {member.also && (
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold" style={{ color: "#00679A" }}>Also: </span>
                      {member.also}
                    </div>
                  )}
                </div>
              </div>

              {/* Expertise + Education + Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Expertise */}
                <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: "#00679A" }}>✦</span>
                    Areas of Expertise
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {member.expertise.map((e) => (
                      <li key={e} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#FFCC33" }} />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: "#00679A" }}>
                      <GraduationCap size={14} />
                    </span>
                    Education
                  </h3>
                  <div className="flex flex-col gap-6">
                    {member.education.map((ed) => (
                      <div key={ed.degree} className="border-l-2 pl-4" style={{ borderColor: "#00679A" }}>
                        <div className="font-semibold text-gray-900 text-sm mb-1">{ed.degree}</div>
                        <div className="text-xs font-medium mb-2" style={{ color: "#FFCC33" }}>{ed.school}</div>
                        <p className="text-xs text-gray-500 leading-relaxed">{ed.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vision */}
                <div className="rounded-3xl p-7 text-white" style={{ background: "linear-gradient(135deg, #00679A 0%, #004e75 100%)" }}>
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-xs">★</span>
                    Vision
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{member.vision}</p>
                </div>
              </div>

              {idx < teamMembers.length - 1 && <hr className="mt-24 border-gray-100" />}
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">We are always looking for talented people who share our passion for technology and innovation.</p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
            View Open Positions <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
