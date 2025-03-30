
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight">About Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The Akaay Foundation is dedicated to creating sustainable impact through education, healthcare, and community development projects across India. We believe in transparency, efficiency, and direct action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Mission Card */}
          <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-colors">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-full bg-akaay-blue/20 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-akaay-blue" />
              </div>
              <CardTitle className="text-2xl font-bold">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                To identify and support underserved communities through direct action and sustainable programs that create lasting positive change without bureaucratic delays.
              </p>
            </CardContent>
          </Card>
          
          {/* Vision Card */}
          <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-colors">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-full bg-akaay-blue/20 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-akaay-blue" />
              </div>
              <CardTitle className="text-2xl font-bold">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                A future where every Indian community has access to quality education, healthcare, and opportunities for self-sustenance, leading to a more equitable and empowered society.
              </p>
            </CardContent>
          </Card>
          
          {/* Values Card */}
          <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-colors">
            <CardHeader className="pb-3">
              <div className="w-14 h-14 rounded-full bg-akaay-blue/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-akaay-blue" />
              </div>
              <CardTitle className="text-2xl font-bold">Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We are guided by integrity, compassion, and a commitment to excellence. We believe in community participation, transparency in operations, and measurable outcomes for all our initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
