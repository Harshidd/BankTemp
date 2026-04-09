"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function ClinicExpertTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'team':
        return <Team />;
      case 'reviews':
        return <Reviews />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans relative">
      {/* 1. Navigation */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* 2. Content */}
      <div className="flex flex-col relative z-20 animate-in fade-in duration-1000">
        {renderPage()}
        <Footer onPageChange={setCurrentPage} />
      </div>

      {/* 3. Global Aesthetic Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.02),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.01),transparent_50%)]" />
    </main>
  );
}
