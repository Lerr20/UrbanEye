import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { SITE_TITLE } from './constants';

function App() {
  useEffect(() => {
    document.title = SITE_TITLE;
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;