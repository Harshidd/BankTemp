"use client";

import React from 'react';
import { ArrowLeft, Layout, Tag, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { TemplateMetadata } from '@/lib/template-registry';
import { cn } from '@/lib/utils';

interface TemplateInfoBarProps {
  template: TemplateMetadata;
  categoryName?: string;
}

export default function TemplateInfoBar({ template, categoryName }: TemplateInfoBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-white/80 backdrop-blur-md border-b border-slate-200 h-14 flex items-center shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between gap-8 text-slate-900">
        
        {/* Left: Back & Identity */}
        <div className="flex items-center gap-6 overflow-hidden">
          <Link 
            href="/templates" 
            className="flex items-center gap-2 group p-2 -ml-2 hover:bg-slate-100 rounded-lg transition-all flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Catalog</span>
          </Link>
          
          <div className="h-6 w-px bg-slate-200 flex-shrink-0 hidden sm:block" />
          
          <div className="flex flex-col leading-none truncate overflow-hidden">
            <h1 className="text-sm font-black uppercase italic tracking-tighter truncate whitespace-nowrap">{template.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest">{template.mrkdevContext || 'MRKDEV Starter'}</span>
              <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">•</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest italic">{categoryName || template.category}</span>
            </div>
          </div>
        </div>

        {/* Center: Quick Stats (Hidden on small mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-slate-400">
            <Layout className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-widest">{template.pageCount || 1} Pages</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            <div className="flex gap-2">
              {template.useCases?.slice(0, 2).map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[8px] font-black uppercase tracking-wider whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Meta/Action */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="text-[9px] font-black uppercase tracking-widest">Live Preview Active</span>
          </div>
          <button 
            className="px-4 py-1.5 rounded-lg bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2"
            onClick={() => window.open('/templates', '_self')}
          >
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
}
