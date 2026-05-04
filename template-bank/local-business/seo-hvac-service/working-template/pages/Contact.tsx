"use client";

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Page Header */}
      <div className="bg-slate-100 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Request Support Visit</h1>
          <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
            Ready to upgrade your system or facing an emergency breakdown? Contact our mobile dispatch team today.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Get in Touch</h2>
                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                  For immediate technician deployment (system not starting, persistent leaks), please <strong className="text-slate-900">contact our dispatch directly</strong> via call or WhatsApp.
                </p>
              </div>

              <div className="space-y-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2.5 rounded shrink-0"><Phone className="w-5 h-5 text-orange-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base mb-1">Direct Hotline</h4>
                    <p className="text-slate-600 font-medium text-sm">555-0100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2.5 rounded shrink-0"><MessageCircle className="w-5 h-5 text-green-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base mb-1">WhatsApp Support</h4>
                    <p className="text-slate-600 font-medium text-xs mb-1.5">Share unit photos for fast troubleshooting.</p>
                    <a href="#" className="text-green-700 font-bold text-xs hover:underline inline-block">Message Dispatch</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2.5 rounded shrink-0"><Mail className="w-5 h-5 text-slate-700" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base mb-1">Email Inquiries</h4>
                    <p className="text-slate-600 font-medium text-sm">info@climastruct.test</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2.5 rounded shrink-0"><MapPin className="w-5 h-5 text-slate-700" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base mb-1">Office Location</h4>
                    <p className="text-slate-600 font-medium text-sm">100 Fictional Way, Suite 50<br/>Metro Center, MC 00000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow border border-slate-200 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">Service Request Form</h3>
                <p className="text-slate-500 font-medium text-xs md:text-sm mb-6">Complete the fields below and our technicians will contact you shortly.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm"
                        placeholder="555-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Service Area</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm"
                        placeholder="e.g. Westside"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Service Needed</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm">
                        <option>Heating System / Boiler Repair</option>
                        <option>Boiler Service</option>
                        <option>Air Conditioning Repair</option>
                        <option>Radiator Flushing</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Problem Description</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 focus:border-orange-500 focus:bg-white outline-none transition-all resize-none text-sm"
                      placeholder="Briefly state system model or blinking fault codes..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white font-black text-base py-3.5 rounded hover:bg-slate-800 transition-colors"
                  >
                    Send Service Request
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
