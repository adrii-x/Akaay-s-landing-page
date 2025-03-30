
import React from 'react';
import { LineChart, Leaf, Users, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-all duration-300">
    <CardContent className="pt-6">
      <div className="mb-4 inline-flex items-center justify-center rounded-md bg-akaay-blue/10 p-2 text-akaay-blue">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight">Why Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The Akaay Foundation stands apart through our commitment to transparency, sustainable impact, and community empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <FeatureCard
            icon={LineChart}
            title="Transparency"
            description="We maintain complete transparency in all our operations. Every donation is tracked and its impact is documented and shared with our supporters."
          />
          
          <FeatureCard
            icon={Leaf}
            title="Sustainable Impact"
            description="Our programs are designed for long-term sustainability. We focus on building capacity within communities to ensure lasting positive change."
          />
          
          <FeatureCard
            icon={Users}
            title="Community-Driven"
            description="We believe that communities know their needs best. Our approach involves local stakeholders in all stages of program design and implementation."
          />
          
          <FeatureCard
            icon={RefreshCw}
            title="Continuous Support"
            description="We don't just implement and leave. Our programs include ongoing monitoring, evaluation, and support to ensure continued success."
          />
        </div>
        
        {/* Testimonial */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-akaay-gold text-6xl font-serif mb-4">"</div>
          <blockquote className="text-xl md:text-2xl mb-6 text-gray-300">
            The Akaay Foundation transformed our village by setting up a learning center with proper infrastructure and qualified teachers. For the first time, our children have access to quality education and a chance for a brighter future.
          </blockquote>
          <div className="flex items-center">
            <div className="ml-4">
              <p className="font-bold">Priya Sharma</p>
              <p className="text-sm text-gray-400">Village Head, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
