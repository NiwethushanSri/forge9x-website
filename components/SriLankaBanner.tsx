import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SriLankaBanner() {
  return (
    <section className="bg-black py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left */}
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
              Sri Lanka
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Starting a Business<br />in Sri Lanka?
            </h2>
            <p className="text-2xl font-semibold mb-6" style={{ color: "#FFCC33" }}>
              We're Here to Help!
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              Struggling with the complexities of company formation? Let us make it simple and{" "}
              <span className="text-white font-semibold">stress-free</span>. With our team of qualified,
              experienced lawyers, we handle every step from name reservation and company registration
              to preparing all essential documents.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Start your business journey confidently with our expert guidance. Reach out today and
              let's bring your business to life in{" "}
              <span className="text-white font-semibold">Sri Lanka!</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: "#00679A" }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — image */}
          <div className="lg:w-[48%] shrink-0 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80"
                alt="Business registration in Sri Lanka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
