"use client";

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Offers from './pages/Offers';
import Resources from './pages/Resources';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function AuthorityExpertBrand() {
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
      case 'offers':
        return <Offers onNavigate={setCurrentPage} />;
      case 'resources':
        return <Resources onNavigate={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="animate-in fade-in duration-700">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
