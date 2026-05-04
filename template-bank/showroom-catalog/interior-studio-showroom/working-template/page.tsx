"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Collections from './pages/Collections';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function InteriorStudioTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects onNavigate={setCurrentPage} />;
      case 'collections':
        return <Collections onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col selection:bg-stone-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-24 lg:pt-32">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
