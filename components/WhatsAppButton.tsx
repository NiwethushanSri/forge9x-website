"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "447466008727"; // UK number without + or spaces
const MESSAGE = encodeURIComponent("Hi Forge9x! I'd like to discuss a project.");

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChat = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`, "_blank");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-11 h-11 rounded-md bg-black flex items-center justify-center shadow-lg hover:brightness-125 transition-all active:scale-95"
        >
          <ArrowUp size={20} color="white" />
        </button>
      )}

      {/* Popup card */}
      {open && (
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 w-64 sm:w-72 overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="flex items-center gap-3 p-4" style={{ backgroundColor: "#25D366" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <WhatsAppIcon size={22} color="white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-bold text-sm">Forge9x</div>
              <div className="flex items-center gap-1.5 text-green-100 text-xs">
                <span className="w-2 h-2 rounded-full bg-white inline-block" />
                Typically replies instantly
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4 bg-[#0b141a]">
            <div className="bg-gray-800 rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
              <p className="text-gray-200 text-sm leading-relaxed">
                👋 Hi there! Welcome to <strong>Forge9x</strong>.<br />
                How can we help you today?
              </p>
              <div className="text-gray-500 text-xs mt-1 text-right">Just now</div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-3 bg-[#0b141a] border-t border-white/5">
            <button
              onClick={handleChat}
              className="w-full py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon size={18} color="white" />
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 relative"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <X size={24} color="white" />
        ) : (
          <WhatsAppIcon size={28} color="white" />
        )}
        {/* Pulse ring */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-40"
            style={{ backgroundColor: "#25D366" }}
          />
        )}
      </button>
    </div>
  );
}

function WhatsAppIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.105.549 4.084 1.51 5.8L.057 23.428a.75.75 0 0 0 .925.926l5.687-1.46A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.497-5.228-1.368l-.374-.215-3.878.997 1.016-3.78-.237-.389A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
