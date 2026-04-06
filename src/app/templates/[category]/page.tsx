import React from 'react';
import Link from 'next/link';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '@/lib/template-registry';
import { ArrowLeft, ArrowRight, Zap, CheckCircle, Info } from 'lucide-react';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = TEMPLATE_CATEGORIES.find(c => c.id === categoryId);
  const categoryTemplates = TEMPLATES.filter(t => t.category === categoryId);

  if (!category) return <div className="min-h-screen bg-slate-50 p-24 text-center text-slate-500 font-bold">Category not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/templates" className="inline-flex items-center gap-2 group mb-12 lg:mb-20 text-slate-400 hover:text-slate-950 transition-colors font-bold uppercase tracking-widest text-xs">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Template Bank
        </Link>

        <div className="mb-24 lg:mb-32">
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-8 uppercase tracking-[0.1em]">{category.name} Templates</h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed">
            High-quality {category.name} starters optimized for performance, conversion, and rapid customization.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categoryTemplates.map((template) => (
            <div
              key={template.id}
              className="group flex flex-col p-8 lg:p-16 rounded-[3.5rem] border border-slate-950/5 bg-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 flex flex-col items-end gap-2">
                 <div className="px-4 py-2 rounded-full border border-slate-950/10 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none outline shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                   {template.styleTag}
                 </div>
                 {template.pageCount && template.pageCount > 1 && (
                   <div className="px-3 py-1.5 rounded-full bg-slate-950 text-white text-[9px] font-bold uppercase tracking-widest shadow-xl">
                     {template.pageCount} Pages
                   </div>
                 )}
              </div>

              <div className="flex-1 space-y-8 mb-12">
                <div className="space-y-4">
                  {template.status === 'ready' && (
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest leading-none">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Ready for Use
                    </div>
                  )}
                  <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">{template.name}</h2>
                  {template.valueProposition && (
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest border-l-2 border-blue-600/20 pl-4 py-1">
                      {template.valueProposition}
                    </p>
                  )}
                </div>
                
                <div className="space-y-6">
                   <p className="text-lg text-slate-500 leading-relaxed font-medium transition-colors group-hover:text-slate-950 line-clamp-3">
                     {template.description}
                   </p>

                   {template.useCases && (
                     <div className="flex flex-wrap gap-2 pt-4">
                       {template.useCases.slice(0, 3).map(uc => (
                         <span key={uc} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-950/5 text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:border-blue-600/20 group-hover:text-slate-700 transition-all">
                           {uc}
                         </span>
                       ))}
                       {template.useCases.length > 3 && (
                         <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-950/10 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                           +{template.useCases.length - 3} More
                         </span>
                       )}
                     </div>
                   )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                  <Link
                    href={`/templates/${categoryId}/${template.id}`}
                    className="px-8 py-4 rounded-2xl bg-slate-950 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-600 shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group/btn"
                  >
                   Preview Template
                   <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
                 <button className="p-4 rounded-2xl border border-slate-950/10 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-all shadow-xl group/info">
                   <Info className="w-6 h-6" />
                 </button>
              </div>

              {/* Decorative Background Accents */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {categoryTemplates.length === 0 && (
             <div className="col-span-2 p-32 rounded-[3.5rem] border border-slate-950/5 bg-slate-50 text-center text-slate-300 font-extrabold uppercase tracking-widest">
                Coming Soon
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
