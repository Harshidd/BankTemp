"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="pt-20">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
