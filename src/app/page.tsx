import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Layers, MousePointer2, Star, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { TEMPLATES } from '@/lib/template-registry';

export default function Home() {
  // Curated selections
  const featuredTemplates = TEMPLATES.filter(t => 
    ['modern-b2b-saas', 'high-trust-local-service', 'modern-interactive-learning', 'clinic-expert-local'].includes(t.id)
  );

  const newTemplates = TEMPLATES.filter(t => 
    ['ai-feature-promo', 'authority-expert-brand'].includes(t.id)
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-slate-900/10">TB</div>
            <span className="font-extrabold tracking-tighter text-xl uppercase tracking-[0.1em]">Template <span className="text-indigo-600">Bank</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/templates" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors">Library</Link>
            <Link href="/templates/saas" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors">SaaS</Link>
            <Link href="/templates/local-business" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors">Local</Link>
          </div>
          <Link 
            href="/templates" 
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-900/10"
          >
            Access Bank
          </Link>
        </div>
      </nav>

      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-40 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">The definitive starter library</span>
            </div>
            
            <h1 className="text-6xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9] pr-4">
              Build your <br className="hidden md:block"/> 
              next <span className="text-indigo-600 italic">vision</span> faster.
            </h1>
            
            <p className="text-lg lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              A curated collection of production-ready website systems. Architected for speed, conversion, and high-trust results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link 
                href="/templates" 
                className="w-full sm:w-auto bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-3xl shadow-indigo-500/20 hover:bg-slate-900 hover:shadow-none transition-all flex items-center justify-center gap-3"
              >
                Browse Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#featured" 
                className="w-full sm:w-auto bg-slate-50 text-slate-900 border border-slate-100 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:border-slate-200 transition-all flex items-center justify-center gap-3"
              >
                Featured Systems
              </Link>
            </div>
          </div>
          
          {/* Background Gradient Accents */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/30 blur-[150px] rounded-full -z-10 animate-pulse" />
        </section>

        {/* Categories Quick Nav */}
        <section className="bg-slate-50 py-16 border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 grayscale group-hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
                 {['SaaS', 'Education', 'Local Business', 'Personal Brand', 'Promotion'].map((cat) => (
                   <span key={cat} className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 cursor-default hover:text-indigo-600 transition-colors">{cat}</span>
                 ))}
              </div>
           </div>
        </section>

        {/* Discovery Layers: Featured / Trending / New */}
        <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-32">
           
           {/* Section 1: Featured (The Classics) */}
           <div className="space-y-16">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-2 text-indigo-600">
                       <Star className="w-4 h-4 fill-current" />
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] leading-none">Featured Collections</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none pr-4">Signature <br/>Starter Systems.</h2>
                 </div>
                 <p className="text-slate-400 max-w-sm leading-relaxed text-sm font-medium pb-1 pr-4">
                   Our most requested foundations, featuring full multi-page architecture and high-trust conversion logic.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pr-4">
                 {featuredTemplates.map((template) => (
                   <Link 
                     key={template.id} 
                     href={`/templates/${template.category}/${template.id}`}
                     className="group relative flex flex-col p-10 lg:p-16 rounded-[4rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-indigo-900/5 hover:bg-slate-50 hover:border-indigo-100 transition-all duration-700 overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 p-10">
                         <div className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                           {template.styleTag}
                         </div>
                      </div>

                      <div className="flex-1 space-y-10">
                         <div className="space-y-4 pr-12">
                            <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-[1.1]">{template.name}</h3>
                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{template.valueProposition}</p>
                         </div>
                         <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-600 transition-colors line-clamp-2 max-w-sm">
                           {template.description}
                         </p>
                         <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                            Preview System <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                         </div>
                      </div>
                      {/* Scale backdrop */}
                      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                   </Link>
                 ))}
              </div>
           </div>

           {/* Section 2: Trending & Most Flexible (Layered Row) */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 pr-4">
              <div className="lg:col-span-1 space-y-10">
                 <div className="flex items-center gap-2 text-indigo-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] leading-none">Fresh Impact</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">New in <br/>the Bank.</h2>
                 <p className="text-slate-400 leading-relaxed text-sm font-medium">
                   The latest architectural updates, featuring modern bento-layouts and AI-native storytelling blocks.
                 </p>
                 <Link href="/templates" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-indigo-600 pb-2 hover:text-indigo-600 hover:border-slate-900 transition-all">
                    View Complete Library <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {newTemplates.map((template) => (
                   <div key={template.id} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm space-y-8 group hover:bg-white hover:shadow-2xl hover:shadow-indigo-900/5 transition-all">
                      <div className="flex justify-between items-start">
                         <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">New Arrival</span>
                         <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">7 Pages</span>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900">{template.name}</h4>
                      <p className="text-xs text-slate-400 pr-8 leading-relaxed line-clamp-2">{template.description}</p>
                      <Link href={`/templates/${template.category}/${template.id}`} className="block text-[10px] font-black uppercase tracking-widest text-indigo-600 border border-indigo-100 px-5 py-3 rounded-2xl text-center hover:bg-indigo-600 hover:text-white transition-all shadow-xl shadow-indigo-100 group-hover:shadow-indigo-500/10">
                         Preview foundations
                      </Link>
                   </div>
                 ))}
                 {/* Empty slot / Coming soon */}
                 <div className="p-10 rounded-[3rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-4 group">
                    <Layers className="w-8 h-8 text-slate-200 group-hover:text-indigo-600 transition-colors" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">More systems in queue</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Why Template Bank Pass */}
        <section className="bg-slate-900 text-white py-32 overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-12">
                    <div className="space-y-6">
                       <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] italic">Curated. <br/>Not <span className="text-indigo-400 font-normal not-italic pr-4">cluttered.</span></h2>
                       <p className="text-slate-400 text-lg md:text-2xl max-w-lg leading-relaxed font-medium">
                         Template Bank is a curated ecosystem for builders who value precision over volume.
                       </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                          <h4 className="font-black text-sm uppercase tracking-widest">Ready foundations</h4>
                          <p className="text-xs text-slate-500 leading-relaxed pr-8">Skip the hero-section block and start with a full 7-page site identity.</p>
                       </div>
                       <div className="space-y-4">
                          <ShieldCheck className="w-6 h-6 text-indigo-400" />
                          <h4 className="font-black text-sm uppercase tracking-widest">Trust Architecture</h4>
                          <p className="text-xs text-slate-500 leading-relaxed pr-8">Every template is pre-configured for authority, verification benchmarks, and high-trust UX.</p>
                       </div>
                       <div className="space-y-4">
                          <MousePointer2 className="w-6 h-6 text-indigo-400" />
                          <h4 className="font-black text-sm uppercase tracking-widest">Full Previews</h4>
                          <p className="text-xs text-slate-500 leading-relaxed pr-8">Complete browser-based interaction testing before you deploy a single foundation.</p>
                       </div>
                       <div className="space-y-4">
                          <Zap className="w-6 h-6 text-indigo-400" />
                          <h4 className="font-black text-sm uppercase tracking-widest">Rapid Adaptation</h4>
                          <p className="text-xs text-slate-500 leading-relaxed pr-8">Designed for sub-millisecond brand adaptation without breaking architectural logic.</p>
                       </div>
                    </div>
                 </div>

                 <div className="relative isolate">
                    <div className="aspect-square bg-white rounded-[4rem] p-12 lg:p-20 flex flex-col justify-center space-y-10 shadow-3xl">
                       <h3 className="text-3xl lg:text-5xl font-black text-slate-900 italic tracking-tighter leading-none">Designed <br/>to <span className="text-indigo-600">productize</span> <br/>your next idea.</h3>
                       <Link 
                         href="/templates" 
                         className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] text-center shadow-2xl hover:bg-indigo-600 transition-all"
                       >
                         Start Browsing the Bank
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
           {/* Decorative Accent */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </section>

        {/* Final CTA / Footer */}
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-slate-100 pt-16">
              <div className="space-y-4 text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start gap-2 grayscale group-hover:grayscale-0 transition-all opacity-30 hover:opacity-100 cursor-default">
                    <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-[10px]">TB</div>
                    <span className="font-extrabold tracking-tighter text-sm uppercase tracking-[0.1em] text-slate-900">Template Bank</span>
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 max-w-sm">A professional starter library curated for modern developers. Built and owned by MRKDEV.</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="flex gap-8">
                    <Link href="/templates" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Library</Link>
                    <Link href="/templates/saas" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">SaaS</Link>
                    <Link href="/templates/local-business" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Local</Link>
                 </div>
                 <Link 
                   href="/templates" 
                   className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100"
                 >
                   Deploy Foundations
                 </Link>
              </div>
           </div>
        </footer>
      </main>
    </div>
  );
}


