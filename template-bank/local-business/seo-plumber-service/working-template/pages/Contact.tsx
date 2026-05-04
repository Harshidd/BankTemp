"use client";

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, AlertTriangle } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-24 border-b-8 border-sky-600">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contact FlowRight Plumbing</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Schedule a service visit, request an estimate, or call our 24/7 hotline for immediate emergency assistance.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          {/* Emergency Banner */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5 text-red-700">
              <div className="bg-red-100 p-4 rounded-full animate-pulse shrink-0">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-1">Active Leak or Burst Pipe?</h3>
                <p className="font-medium text-red-800">Do not use the contact form. Shut off your main water valve and call us immediately.</p>
              </div>
            </div>
            <a href="tel:+15559876543" className="bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg hover:bg-red-700 transition-colors shrink-0 shadow-lg shadow-red-600/20 whitespace-nowrap">
              Call (555) 987-6543
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Fill out the form to request a quote or schedule a standard service visit. For faster responses during business hours, send us a photo of your plumbing issue via WhatsApp.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-4 rounded-full shrink-0"><Phone className="w-6 h-6 text-sky-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Phone (24/7)</h4>
                    <p className="text-slate-600 font-medium">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-4 rounded-full shrink-0"><MessageCircle className="w-6 h-6 text-green-600" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">WhatsApp</h4>
                    <p className="text-slate-600 font-medium mb-1">Send us photos of the issue</p>
                    <a href="#" className="text-green-600 font-bold text-sm hover:underline inline-block">Start Chat</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-4 rounded-full shrink-0"><Mail className="w-6 h-6 text-slate-700" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Email</h4>
                    <p className="text-slate-600 font-medium">info@flowrightplumbing.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-4 rounded-full shrink-0"><MapPin className="w-6 h-6 text-slate-700" /></div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Main Office</h4>
                    <p className="text-slate-600 font-medium">1244 Industrial Parkway, Suite 100<br/>Cityname, State 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 md:p-10">
                <h3 className="text-2xl font-black text-slate-900 mb-8">Request a Service Visit</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Needed</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all">
                      <option>General Plumbing Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Service</option>
                      <option>Pipe Installation</option>
                      <option>Commercial Plumbing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Describe the Issue</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                      placeholder="Please provide details about the plumbing issue..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-sky-600 text-white font-black text-lg py-4 rounded-md hover:bg-sky-700 transition-colors shadow-lg"
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
