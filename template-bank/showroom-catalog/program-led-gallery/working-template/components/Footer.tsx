"use client";

import React from 'react';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-100 text-stone-900 pt-24 pb-12 border-t border-stone-200">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 border-b border-stone-200 pb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-12">
            <span className="text-3xl font-normal tracking-tight block select-none">
              MERIDIAN
            </span>
            <p className="text-[15px] font-light leading-relaxed text-stone-600 max-w-sm">
              An international contemporary art institution dedicated to historical programming, estate representation, and primary market exhibitions.
            </p>
            <div className="pt-6 space-y-4">
              <p className="text-[13px] font-medium text-stone-800">Subscribe to our newsletter</p>
              <form className="flex border-b border-stone-300 pb-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent w-full text-[13px] focus:outline-none placeholder:text-stone-400 text-stone-900"
                />
                <button className="text-[13px] font-medium tracking-wide hover:text-stone-500 transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-medium text-[13px] text-stone-500">Directory</h4>
            <div className="flex flex-col gap-3">
              {['Artists & Estates', 'Exhibitions', 'Programs', 'Spaces', 'Institution'].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => onNavigate(item === 'Institution' ? 'about' : item.split(' ')[0].toLowerCase())}
                  className="text-left text-[13px] font-normal text-stone-800 hover:text-stone-500 transition-colors w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-medium text-[13px] text-stone-500">Global Hubs</h4>
            <div className="flex flex-col gap-5 text-[13px] font-normal text-stone-800">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-stone-400 shrink-0" />
                <span className="leading-relaxed">New York <br/> London <br/> Geneva <br/> Seoul</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                inquiries@meridian-contemporary.com
              </p>
            </div>
          </div>
          
          {/* Socials Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-medium text-[13px] text-stone-500">Connect</h4>
            <div className="flex flex-col gap-3 text-[13px] font-normal text-stone-800">
              <a href="#" className="hover:text-stone-500 transition-colors">Arts Arts</a>
              <a href="#" className="hover:text-stone-500 transition-colors">Journal</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[12px] font-normal text-stone-500">
          <p>© {new Date().getFullYear()} Meridian Contemporary</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
