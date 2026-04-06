import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "[Client Name A]", text: "Absolutely professional results. They arrived on time and fixed my [Problem] in less than an hour. Highly recommended locally!", rating: 5, date: "2 days ago" },
  { name: "[Client Name B]", text: "I called for an emergency repair at 10 PM. They were here by 11 and resolved everything before midnight. Exceptional service.", rating: 5, date: "1 week ago" },
  { name: "[Client Name C]", text: "Fair pricing and honest experts. They explained exactly what needed to be done and provided a transparent quote upfront.", rating: 5, date: "3 weeks ago" }
];

export default function Reviews() {
  return (
    <section className="py-24 lg:py-48 bg-white relative overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-24 lg:mb-32">
             <div className="max-w-2xl">
                <span className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-8">Client Success Stories</span>
                <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[1.05]">
                   Trusted by their <span className="text-blue-600 italic">neighbors.</span>
                </h2>
             </div>
             
             <div className="hidden lg:flex flex-col items-end">
                <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(i => (
                     <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                   ))}
                </div>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Average Google Rating (4.9/5)</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {reviews.map((r, i) => (
               <div key={i} className="p-8 lg:p-12 rounded-[2.5rem] border border-slate-950/5 bg-slate-50 relative group hover:-translate-y-2 transition-transform shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 text-slate-200 group-hover:text-blue-200 transition-colors">
                     <Quote className="w-12 h-12 rotate-180 opacity-20" />
                  </div>
                  
                  <div className="flex gap-1 mb-8">
                     {[...Array(r.rating)].map((_, j) => (
                       <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                     ))}
                  </div>
                  
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 italic">
                     "{r.text}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-950/5">
                     <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-950 uppercase tracking-widest leading-none">{r.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Local Customer</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.date}</span>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
