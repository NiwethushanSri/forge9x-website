"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="divide-y divide-gray-800 border-t border-gray-800">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-7 text-left gap-6 group"
          >
            <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#5EA8D9] transition-colors">
              {item.question}
            </span>
            <span
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-700 transition-all"
              style={openIndex === i ? { backgroundColor: "#00679A", borderColor: "#00679A" } : {}}
            >
              {openIndex === i
                ? <Minus size={18} className="text-white" />
                : <Plus size={18} className="text-gray-400" />
              }
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: openIndex === i ? "600px" : "0px", opacity: openIndex === i ? 1 : 0 }}
          >
            <p className="pb-7 text-gray-400 leading-relaxed text-lg pr-16">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
