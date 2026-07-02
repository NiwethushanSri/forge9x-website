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
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          >
            <span className="text-base font-semibold text-gray-900 group-hover:text-[#00679A] transition-colors">
              {item.question}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-gray-300 transition-all"
              style={openIndex === i ? { backgroundColor: "#00679A", borderColor: "#00679A" } : {}}
            >
              {openIndex === i
                ? <Minus size={14} className="text-white" />
                : <Plus size={14} className="text-gray-500" />
              }
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: openIndex === i ? "500px" : "0px", opacity: openIndex === i ? 1 : 0 }}
          >
            <p className="pb-5 text-gray-500 leading-relaxed text-sm pr-10">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
