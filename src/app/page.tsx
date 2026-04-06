import Link from 'next/link';
import { ArrowRight, LayoutTemplate, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-6">
           <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-950 uppercase tracking-[0.1em]">Template <span className="text-blue-600">Bank</span></h1>
           <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
             Welcome to the Website Reverse-Engineer Template. Use the cloner to extract sites or browse the pre-built template bank for inspiration.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Clone CTA */}
           <div className="p-10 rounded-[3rem] border border-slate-950/5 bg-white shadow-2xl space-y-8 group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-900/5 mx-auto flex items-center justify-center group-hover:bg-slate-950 transition-colors">
                 <Globe className="w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold uppercase tracking-widest text-[11px]">Clone Website</h2>
                 <p className="text-slate-500 text-sm leading-relaxed">Run <code className="font-mono text-slate-950 font-bold">/clone-website</code> in your agent console to start engineering a new site.</p>
              </div>
           </div>

           {/* Browse CTA */}
           <Link href="/templates" className="p-10 rounded-[3rem] border border-slate-950/5 bg-white shadow-2xl space-y-8 group hover:bg-blue-600 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-900/5 mx-auto flex items-center justify-center group-hover:bg-white transition-colors">
                 <LayoutTemplate className="w-8 h-8 text-blue-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold uppercase tracking-widest text-[11px] group-hover:text-white">Browse Library</h2>
                 <div className="flex items-center justify-center gap-2 text-blue-600 group-hover:text-white font-bold text-sm uppercase tracking-widest leading-none">
                    Start Customization
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
           </Link>
        </div>

        <div className="pt-12 text-center">
           <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Ready for Generation Phase</p>
        </div>
      </div>
    </main>
  );
}
