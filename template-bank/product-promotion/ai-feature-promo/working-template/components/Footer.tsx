"use client";

import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { Twitter, Github, Linkedin } from './Icons';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { id: 'features', label: 'Features' },
      { id: 'workflows', label: 'Workflows' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'updates', label: 'Updates' },
    ],
    company: [
      { id: 'contact', label: 'Contact' },
      { id: 'faq', label: 'FAQ' },
      { id: 'home', label: 'Privacy Policy' },
      { id: 'home', label: 'Terms of Service' },
    ],
    social: [
      { icon: Twitter, href: '#' },
      { icon: Github, href: '#' },
      { icon: Linkedin, href: '#' },
      { icon: Mail, href: '#' },
    ]
  };

  return (
    <footer className="border-t border-slate-100 bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onPageChange('home')}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">AIFeature</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Transforming complex workflows into intelligent, automated experiences. Built for the modern builder.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} className="text-slate-400 transition-colors hover:text-slate-900">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onPageChange(item.id)}
                      className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onPageChange(item.id)}
                      className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Stay Informed</h3>
            <p className="text-sm text-slate-500">Get the latest updates and AI insights directly in your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
              />
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} AIFeature Promo Template. Optimized for high-velocity launches.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">MRKDEV SYSTEM</span>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">TURKEY-LOCAL READY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
