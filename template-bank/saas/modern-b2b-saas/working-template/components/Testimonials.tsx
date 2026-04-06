import React from 'react';

const reviews = [
  { name: "Sarah Jenkins", role: "Product Designer", company: "Meta", text: "This platform has completely transformed our design-to-dev workflow. The speed is absolutely unmatched." },
  { name: "Michael Chen", role: "CTO", company: "Stripe", text: "Finally, a tool that keeps up with our engineering velocity. The API-first approach is exactly what we needed." },
  { name: "Emma Wilson", role: "Founder", company: "Vercel", text: "The most intuitive project management interface I've ever used. Seamless, fast, and incredibly powerful." },
  { name: "David Miller", role: "Lead Engineer", company: "Prisma", text: "The real-time collaboration features are a game-changer for our distributed team. Zero lag, zero issues." },
  { name: "Sophia Rodriguez", role: "Head of Ops", company: "Airbnb", text: "We've seen a 40% increase in project completion speed since switching. It's the best investment we've made this year." },
  { name: "James Lee", role: "UX Researcher", company: "DoorDash", text: "The attention to detail in the UI is incredible. It's clear this was built by people who actually use these tools." },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-48 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 lg:mb-24">
           <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">Loved by the world's <span className="text-blue-500">best teams</span></h2>
           <p className="text-lg text-white/40 max-w-2xl mx-auto">Join thousands of high-velocity organizations already building with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {reviews.map((r, i) => (
             <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                     {r.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{r.name}</h4>
                      <p className="text-xs text-white/40">{r.role} at {r.company}</p>
                   </div>
                </div>
                <p className="text-lg text-white/70 leading-relaxed group-hover:text-white transition-colors">"{r.text}"</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
