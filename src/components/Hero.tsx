
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen grid-pattern flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter flex flex-col md:block">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              India's first.
            </motion.span>{" "}
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="highlight-gold mt-4 md:mt-0 md:ml-2"
            >
              Humanitarian
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-10"
          >
            Zero bureaucracy, only impact
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Button className="btn btn-primary w-full sm:w-auto">
              Donate Now
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
              >
                <ArrowRight className="ml-2" size={18} />
              </motion.span>
            </Button>
            <Button className="btn btn-secondary w-full sm:w-auto">
              Download Impact Report
              <motion.span 
                animate={{ y: [0, -3, 0] }} 
                transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
              >
                <Download className="ml-2" size={18} />
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
              Handpicking 40 Communities
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent to-akaay-blue"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
