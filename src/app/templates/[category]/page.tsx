import React from 'react';
import Link from 'next/link';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '@/lib/template-registry';
import { ArrowLeft, ArrowRight, Zap, CheckCircle, Info } from 'lucide-react';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = TEMPLATE_CATEGORIES.find(c => c.id === categoryId);
  const categoryTemplates = TEMPLATES.filter(t => t.category === categoryId && t.status === 'ready');

  if (!category) return <div className="min-h-screen bg-white p-24 text-center text-slate-500 font-bold">Category not found.</div>;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <Link href="/templates" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group">
            Template Bank
          </Link>
        </div>

        <div className="mb-24 lg:mb-32 space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex items-center gap-2">
             <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600">Starter Systems</span>
             <div className="h-px w-8 bg-indigo-100" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-none">{category.name} <br/>Collections.</h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            High-fidelity {category.name} starters engineered for professional performance and rapid foundational customization.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categoryTemplates.map((template) => (
            <div
              key={template.id}
              className="group flex flex-col p-10 lg:p-16 rounded-[4rem] border border-slate-100 bg-slate-50 shadow-xl shadow-slate-200/50 relative overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-indigo-900/5"
            >
              <div className="absolute top-0 right-0 p-10 flex flex-col items-end gap-2 isolate">
                 <div className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                   {template.styleTag}
                 </div>
                 {template.pageCount && template.pageCount > 1 && (
                   <div className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest shadow-xl">
                     {template.pageCount} Pages
                   </div>
                 )}
              </div>

              <div className="flex-1 space-y-10 mb-12 isolate">
                <div className="space-y-4">
                  {template.status === 'ready' && (
                    <div className="flex items-center gap-2 text-indigo-600 font-black text-[9px] uppercase tracking-[0.2em] leading-none">
                      <CheckCircle className="w-4 h-4" />
                      System Ready
                    </div>
                  )}
                  <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-950 group-hover:text-indigo-600 transition-colors leading-[1.1]">{template.name}</h2>
                  {template.valueProposition && (
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic pr-12">
                      {template.valueProposition}
                    </p>
                  )}
                </div>
                
                <div className="space-y-8">
                   <p className="text-lg text-slate-500 leading-relaxed font-medium transition-colors group-hover:text-slate-950 line-clamp-3">
                     {template.description}
                   </p>

                   {template.useCases && (
                     <div className="flex flex-wrap gap-2 pt-4">
                       {template.useCases.slice(0, 3).map(uc => (
                         <span key={uc} className="px-3 py-1.5 rounded-xl bg-white border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:border-indigo-100 group-hover:text-slate-700 transition-all">
                           {uc}
                         </span>
                       ))}
                     </div>
                   )}
                </div>
              </div>

              <div className="flex items-center gap-4 isolate">
                  <Link
                    href={`/templates/${categoryId}/${template.id}`}
                    className="px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-indigo-600 shadow-2xl shadow-indigo-900/10 transition-colors flex items-center gap-4 group/btn"
                  >
                   Preview Starter
                   <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
                 <button className="p-5 rounded-2xl border border-slate-200 bg-white hover:bg-indigo-50 text-slate-300 hover:text-indigo-600 transition-all shadow-sm group/info">
                   <Info className="w-6 h-6" />
                 </button>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {categoryTemplates.length === 0 && (
             <div className="col-span-2 p-32 rounded-[4rem] border border-slate-100 bg-slate-50 text-center text-slate-300 font-extrabold uppercase tracking-widest">
                System in Queue
             </div>
          )}
        </div>

        {/* Brand Footer */}
        <div className="mt-32 pt-16 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
           <div className="flex items-center gap-4">
              <span>{category.name} Distribution</span>
              <div className="w-1 h-1 rounded-full bg-slate-200" />
              <span>{categoryTemplates.length} Active Starters</span>
           </div>
           <span className="text-slate-900 font-black">MRKDEV</span>
        </div>
      </main>
    </div>
  );
}

