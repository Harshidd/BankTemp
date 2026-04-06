"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Areas from './pages/Areas';
import About from './pages/About';
import ReviewsPage from './pages/ReviewsPage';
import Contact from './pages/Contact';

export default function LocalServiceStarter() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'areas':
        return <Areas />;
      case 'about':
        return <About />;
      case 'reviews':
        return <ReviewsPage />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative">
      {/* Internal Routing Wrapper */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="animate-in fade-in duration-700">
        {renderPage()}
      </div>

      <Footer onPageChange={setCurrentPage} />

    </main>
  );
}
