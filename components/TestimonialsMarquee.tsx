"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Murugesan",
    role: "Restaurant Owner",
    country: "🇬🇧 UK",
    avatar: "AM",
    color: "#00679A",
    review:
      "Forge9x built our restaurant website from scratch within just 2 weeks. The design is stunning and our online bookings have increased by 60% since launch. Excellent service!",
  },
  {
    name: "Kasun Perera",
    role: "E-commerce Entrepreneur",
    country: "🇱🇰 Sri Lanka",
    avatar: "KP",
    color: "#FFCC33",
    review:
      "Forge9x කණ්ඩායම අපගේ online store සම්පූර්ණයෙන්ම නව මෝස්තරයෙන් සාදා දුන්නා. ඔවුන්ගේ සේවාව ඉතා වෘත්තීයමය වූ අතර delivery ඉතා වේගවත් විය. හොඳම IT සේවාව!",
  },
  {
    name: "Priya Tharmalingam",
    role: "Boutique Owner",
    country: "🇬🇧 UK",
    avatar: "PT",
    color: "#7C3AED",
    review:
      "Forge9x எங்கள் வணிகத்திற்கு அருமையான website உருவாக்கி தந்தார்கள். தொழில்முறையான அணுகுமுறையும், விரைவான delivery யும் மிகவும் திருப்தி அளித்தது. மிகவும் நன்றி!",
  },
  {
    name: "James Hartley",
    role: "Digital Marketing Manager",
    country: "🇬🇧 UK",
    avatar: "JH",
    color: "#059669",
    review:
      "Working with Forge9x was a game changer for our company. Their SEO service boosted our organic traffic by over 300% in just 3 months. Professional, fast, and results-driven team!",
  },
  {
    name: "Dinesh Rajasekaran",
    role: "Café Owner",
    country: "🇬🇧 UK",
    avatar: "DR",
    color: "#DC2626",
    review:
      "Forge9x எங்கள் café க்காக mobile app ஒன்றை தயாரித்து தந்தனர். வாடிக்கையாளர்கள் இப்போது app மூலம் order செய்கிறார்கள். விற்பனை 40% அதிகரித்துள்ளது. சிறந்த team!",
  },
  {
    name: "Nimal Wickramasinghe",
    role: "Logistics Business Owner",
    country: "🇱🇰 Sri Lanka",
    avatar: "NW",
    color: "#00679A",
    review:
      "Forge9x අපගේ logistics management system සාදා දුන්නා. Order tracking, delivery management සියල්ල automatic කරගත්තා. Business efficiency 50% වැඩිවුණා. ඉතා හොඳ!",
  },
  {
    name: "Sophie Williams",
    role: "Startup Founder",
    country: "🇬🇧 UK",
    avatar: "SW",
    color: "#0891B2",
    review:
      "Forge9x built our entire web platform including an AI chatbot integration. The team was incredibly responsive and delivered beyond expectations. I highly recommend them to anyone looking for top-quality digital solutions!",
  },
  {
    name: "Sathish Kumar",
    role: "Hotel Manager",
    country: "🇬🇧 UK",
    avatar: "SK",
    color: "#FFCC33",
    review:
      "எங்கள் hotel க்காக reservation management system தயாரித்தனர். Online booking, room availability என அனைத்தும் automatic ஆனது. விருந்தினர்கள் மிகவும் மகிழ்ச்சியாக உள்ளனர்!",
  },
  {
    name: "Chamara Bandara",
    role: "Retail Shop Owner",
    country: "🇱🇰 Sri Lanka",
    avatar: "CB",
    color: "#7C3AED",
    review:
      "Forge9x team ඉතා professional. අපගේ e-commerce website ඉතා ඉක්මනින් සාදා දී, SEO optimize කර දුන්නා. Google search results හි top position ලැබිණි. ස්තූතියි!",
  },
  {
    name: "Oliver Thompson",
    role: "Restaurant Chain Director",
    country: "🇬🇧 UK",
    avatar: "OT",
    color: "#059669",
    review:
      "We approached Forge9x for a complete digital overhaul — website, mobile app, and CRM system. They delivered all three on time and on budget. Exceptional quality and professionalism throughout.",
  },
];

const doubled = [...testimonials, ...testimonials];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <div className="relative w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #000000, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #000000, transparent)" }} />

      <div className="flex gap-6" style={{ animation: "marquee 60s linear infinite", width: "max-content" }}>
        {doubled.map((t, i) => (
          <div
            key={i}
            className="bg-black rounded-2xl border border-gray-800 p-6 flex flex-col gap-3"
            style={{ width: "min(320px, 85vw)", flexShrink: 0 }}
          >
            <Stars />
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              &ldquo;{t.review}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-2 pt-4 border-t border-gray-800">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role} · {t.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
