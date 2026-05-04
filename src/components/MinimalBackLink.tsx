"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MinimalBackLink() {
  return (
    <div className="fixed bottom-6 right-6 z-[500] animate-in fade-in slide-in-from-bottom duration-700">
      <Link
        href="/templates"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/60 text-slate-500 hover:bg-white hover:text-slate-900 hover:border-slate-400 transition-all shadow-lg shadow-black/10 group text-[10px] font-bold uppercase tracking-widest"
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
        <span className="hidden sm:inline-block">Template Bank</span>
        <span className="sm:hidden">Back</span>
      </Link>
    </div>
  );
}
