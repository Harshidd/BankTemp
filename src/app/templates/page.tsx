import React from 'react';
import Link from 'next/link';
import { TEMPLATE_CATEGORIES, TEMPLATES } from '@/lib/template-registry';
import { Zap, GraduationCap, User, Briefcase, ShoppingBag, MapPin, ArrowRight } from 'lucide-react';

const icons: { [key: string]: any } = {
  'zap': Zap,
  'graduation-cap': GraduationCap,
  'user': User,
  'briefcase': Briefcase,
  'shopping-bag': ShoppingBag,
  'map-pin': MapPin,
};

export default function TemplatesIndex() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-24 lg:mb-32">
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-8">Template Bank</h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Browse our library of high-quality, reusable website starter templates. Categorized by industry and optimized for future customization.
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
                className="group p-8 lg:p-12 rounded-[2.5rem] border border-slate-950/5 bg-white shadow-xl hover:bg-slate-950 hover:text-white transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-900/5 mb-8 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight uppercase tracking-[0.1em]">{category.name}</h2>
                    <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-6 h-6 opacity-30 group-hover:opacity-100" />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-slate-400 group-hover:text-white/50 uppercase tracking-widest">{templateCount} Templates Available</p>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  );
}
