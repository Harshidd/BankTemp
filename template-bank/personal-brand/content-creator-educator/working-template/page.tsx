"use client";

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function ContentCreatorEducator() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'products':
        return <Products onNavigate={setCurrentPage} />;
      case 'resources':
        return <Resources onNavigate={setCurrentPage} />;
      case 'community':
        return <Community onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'faq':
        return <FAQ onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="animate-in fade-in duration-700">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
