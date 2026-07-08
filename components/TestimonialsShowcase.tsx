"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Sophie Williams",
    role: "Startup Founder",
    country: "🇬🇧 UK",
    avatar: "SW",
    color: "#0891B2",
    review: "Forge9x built our entire web platform including an AI chatbot integration. The team was incredibly responsive and delivered beyond expectations. I highly recommend them to anyone looking for top-quality digital solutions!",
  },
  {
    name: "Oliver Thompson",
    role: "Restaurant Chain Director",
    country: "🇬🇧 UK",
    avatar: "OT",
    color: "#059669",
    review: "We approached Forge9x for a complete digital overhaul — website, mobile app, and CRM system. They delivered all three on time and on budget. Exceptional quality and professionalism throughout.",
  },
  {
    name: "Arjun Murugesan",
    role: "Restaurant Owner",
    country: "🇬🇧 UK",
    avatar: "AM",
    color: "#00679A",
    review: "Forge9x built our restaurant website from scratch within just 2 weeks. The design is stunning and our online bookings have increased by 60% since launch. Excellent service!",
  },
  {
    name: "James Hartley",
    role: "Digital Marketing Manager",
    country: "🇬🇧 UK",
    avatar: "JH",
    color: "#059669",
    review: "Working with Forge9x was a game changer for our company. Their SEO service boosted our organic traffic by over 300% in just 3 months. Professional, fast, and results-driven team!",
  },
  {
    name: "Sathish Kumar",
    role: "Hotel Manager",
    country: "🇬🇧 UK",
    avatar: "SK",
    color: "#FFCC33",
    review: "எங்கள் hotel க்காக reservation management system தயாரித்தனர். Online booking, room availability என அனைத்தும் automatic ஆனது. விருந்தினர்கள் மிகவும் மகிழ்ச்சியாக உள்ளனர்!",
  },
  {
    name: "Chamara Bandara",
    role: "Retail Shop Owner",
    country: "🇱🇰 Sri Lanka",
    avatar: "CB",
    color: "#7C3AED",
    review: "Forge9x team ඉතා professional. අපගේ e-commerce website ඉතා ඉක්මනින් සාදා දී, SEO optimize කර දුන්නා. Google search results හි top position ලැබිණි. ස්තූතියි!",
  },
  {
    name: "Kasun Perera",
    role: "E-commerce Entrepreneur",
    country: "🇱🇰 Sri Lanka",
    avatar: "KP",
    color: "#FFCC33",
    review: "Forge9x කණ්ඩායම අපගේ online store සම්පූර්ණයෙන්ම නව මෝස්තරයෙන් සාදා දුන්නා. ඔවුන්ගේ සේවාව ඉතා වෘත්තීයමය වූ අතර delivery ඉතා වේගවත් විය. හොඳම IT සේවාව!",
  },
  {
    name: "Priya Tharmalingam",
    role: "Boutique Owner",
    country: "🇬🇧 UK",
    avatar: "PT",
    color: "#7C3AED",
    review: "Forge9x எங்கள் வணிகத்திற்கு அருமையான website உருவாக்கி தந்தார்கள். தொழில்முறையான அணுகுமுறையும், விரைவான delivery யும் மிகவும் திருப்தி அளித்தது. மிகவும் நன்றி!",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsShowcase() {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const t = testimonials[active];
  const visible = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Real feedback from businesses across the UK and Sri Lanka who trusted Forge9x to deliver.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left — clickable list */}
          <div className="flex flex-col flex-1 divide-y divide-gray-800">
            {visible.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left py-5 transition-all group outline-none ${active === i ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <p className={`text-xl md:text-2xl font-bold leading-snug transition-colors ${active === i ? "text-white" : "text-gray-300"}`}>
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">{item.role} · {item.country}</p>
              </button>
            ))}
            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="text-left py-5 text-gray-500 hover:text-white transition-colors text-base font-medium outline-none"
              >
                + {testimonials.length - 4} more
              </button>
            )}

            {/* CTA */}
            <div className="pt-8">
              <a
                href="https://g.page/r/CeoXP2uTs5uHEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-600 text-white font-semibold text-base hover:border-white transition-colors"
              >
                <Image src="/icons/google.svg" alt="Google" width={18} height={18} />
                Leave Us a Google Review
              </a>
            </div>
          </div>

          {/* Right — review display */}
          <div className="lg:w-[55%] shrink-0 w-full">
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 sm:p-10 min-h-[280px] sm:min-h-[360px] flex flex-col justify-between transition-all duration-300">
              <div>
                <Stars />
                <p className="text-white text-xl md:text-2xl leading-relaxed font-medium mb-8">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-base">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role} · {t.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
