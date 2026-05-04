"use client";

import React from 'react';
import { Phone, MapPin, Flame, Clock, MessageCircle, Settings2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t-[4px] border-orange-500 font-sans">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-1.5 rounded">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">
                ClimaNova
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Your dedicated experts in home climate control. Providing reliable, guaranteed boiler, heater, and AC installation, repair, and troubleshooting.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer text-xs font-bold text-slate-400">In</div>
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer text-xs font-bold text-slate-400">Fb</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {['Boiler Repairs', 'Boiler Maintenance', 'AC Services', 'Radiator Flushing', 'Installations', 'Fault Codes'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate(item === 'Fault Codes' ? 'plans' : 'services')}
                    className="text-sm font-medium text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <Settings2 className="w-3.5 h-3.5 text-slate-600" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-3">
              {['Westside Sector', 'North District', 'Valley Sector', 'Eastside District'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate('areas')}
                    className="text-sm font-medium text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-medium">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>100 Fictional Way, Suite 50<br />Metro Center, MC 00000</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-bold text-white text-base">555-0100</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                <a href="#" className="hover:text-white transition-colors text-green-400">WhatsApp Dispatch</a>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-400">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>24/7 Mobile Teams Available</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} ClimaNova Climate & Boiler Services. Fictional sample template.
          </p>
          <div className="flex gap-4 text-xs font-medium text-slate-500">
            <button className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <button className="hover:text-slate-300 transition-colors">Terms of Use</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
