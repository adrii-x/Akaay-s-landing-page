
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen grid-pattern flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
            India's first. <span className="highlight-gold">Humanitarian</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Zero bureaucracy, only impact
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Button className="btn btn-primary w-full sm:w-auto">
              Donate Now
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button className="btn btn-secondary w-full sm:w-auto">
              Download Impact Report
              <Download className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="animate-fade-up">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
              Handpicking 40 Communities
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-akaay-blue"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
