import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-48 px-4 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto rounded-[3rem] p-12 lg:p-32 border border-white/5 bg-white/5 text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
         
         <div className="relative mb-12">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
              Ready to <span className="text-blue-500">accelerate</span> <br className="hidden lg:block"/> your entire workflow?
            </h2>
            <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join 10,000+ organizations building better software faster. No credit card required. Free 30-day trial for all plans.
            </p>
         </div>

         <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-white/90 shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group/btn">
              Get Started for Free
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all">
              Contact Sales
            </button>
         </div>

         {/* Floating decorative UI elements */}
         <div className="absolute -left-12 bottom-12 p-3 rounded-xl border border-white/5 bg-white/5 hidden lg:block rotate-6">
            <div className="w-24 h-2 rounded bg-white/10 mb-2" />
            <div className="w-16 h-2 rounded bg-white/5" />
         </div>
         <div className="absolute -right-12 top-12 p-3 rounded-xl border border-white/5 bg-white/5 hidden lg:block -rotate-12 translate-x-4">
            <div className="w-32 h-2 rounded bg-white/10 mb-2" />
            <div className="w-20 h-2 rounded bg-white/5" />
         </div>
      </div>
    </section>
  );
}
