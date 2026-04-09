"use client";

import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'workflows', label: 'Workflows' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'updates', label: 'Updates' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onPageChange('home')}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">AIFeature</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onPageChange(link.id)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    currentPage === link.id
                      ? "text-indigo-600"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => onPageChange('pricing')}
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onPageChange(link.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
                  currentPage === link.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onPageChange('pricing');
                setIsOpen(false);
              }}
              className="mt-4 block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-indigo-200"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
