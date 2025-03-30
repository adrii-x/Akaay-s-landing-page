
import React from 'react';
import { BookOpen, Heart, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, color, delay }: { icon: React.ElementType; title: string; description: string; color: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ y: -10 }}
    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-akaay-blue transition-all duration-300 group"
  >
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: delay + 0.2 }}
      className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-6`}
    >
      <Icon className="h-7 w-7 text-white" />
    </motion.div>
    <motion.h3 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.4 }}
      className="text-xl font-bold mb-3"
    >
      {title}
    </motion.h3>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.5 }}
      className="text-gray-300 mb-6"
    >
      {description}
    </motion.p>
    <motion.a 
      whileHover={{ x: 5 }}
      href="#" 
      className="inline-flex items-center text-akaay-blue hover:text-blue-400 font-medium"
    >
      Learn more
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.div>
    </motion.a>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="highlight">Our Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We provide comprehensive support through targeted programs focused on education, healthcare, and community development.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            icon={BookOpen}
            title="Education Initiatives"
            description="Creating access to quality education through school infrastructure improvement, teacher training, and scholarship programs."
            color="bg-blue-600"
            delay={0.1}
          />
          
          <ServiceCard
            icon={Heart}
            title="Healthcare Access"
            description="Improving healthcare accessibility through mobile clinics, health camps, and essential medical infrastructure in remote communities."
            color="bg-pink-600"
            delay={0.3}
          />
          
          <ServiceCard
            icon={Home}
            title="Community Development"
            description="Building sustainable communities through skills training, microfinance opportunities, and critical infrastructure projects."
            color="bg-amber-500"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
