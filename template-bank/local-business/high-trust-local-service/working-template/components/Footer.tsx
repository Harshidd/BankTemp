import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="py-24 bg-slate-950 text-white relative overflow-hidden">
       {/* Support Bar (Conversion & NAP logic) */}
       <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pb-16 border-b border-white/5 opacity-80 group hover:opacity-100 transition-opacity">
             <div className="space-y-4 text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg">L</div>
                  <span className="font-bold text-lg text-white tracking-tighter uppercase">LOCAL SERVICES [City]</span>
                </div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">Your Expert Solution for [Niche] Services Since [Year].</p>
             </div>
             
             <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest leading-none">Emergency Line</p>
                   <a href="tel:0000000000" className="text-xl font-extrabold text-white hover:text-blue-500 transition-colors tracking-tight">(000) 000-0000</a>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest leading-none">Main Office</p>
                   <p className="text-sm font-medium text-white/50">[123 Street Address], [City, State Zip]</p>
                </div>
             </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 pt-24 pb-24 border-b border-white/5">
             <div className="space-y-12">
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-8">Navigation</h4>
                   <nav className="flex flex-col gap-6 text-[10px] font-bold text-white/40 uppercase tracking-widest group/nav">
                      <button onClick={() => onPageChange?.('home')} className="hover:text-blue-500 transition-colors text-left uppercase">Home</button>
                      <button onClick={() => onPageChange?.('services')} className="hover:text-blue-500 transition-colors text-left uppercase">Services</button>
                      <button onClick={() => onPageChange?.('about')} className="hover:text-blue-500 transition-colors text-left uppercase">About Us</button>
                      <button onClick={() => onPageChange?.('contact')} className="hover:text-blue-500 transition-colors text-left uppercase">Contact</button>
                   </nav>
                </div>
             </div>
             
             <div className="space-y-12">
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-8">Local Coverage</h4>
                   <nav className="flex flex-col gap-6 text-[10px] font-bold text-white/40 uppercase tracking-widest group/nav">
                      <button onClick={() => onPageChange?.('areas')} className="hover:text-blue-500 transition-colors text-left uppercase">[City Name A]</button>
                      <button onClick={() => onPageChange?.('areas')} className="hover:text-blue-500 transition-colors text-left uppercase">[City Name B]</button>
                      <button onClick={() => onPageChange?.('areas')} className="hover:text-blue-500 transition-colors text-left uppercase">Full Service Area</button>
                   </nav>
                </div>
             </div>

             <div className="space-y-12">
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-8">Business Hours</h4>
                   <div className="flex flex-col gap-6 text-[10px] font-bold text-white/40 uppercase tracking-widest group/nav">
                      <div className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span>24 HOURS</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span>EMERGENCY ONLY</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-2"><span>Sunday</span> <span>EMERGENCY ONLY</span></div>
                   </div>
                </div>
             </div>

             <div 
               className="space-y-12 p-8 rounded-3xl border border-white/5 bg-white/5 group hover:bg-blue-600 transition-all cursor-pointer"
               onClick={() => onPageChange?.('contact')}
             >
                <h4 className="text-xs font-bold text-blue-500 group-hover:text-white transition-colors tracking-widest uppercase mb-8">Need Service?</h4>
                <div className="flex items-center gap-2 group/btn">
                   <p className="text-lg font-bold text-white group-hover:underline underline-offset-8">Book Online Now</p>
                   <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
             </div>
          </div>

          <div className="max-w-6xl mx-auto pt-12 flex flex-col md:flex-row items-center justify-between gap-12 opacity-30 text-[9px] font-bold text-white uppercase tracking-widest group hover:opacity-100 transition-opacity pb-8">
             <p>&copy; [Year] Local Services [City]. All Rights Reserved.</p>
             
             {/* Subtle MRKDEV Branding Note */}
             <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 select-none group/mrk transition-all hover:bg-white/10">
                <Sparkles className="w-3 h-3 text-blue-500 group-hover/mrk:animate-pulse" />
                <span className="text-white/40 group-hover/mrk:text-white">MRKDEV STARTER TEMPLATE</span>
             </div>

             <div className="flex gap-8">
                <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Sitemap</a>
             </div>
          </div>
       </div>
    </footer>
  );
}
