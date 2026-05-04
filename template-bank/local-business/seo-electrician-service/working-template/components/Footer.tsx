"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock, Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-[6px] border-amber-500">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight uppercase">
                Voltex
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional, licensed, and insured electrical contractors serving residential and commercial properties. Available 24/7 for emergency repairs.
            </p>
            <div className="flex gap-4">
              {/* Using generic placeholders instead of brand icons */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors cursor-pointer text-sm font-bold">In</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors cursor-pointer text-sm font-bold">Fb</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Residential Wiring', 'Commercial Electrical', 'Lighting Installation', 'Panel Upgrades', 'Emergency Repairs', 'Generator Setup'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 block"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {['Downtown District', 'Northside Heights', 'Westlake Valley', 'East River', 'South Metro'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate('areas')}
                    className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>100 Fictional Way,<br />Suite 50, Metro Center</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="font-bold text-white text-lg">555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:info@voltex-electric.test" className="hover:text-amber-500 transition-colors">info@voltex-electric.test</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM<br/><span className="text-amber-500 font-bold mt-1 inline-block">24/7 Priority Support</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Voltex Electrical Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <button className="hover:text-amber-500 transition-colors">Privacy Policy</button>
            <button className="hover:text-amber-500 transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
