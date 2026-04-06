"use client";

import React from 'react';
import { Video, MessageCircle, Camera, Briefcase, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', id: 'about' },
        { label: 'Products', id: 'products' },
        { label: 'Resources', id: 'resources' },
        { label: 'FAQ', id: 'faq' },
      ]
    },
    {
      title: 'Navigation',
      links: [
        { label: 'Home', id: 'home' },
        { label: 'Community', id: 'community' },
        { label: 'Contact', id: 'contact' },
        { label: 'Privacy Policy', id: 'home' },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold tracking-tight text-white mb-6 block"
            >
              [BRAND<span className="text-emerald-500">NAME]</span>
            </button>
            <p className="max-w-md text-slate-400 leading-relaxed mb-8">
              Helping creators and educators build sustainable digital businesses through evidence-based strategies and modular systems.
            </p>
            <div className="flex gap-5">
              <a href="#" className="p-2 border border-slate-700 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <Video size={20} />
              </a>
              <a href="#" className="p-2 border border-slate-700 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 border border-slate-700 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <Camera size={20} />
              </a>
              <a href="#" className="p-2 border border-slate-700 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <Briefcase size={20} />
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-6 italic">{group.title}</h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button 
                      onClick={() => onNavigate(link.id)}
                      className="hover:text-emerald-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {currentYear} [Your Name]. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Live locally in [Your Location]
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
