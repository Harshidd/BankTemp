"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  const [formData] = useState({
    name: '',
    email: '',
    inquiry: 'project',
    message: ''
  });

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
              Visit our <span className="font-serif italic">Showroom</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              Whether you have a specific project in mind or simply want to explore our material collections, our design team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Showroom Details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-widest mb-6">Contact Info</h3>
                <div className="space-y-4 text-stone-500">
                  <a href="#" className="flex items-start gap-4 hover:text-stone-900 transition-colors">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                    <span>Valikonagi Caddesi No: 42<br/>Nisantasi, Istanbul 34365</span>
                  </a>
                  <a href="tel:05550000000" className="flex items-center gap-4 hover:text-stone-900 transition-colors">
                    <Phone className="w-5 h-5 shrink-0" />
                    <span>+90 (555) 000 00 00</span>
                  </a>
                  <a href="mailto:hello@studioline.com" className="flex items-center gap-4 hover:text-stone-900 transition-colors">
                    <Mail className="w-5 h-5 shrink-0" />
                    <span>hello@studioline.com</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 hover:text-stone-900 transition-colors text-green-600">
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>WhatsApp Consult</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-widest mb-6">Hours</h3>
                <div className="space-y-4 text-stone-500 flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                  <div className="space-y-2">
                    <p className="flex justify-between w-48"><span>Mon - Fri:</span> <span>10:00 - 19:00</span></p>
                    <p className="flex justify-between w-48"><span>Saturday:</span> <span>11:00 - 18:00</span></p>
                    <p className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-stone-50 p-8 lg:p-12 border border-stone-200">
              <h3 className="text-2xl font-light text-stone-900 mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-white border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 bg-white border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Inquiry Type</label>
                  <select className="w-full p-4 bg-white border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors text-stone-900">
                    <option value="project">New Project Consultation</option>
                    <option value="materials">Material Sourcing</option>
                    <option value="showroom">Showroom Appointment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-4 bg-white border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-stone-900 text-white font-medium text-sm transition-colors hover:bg-stone-800"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
