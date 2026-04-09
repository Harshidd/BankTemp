"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MinimalBackLink() {
  return (
    <div className="fixed top-4 left-4 z-[500] pointer-events-none sm:top-6 sm:left-6 md:top-8 md:left-8 animate-in fade-in slide-in-from-left duration-1000">
      <Link 
        href="/templates" 
        className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white/50 hover:bg-white hover:text-slate-950 transition-all shadow-sm group text-[9px] font-black uppercase tracking-widest"
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
        <span className="hidden sm:inline-block">Back to Template Bank</span>
        <span className="sm:hidden">Close Preview</span>
      </Link>
    </div>
  );
}
