"use client";

import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageSquare, Check } from 'lucide-react';

interface ContactProps {
  onPageChange?: (page: string) => void;
}

export default function Contact({ onPageChange }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', appointmentDate: '' });
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] text-slate-900 font-sans min-h-screen select-none select-text">
      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 select-none">
        <div className="max-w-2xl border-b border-slate-200 pb-8">
          <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">Connect With Us</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Visit Our Showroom
          </h1>
          <p className="text-sm font-light text-slate-600 mt-2 max-w-lg">
            Have questions about a collection, custom sizes, or want to book an interior layout consultation? Feel free to contact our specialists.
          </p>
        </div>
      </div>

      {/* 2. Dual Panel: Contact & Appointment Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column - Information details */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <h3 className="font-serif text-2xl font-light text-slate-950 mb-6 select-none">Contact Details</h3>
            <div className="flex flex-col gap-6 text-sm text-slate-600 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Büyükdere Cd. No: 193, Levent<br />34394 Şişli / İstanbul, Turkey
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <a href="tel:+902123456789" className="hover:text-slate-950 transition-colors font-sans tracking-wide">
                  +90 212 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="https://wa.me/902123456789" target="_blank" rel="noreferrer" className="hover:text-slate-950 transition-colors font-sans tracking-wide font-medium text-emerald-700">
                  Quick Support on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <a href="mailto:info@domofurniture.com" className="hover:text-slate-950 transition-colors font-sans">
                  info@domofurniture.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-light text-slate-950 mb-4 select-none">Opening Hours</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-600 font-light select-none">
              <div className="flex justify-between max-w-sm border-b border-slate-200/50 pb-2">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" /> Monday - Saturday
                </span>
                <span className="font-medium text-slate-800">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between max-w-sm border-b border-slate-200/50 pb-2">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" /> Sunday
                </span>
                <span className="font-medium text-slate-800">11:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Inquiry Form */}
        <div className="lg:col-span-7 select-none select-text">
          <div className="bg-white border border-slate-200/60 p-6 md:p-8 hover:border-slate-300 hover:shadow-sm transition-all duration-300">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4 animate-in fade-in duration-500 select-none">
                <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 flex items-center justify-center animate-bounce">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-light text-slate-950">Inquiry Received</h3>
                <p className="text-slate-600 font-light text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you for connecting with DOMO Showroom. One of our interior design specialists will contact you shortly to confirm your visit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[11px] font-semibold tracking-widest uppercase border border-slate-300 hover:border-slate-800 text-slate-800 px-5 py-2.5 transition-all"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 select-none select-text">
                <h3 className="font-serif text-2xl font-light text-slate-950 mb-2 select-none">
                  Book a Showroom Visit
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 focus:border-slate-800 outline-none text-slate-800 font-light text-sm px-4 py-3 transition-all rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hello@domain.com"
                      className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 focus:border-slate-800 outline-none text-slate-800 font-light text-sm px-4 py-3 transition-all rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Contact Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +90 212 ..."
                      className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 focus:border-slate-800 outline-none text-slate-800 font-light text-sm px-4 py-3 transition-all rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Desired Appointment Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 focus:border-slate-800 outline-none text-slate-800 font-light text-sm px-4 py-3 transition-all rounded-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="msg" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Your Message / Custom Inquiries
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the collections or products you're interested in..."
                    className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 focus:border-slate-800 outline-none text-slate-800 font-light text-sm px-4 py-3 transition-all rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-semibold tracking-widest uppercase py-4 shadow-sm hover:shadow-lg transition-all duration-300 mt-2 select-none"
                >
                  Submit Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
