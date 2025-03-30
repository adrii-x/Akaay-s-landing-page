
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight">About Us</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The Akaay Foundation is dedicated to creating sustainable impact through education, healthcare, and community development projects across India. We believe in transparency, efficiency, and direct action.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Mission Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-all duration-300 h-full transform hover:scale-105">
              <CardHeader className="pb-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-14 h-14 rounded-full bg-akaay-blue/20 flex items-center justify-center mb-4"
                >
                  <Target className="h-8 w-8 text-akaay-blue" />
                </motion.div>
                <CardTitle className="text-2xl font-bold">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To identify and support underserved communities through direct action and sustainable programs that create lasting positive change without bureaucratic delays.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-all duration-300 h-full transform hover:scale-105">
              <CardHeader className="pb-3">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-full bg-akaay-blue/20 flex items-center justify-center mb-4"
                >
                  <Heart className="h-8 w-8 text-akaay-blue" />
                </motion.div>
                <CardTitle className="text-2xl font-bold">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A future where every Indian community has access to quality education, healthcare, and opportunities for self-sustenance, leading to a more equitable and empowered society.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Values Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-all duration-300 h-full transform hover:scale-105">
              <CardHeader className="pb-3">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, yoyo: Infinity }}
                  className="w-14 h-14 rounded-full bg-akaay-blue/20 flex items-center justify-center mb-4"
                >
                  <Users className="h-8 w-8 text-akaay-blue" />
                </motion.div>
                <CardTitle className="text-2xl font-bold">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We are guided by integrity, compassion, and a commitment to excellence. We believe in community participation, transparency in operations, and measurable outcomes for all our initiatives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
