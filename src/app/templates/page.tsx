import React from 'react';
import Link from 'next/link';
import { TEMPLATE_CATEGORIES, TEMPLATES } from '@/lib/template-registry';
import { Zap, GraduationCap, User, Briefcase, ShoppingBag, MapPin, LayoutGrid, ArrowRight } from 'lucide-react';

const icons: { [key: string]: any } = {
  'zap': Zap,
  'graduation-cap': GraduationCap,
  'user': User,
  'briefcase': Briefcase,
  'shopping-bag': ShoppingBag,
  'map-pin': MapPin,
  'layout-grid': LayoutGrid,
};

export default function TemplatesIndex() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Return to Dashboard
          </Link>
        </div>

        <div className="mb-24 lg:mb-32 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-slate-900/10">TB</div>
             <span className="text-sm font-black uppercase tracking-widest text-slate-300">by MRKDEV</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-none">Template Bank</h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            A curated library of premium website starter systems. Organized by category and engineered for architectural clarity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATE_CATEGORIES.map((category) => {
            const Icon = icons[category.icon];
            const templateCount = TEMPLATES.filter(t => t.category === category.id).length;

            return (
              <Link
                key={category.id}
                href={`/templates/${category.id}`}
                className="group p-10 rounded-[3rem] border border-slate-100 bg-slate-50 shadow-xl shadow-slate-200/50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 mb-10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-7 h-7 transition-colors" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">{category.name}</h2>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full">{templateCount} Systems</span>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available to adapt</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* System Credits */}
        <div className="mt-32 pt-16 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
           <span>The Starter Systems Library</span>
           <span className="text-slate-900 font-black">Curated by MRKDEV</span>
        </div>
      </main>
    </div>
  );
}

