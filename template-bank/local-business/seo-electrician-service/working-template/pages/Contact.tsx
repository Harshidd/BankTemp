"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertTriangle } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 border-b-8 border-amber-500">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Get in touch for a free estimate, or call our emergency hotline for immediate assistance 24/7.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          {/* Emergency Banner */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-red-700">
              <div className="bg-red-100 p-3 rounded-full animate-pulse">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-1">Experiencing an Electrical Emergency?</h3>
                <p className="font-medium text-sm">Sparks, smoke, or sudden complete power loss? Do not use the form. Call us immediately.</p>
              </div>
            </div>
            <a href="tel:555-0199" className="bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg hover:bg-red-700 transition-colors shrink-0 shadow-lg shadow-red-600/20 whitespace-nowrap">
              Call 555-0199
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Fill out the form to request a quote or schedule a standard service visit. For faster responses during business hours, try our WhatsApp line.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full shrink-0"><Phone className="w-6 h-6 text-amber-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">Phone</h4>
                    <p className="text-slate-600 font-medium">555-0199</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full shrink-0"><MessageCircle className="w-6 h-6 text-green-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">WhatsApp</h4>
                    <p className="text-slate-600 font-medium">Message us photos of your issue</p>
                    <a href="#" className="text-green-600 font-bold text-sm hover:underline mt-1 inline-block">Start Chat</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0"><Mail className="w-6 h-6 text-blue-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-600 font-medium">info@voltex-electric.test</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-3 rounded-full shrink-0"><MapPin className="w-6 h-6 text-slate-700" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">Main Office</h4>
                    <p className="text-slate-600 font-medium">100 Fictional Way, Suite 50<br/>Metro Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-6">Request a Free Quote</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Needed</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all">
                      <option>Residential Repair</option>
                      <option>Commercial Service</option>
                      <option>Panel Upgrade</option>
                      <option>Lighting Installation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Project Details</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                      placeholder="Please describe the issue or project..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white font-black text-lg py-4 rounded-md hover:bg-slate-800 transition-colors shadow-lg"
                  >
                    Send Request
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
