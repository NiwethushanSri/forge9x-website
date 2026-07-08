"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const deny = () => {
    localStorage.setItem("cookie-consent", "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 border-t border-gray-700 px-4 py-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        <div className="flex items-start gap-4 flex-1">
          <div className="shrink-0">
            <span className="text-2xl font-black" style={{ color: "#FFFFFF" }}>Forge</span>
            <span className="text-2xl font-black" style={{ color: "#FFCC33" }}>9x</span>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">This website uses cookies</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use cookies to personalise content and ads, to provide social media features, and to analyse our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you&apos;ve provided to them or that they&apos;ve collected from your use of their services.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
          <button
            onClick={deny}
            className="px-6 py-2.5 rounded-full border border-gray-500 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Deny
          </button>
          <button
            onClick={accept}
            className="px-6 py-2.5 rounded-full text-gray-900 text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#FFCC33" }}
          >
            Allow all
          </button>
        </div>
      </div>
    </div>
  );
}
