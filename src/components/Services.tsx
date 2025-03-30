
import React from 'react';
import { BookOpen, Heart, Home, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, color }: { icon: React.ElementType; title: string; description: string; color: string }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-akaay-blue transition-all duration-300 group">
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-6`}>
      <Icon className="h-7 w-7 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <a href="#" className="inline-flex items-center text-akaay-blue hover:text-blue-400 font-medium">
      Learn more
      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight">Our Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive support through targeted programs focused on education, healthcare, and community development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            icon={BookOpen}
            title="Education Initiatives"
            description="Creating access to quality education through school infrastructure improvement, teacher training, and scholarship programs."
            color="bg-blue-600"
          />
          
          <ServiceCard
            icon={Heart}
            title="Healthcare Access"
            description="Improving healthcare accessibility through mobile clinics, health camps, and essential medical infrastructure in remote communities."
            color="bg-pink-600"
          />
          
          <ServiceCard
            icon={Home}
            title="Community Development"
            description="Building sustainable communities through skills training, microfinance opportunities, and critical infrastructure projects."
            color="bg-amber-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
