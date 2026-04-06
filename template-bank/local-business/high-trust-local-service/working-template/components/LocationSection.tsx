import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const cities = [
  "[City Name A]", "[City Name B]", "[City Name C]", "[City Name D]", "[City Name E]", "[City Name F]", "[City Name G]", "[City Name H]"
];

export default function LocationSection() {
  return (
    <section className="py-24 lg:py-48 bg-slate-50 relative overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
             {/* Map Card Mockup (SEO & Visual Relevance) */}
             <div className="flex-1 w-full p-8 lg:p-16 rounded-[4rem] border border-slate-950/5 bg-white shadow-3xl relative animate-float transition-all hover:scale-105">
                <div className="aspect-[16/10] rounded-3xl bg-slate-100 border border-slate-900/5 relative overflow-hidden group">
                   {/* Generic Map Pattern Component Mockup */}
                   <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-[size:20px_20px]" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white scale-125 shadow-2xl group-hover:scale-150 transition-transform">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-blue-600/10 rounded-full animate-ping pointer-events-none" />
                   
                   {/* Marker Content */}
                   <div className="absolute bottom-10 left-10 p-4 rounded-xl bg-slate-950 text-white shadow-3xl">
                      <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest leading-none mb-1">HQ Distribution</p>
                      <h4 className="text-sm font-bold uppercase tracking-widest">[Main City], [State]</h4>
                   </div>
                </div>
             </div>

             {/* City List / Service Coverage (SEO Focus) */}
             <div className="flex-1 space-y-12 px-4 shadow-sm pb-8 border-b border-slate-950/5">
                <div className="space-y-6 text-center lg:text-left">
                   <span className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-8">Service Coverage</span>
                   <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[1.05]">
                      Serving the whole <span className="text-blue-600 underline decoration-slate-950/10 decoration-4">greater region.</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                       We provide the same high-standard service to every city and town in the surrounding areas. See if we're in your neighborhood.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12 opacity-80 pt-8 border-t border-slate-950/5 group hover:opacity-100 transition-opacity">
                   {cities.map((city, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-950 uppercase tracking-widest hover:text-blue-600 transition-colors cursor-pointer group/item">
                        <MapPin className="w-3.5 h-3.5 text-blue-600/30 group-hover/item:text-blue-600" />
                        {city}
                     </div>
                   ))}
                </div>

                <div className="flex items-center gap-2 group cursor-pointer lg:justify-start justify-center">
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Don't see your city?</p>
                   <div className="flex items-center gap-1 text-blue-600 font-bold text-sm underline decoration-blue-600/20 group-hover:decoration-blue-600 transition-all leading-none">
                     Contact Us Now
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
