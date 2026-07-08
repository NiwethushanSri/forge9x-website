"use client";

import { useState } from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";

const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "United Kingdom",
    date: "", time: "09:00", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span style={{ color: "#FFCC33" }}>Touch</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Let Forge9x help you unlock the true potential of your business. Reach out and let's start building something great together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
              </div>
              {[
                { icon: <Phone size={18} />, label: "UK Office", lines: ["+44 7466 008727", "hello@forge9x.co.uk"] },
                { icon: <Phone size={18} />, label: "Sri Lanka Office", lines: ["+94 777 233 179", "info@forge9x.co.uk"] },
                { icon: <Clock size={18} />, label: "Business Hours", lines: ["Mon   Fri: 9:00 AM   6:00 PM", "Sat: 10:00 AM   2:00 PM"] },
              ].map((item) => (
                <div key={item.label} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-400 bg-blue-500/10">
                      {item.icon}
                    </div>
                    <div className="font-semibold text-white">{item.label}</div>
                  </div>
                  {item.lines.map((line) => (
                    <div key={line} className="text-sm text-gray-400 ml-12">{line}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-900 rounded-2xl p-8 border border-gray-800">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+44 ..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Country</label>
                      <select
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-800 text-white"
                      >
                        <option>United Kingdom</option>
                        <option>Sri Lanka</option>
                        <option>United States</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Select Date for a Call</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Suitable Time</label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-800 text-white"
                      >
                        {times.map((t) => <option key={t}>{t} Hours</option>)}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none bg-gray-800 text-white placeholder-gray-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110 flex items-center justify-center gap-2"
                        style={{ backgroundColor: "#00679A" }}
                      >
                        <Send size={16} /> Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
