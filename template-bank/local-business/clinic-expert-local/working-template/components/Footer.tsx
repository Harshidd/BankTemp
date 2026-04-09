"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Twitter, LinkedIn, Instagram } from './Icons';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    practice: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Our Practice' },
      { id: 'team', label: 'Our Specialists' },
      { id: 'faq', label: 'Patient FAQ' },
    ],
    services: [
      { id: 'services', label: 'Primary Care' },
      { id: 'services', label: 'Specialized Treatments' },
      { id: 'services', label: 'Diagnostic Testing' },
      { id: 'services', label: 'Preventive Wellness' },
    ],
    contact: [
      { icon: Phone, text: '800 555 0123', href: 'tel:+15550000000' },
      { icon: Mail, text: 'info@clinicexpert.com', href: 'mailto:info@clinicexpert.com' },
      { icon: MapPin, text: '123 Medical Plaza, Suite 400', href: '#' },
      { icon: Clock, text: 'Mon-Fri: 8am - 6pm', href: '#' },
    ]
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onPageChange('home')}>
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">CE</div>
              <span className="text-xl font-black tracking-tighter">CLINIC<span className="text-indigo-400">EXPERT</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing specialist clinical expertise with a commitment to patient-first care and modern medical excellence. Your health is our primary focus.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <LinkedIn className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-8">Our Practice</h4>
            <ul className="space-y-4">
              {footerLinks.practice.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onPageChange(link.id)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-8">Specialties</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onPageChange(link.id)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-8">Contact Info</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="flex items-start gap-3 group">
                    <item.icon className="w-5 h-5 text-indigo-500 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} Clinic Expert Practice Group. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>HIPAA Compliant System</span>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </footer>
  );
}
