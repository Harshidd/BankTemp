import React from 'react';

interface ValueSectionProps {
  reversed?: boolean;
  title: string;
  subtitle: string;
  description: string;
  highlights: { title: string; text: string }[];
}

export default function ValueSection({ 
  reversed = false, 
  title, 
  subtitle, 
  description, 
  highlights 
}: ValueSectionProps) {
  return (
    <section className="py-24 lg:py-48 bg-black/95 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
           {/* Text Content */}
           <div className="flex-1 space-y-10 lg:space-y-16">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-widest text-blue-500 uppercase">{subtitle}</span>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">{title}</h2>
                <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl">{description}</p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-8">
                 {highlights.map((h, i) => (
                   <div key={i} className="flex gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                      <div className="space-y-2">
                        <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{h.title}</h4>
                        <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{h.text}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Rich Visual Mockup (Figma-inspired richness) */}
           <div className="flex-1 relative w-full pt-12 lg:pt-0">
              <div className="relative aspect-[16/10] rounded-2xl border border-white/10 bg-white/5 shadow-3xl overflow-hidden group">
                 {/* Internal Rich Workspace Simulation */}
                 <div className="p-4 lg:p-10 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    {/* Mock cursors to show collaboration */}
                    <div className="absolute top-1/4 left-1/3 p-1 rounded bg-blue-500 text-[10px] font-bold text-white shadow-xl translate-x-12 translate-y-12 animate-bounce">
                       Jane Cooper
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 p-1 rounded bg-emerald-500 text-[10px] font-bold text-white shadow-xl -translate-x-4 translate-y-8 animate-pulse">
                       Alex Rivera
                    </div>
                    
                    {/* Mock UI Elements */}
                    <div className="flex-1 rounded-lg border border-white/5 bg-white/5 p-6 space-y-4">
                       <div className="h-4 w-1/2 rounded bg-white/10" />
                       <div className="grid grid-cols-3 gap-2">
                         <div className="h-16 rounded bg-white/5 border border-white/5" />
                         <div className="h-16 rounded bg-white/5 border border-white/5" />
                         <div className="h-16 rounded bg-white/5 border border-white/5" />
                       </div>
                       <div className="h-24 w-full rounded bg-white/5 border border-white/5" />
                    </div>
                 </div>

                 {/* Shine Effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
              
              {/* Optional absolute-positioned overlay card */}
              <div className="absolute -top-6 -right-6 p-4 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl hidden lg:block animate-fade-in-up">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">98%</div>
                   <div>
                     <p className="text-xs font-bold text-white">Project Velocity</p>
                     <p className="text-[10px] text-white/40">Updated 2m ago</p>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
