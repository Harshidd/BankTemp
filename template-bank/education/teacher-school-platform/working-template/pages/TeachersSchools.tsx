"use client";

import React from 'react';
import { Presentation, ShieldCheck, GraduationCap, Zap, CheckCircle2, Heart, Award, Users, ArrowRight } from 'lucide-react';

interface TeachersSchoolsProps {
  onNavigate: (page: string) => void;
}

export default function TeachersSchools({ onNavigate }: TeachersSchoolsProps) {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Dual Path Hero */}
      <section className="py-24 lg:py-48 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.6em] font-mono">Audience Targeting 03-04</h4>
            <h1 className="text-5xl lg:text-9xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.85]">Empowering Every <br /> <span className="text-emerald-500 italic">Academic Role</span></h1>
          </div>
          <p className="text-lg lg:text-2xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest italic pt-1 uppercase italic font-black">
            Different roles. One mission. Standardized excellence for educators and administrators alike.
          </p>
        </div>
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[2px] border-emerald-50 rounded-full opacity-50 animate-pulse -z-10" />
      </section>

      {/* 2. For Teachers Section */}
      <section className="py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 animate-in slide-in-from-left">
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <Heart className="w-8 h-8 fill-emerald-500" />
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">For <br /> <span className="text-emerald-500">Educators</span></h2>
                <p className="text-lg text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-md italic pt-1 uppercase italic font-black">
                  Minimize administrative friction. Maximize classroom inspiration. Our tools are designed by teachers, for teachers.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-4">
                {[
                  'Automated grading protocols',
                  'Synchronous classroom engagement',
                  'Personalized student feedback hub',
                  'Resource sharing and collaboration'
                ].map(item => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest italic pt-1 italic">{item}</span>
                  </div>
                ))}
              </div>
              
              <button 
                 onClick={() => onNavigate('contact')}
                 className="px-10 py-5 rounded-2xl bg-slate-950 text-white font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl"
              >
                Join Educator Network
              </button>
            </div>

            <div className="relative pt-4">
              <div className="p-12 lg:p-20 rounded-[5rem] bg-slate-100 border border-slate-200 animate-in zoom-in">
                 <div className="space-y-8">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-900 border border-slate-200 font-black pt-1 uppercase italic font-black italic shadow-sm">T1</div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 uppercase italic font-black">Teacher Workspace</p>
                        <p className="text-lg font-black text-slate-900 uppercase tracking-tighter italic pt-1 uppercase italic font-black italic leading-none pt-1">Active Classroom A</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 rounded-3xl bg-white border border-emerald-100 shadow-sm animate-pulse" />
                      <div className="h-32 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all hover:border-emerald-500" />
                   </div>
                   <div className="h-4 w-2/3 bg-slate-200 rounded-full" />
                 </div>
              </div>
              {/* Floating Award */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center p-8 text-center space-y-2 rotate-12 shadow-3xl">
                <Award className="w-10 h-10" />
                <span className="text-[8px] font-black uppercase tracking-widest italic leading-tight">5-Star Educator System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. For Schools Section */}
      <section className="py-32 lg:py-48 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-last lg:order-first relative">
               <div className="p-12 lg:p-20 rounded-[5rem] bg-white border border-slate-200 shadow-3xl overflow-hidden group">
                  <div className="space-y-10">
                    <div className="flex items-center justify-between">
                       <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-none pt-1 group uppercase italic font-black italic">District Macro View</h3>
                       <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white"><ShieldCheck className="w-5 h-5" /></div>
                    </div>
                    <div className="space-y-4">
                       <div className="h-px w-full bg-slate-100" />
                       <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic">
                          <span>Schools Enrolled</span>
                          <span>12 / 12 Protocols</span>
                       </div>
                       <div className="h-px w-full bg-slate-100" />
                       <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic">
                          <span>Total Student Mastery</span>
                          <span className="text-emerald-500 font-black italic pt-1 italic">92.4% Optimal</span>
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 pt-4">
                       {[1, 2, 3, 4].map(idx => (
                         <div key={idx} className="h-20 rounded-2xl bg-slate-50 hover:bg-blue-600 transition-all duration-500" />
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            <div className="space-y-12 animate-in slide-in-from-right">
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/10">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">For <br /> <span className="text-blue-600">Institutions</span></h2>
                <p className="text-lg text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-md italic pt-1 uppercase italic font-black italic pt-1 uppercase italic font-black">
                  Scalable administration. Secure data environments. Seamless school-wide integration at any volume.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-4">
                {[
                  'Unified District Dashboard',
                  'Enterprise Security Infrastructure',
                  'Role-Based Administrative Access',
                  'Longitudinal Data Integration'
                ].map(item => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest italic pt-1 italic pt-1 uppercase italic font-black italic pt-1 uppercase italic font-black">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                 onClick={() => onNavigate('contact')}
                 className="px-10 py-5 rounded-2xl bg-slate-950 text-white font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl"
              >
                Request Strategic Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Alignment Protocol */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic pt-1 group uppercase italic font-black italic">Strategic Alignment Protocol</h2>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest italic leading-relaxed pt-1 uppercase italic font-black italic pt-1 uppercase italic font-black uppercase italic font-black">One platform. Infinite scaling potential. From individual classrooms to multi-state districts.</p>
          </div>
          <div className="h-16 w-1px bg-slate-200 mx-auto" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
             <div className="space-y-2">
                <p className="text-4xl font-black italic tracking-tighter uppercase italic font-black uppercase italic font-black italic leading-none pt-1">94%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 uppercase italic font-black uppercase italic font-black italic leading-none pt-1">Adoption Speed</p>
             </div>
             <div className="space-y-2">
                <p className="text-4xl font-black italic tracking-tighter uppercase italic font-black uppercase italic font-black italic leading-none pt-1">ZERO</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 uppercase italic font-black uppercase italic font-black italic leading-none pt-1">Implementation Friction</p>
             </div>
             <div className="space-y-2">
                <p className="text-4xl font-black italic tracking-tighter uppercase italic font-black uppercase italic font-black italic leading-none pt-1">24/7</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 uppercase italic font-black uppercase italic font-black italic leading-none pt-1">Admin Support Active</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
