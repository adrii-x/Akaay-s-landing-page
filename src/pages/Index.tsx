
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-akaay-background text-akaay-text">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
