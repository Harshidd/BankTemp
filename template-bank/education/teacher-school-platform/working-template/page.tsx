"use client";

import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import TeachersSchools from './pages/TeachersSchools';
import Reporting from './pages/Reporting';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function TeacherSchoolPlatform() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'solutions':
        return <Solutions onNavigate={setCurrentPage} />;
      case 'audience':
        return <TeachersSchools onNavigate={setCurrentPage} />;
      case 'reporting':
        return <Reporting onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'faq':
        return <FAQ onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
