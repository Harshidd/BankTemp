"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Plans from './pages/Plans';
import Projects from './pages/Projects';
import About from './pages/About';
import Areas from './pages/Areas';
import Contact from './pages/Contact';

export default function SeoHvacServiceTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'plans':
        return <Plans onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'areas':
        return <Areas onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col selection:bg-blue-200 selection:text-blue-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow w-full">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
