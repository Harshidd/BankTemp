"use client";

import React from 'react';
import { Phone, Mail, MapPin, Droplets, Clock, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-8 border-sky-600 font-sans">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="bg-sky-600 p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight uppercase">
                FlowRight
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Your trusted local plumbing experts. We provide reliable, fast, and transparent plumbing services for residential and commercial properties.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors cursor-pointer text-sm font-bold text-slate-400">In</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors cursor-pointer text-sm font-bold text-slate-400">Fb</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {['Emergency Repairs', 'Drain Cleaning', 'Water Heaters', 'Pipe Installation', 'Leak Detection', 'Commercial Plumbing'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 block"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-black text-lg mb-6 uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-4">
              {['Downtown District', 'Northside Heights', 'Westlake Valley', 'East River', 'South Metro'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate('areas')}
                    className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-3"
                  >
                    <MapPin className="w-4 h-4 text-slate-600" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm font-medium">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>1244 Industrial Parkway,<br />Suite 100, Cityname</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                <span className="font-black text-white text-lg">+1 (555) 987-6543</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                <a href="#" className="hover:text-white transition-colors text-green-400">WhatsApp Support</a>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium">
                <Clock className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM<br/><span className="text-sky-400 font-bold mt-1 inline-block">24/7 Emergency Service</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} FlowRight Plumbing Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <button className="hover:text-sky-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-sky-400 transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
