import React from 'react';
import { Zap, Shield, Sparkles, Activity, Clock, Layers } from 'lucide-react';

const features = [
  { icon: Zap, title: "Lighting Fast", description: "Experience zero-latency updates and instantaneous data sync across all your devices and team members." },
  { icon: Shield, title: "Enterprise Security", description: "Built with SOC2 compliance and end-to-end encryption to keep your organization's sensitive data safe." },
  { icon: Sparkles, title: "AI-Powered", description: "Unleash the power of machine learning to automate repetitive tasks and predict future project bottlenecks." },
  { icon: Activity, title: "Real-time Metrics", description: "Monitor your team's performance with beautiful, interactive dashboards and deep-dive analytics." },
  { icon: Clock, title: "Smart Scheduling", description: "Optimize your cycles and sprints with AI-driven time estimates and resource allocation tools." },
  { icon: Layers, title: "Full Integration", description: "Connect with over 500+ tools including Slack, GitHub, and Figma to centralize your entire workflow." },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 lg:py-40 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24 px-4">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Engineered for <span className="text-white/50 italic">unparalleled</span> performance.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl">
             We rebuilt the core engine from the ground up to ensure your team never has to wait for a page load again.
          </p>
        </div>

        {/* The Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {features.map((f, i) => (
             <div key={i} className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                   <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:translate-x-1 transition-transform">{f.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{f.description}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
