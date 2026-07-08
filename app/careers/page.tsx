import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, CheckCircle } from "lucide-react";

const openings = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote / UK",
    dept: "Engineering",
    desc: "We're looking for an experienced Full Stack Developer to build and maintain web applications using React, Node.js, and PostgreSQL.",
    requirements: ["3+ years of experience with React and Node.js", "Experience with TypeScript", "Familiarity with cloud platforms (AWS/GCP)", "Strong problem-solving skills"],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote / UK",
    dept: "Design",
    desc: "Join our design team to create beautiful, intuitive interfaces for our clients' websites and web applications.",
    requirements: ["Proficiency in Figma or Adobe XD", "Portfolio demonstrating strong UI/UX skills", "Understanding of responsive design principles", "Excellent communication skills"],
  },
  {
    title: "SEO Specialist",
    type: "Full-time",
    location: "Remote",
    dept: "Marketing",
    desc: "Help our clients rank higher in search engines through data-driven SEO strategies, content planning, and link building campaigns.",
    requirements: ["2+ years of SEO experience", "Proficiency with SEMrush, Ahrefs, or similar tools", "Strong analytical and writing skills", "Track record of improving organic rankings"],
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    dept: "AI",
    desc: "Develop cutting-edge AI solutions including NLP models, image recognition systems, and intelligent automation tools for our clients.",
    requirements: ["Experience with Python and ML frameworks (TensorFlow/PyTorch)", "Knowledge of NLP and computer vision", "Experience deploying ML models to production", "Strong mathematics background"],
  },
];

const perks = [
  "Flexible remote-first work environment",
  "Competitive salary and performance bonuses",
  "Professional development budget",
  "Latest tools and technology",
  "Collaborative and innovative culture",
  "Opportunity to work on diverse, exciting projects",
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Forge9x
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're a growing team of passionate technologists, designers, and strategists. If you love building things that make a real difference, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900" />
      </div>

      {/* Perks */}
      <section className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Forge9x?</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At Forge9x, we believe our team is our greatest asset. We invest in our people, foster creativity, and build a culture where great ideas thrive.
              </p>
              <ul className="flex flex-col gap-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={18} className="text-blue-400 shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/office-woman.jpg"
                alt="Forge9x team at work"
                className="w-full aspect-[4/3] lg:aspect-auto lg:h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900" />
      </div>

      {/* Open Positions */}
      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Join our growing team and help us deliver exceptional digital solutions.</p>
          </div>
          <div className="flex flex-col gap-5">
            {openings.map((job) => (
              <div key={job.title} className="bg-[#0a0a0a] rounded-2xl p-7 border border-gray-900">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">{job.dept}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((r) => (
                        <span key={r} className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">{r}</span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white text-sm hover:brightness-110 transition-all"
                    style={{ backgroundColor: "#00679A" }}
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#FFCC33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#111827" }}>Don't See Your Role?</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#1f2937" }}>We're always open to hearing from talented people. Send us your CV and let us know how you can contribute.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0a0a0a] hover:bg-gray-800 transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
