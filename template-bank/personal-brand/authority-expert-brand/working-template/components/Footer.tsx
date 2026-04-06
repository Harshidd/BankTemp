"use client";

import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const footerLinks = [
  { label: 'About', page: 'about' },
  { label: 'Work With Me', page: 'offers' },
  { label: 'Resources', page: 'resources' },
  { label: 'Proof', page: 'testimonials' },
  { label: 'Contact', page: 'contact' },
  { label: 'FAQ', page: 'faq' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-stone-100 font-bold text-lg">[Your Name]</span>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              A short, punchy sentence about what you do and who you help. Keep it honest and specific.
            </p>
          </div>

          {/* Nav */}
          <div>
            <span className="text-stone-300 text-xs font-semibold uppercase tracking-widest">Navigation</span>
            <nav className="mt-4 flex flex-col gap-2">
              {footerLinks.map(link => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className="text-sm text-stone-500 hover:text-stone-200 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <span className="text-stone-300 text-xs font-semibold uppercase tracking-widest">Stay Connected</span>
            <p className="text-sm text-stone-500 leading-relaxed">
              Join the newsletter. One useful thing, once a week.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-200 placeholder-stone-600 text-sm outline-none focus:border-amber-600 transition-colors"
              />
              <button className="px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-500 transition-colors whitespace-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-stone-600">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
