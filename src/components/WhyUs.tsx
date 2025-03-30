
import React from 'react';
import { LineChart, Leaf, Users, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, delay: 0.1 * index }}
  >
    <Card className="bg-gray-900 border-gray-800 hover:border-akaay-blue transition-all duration-300 h-full hover:shadow-lg hover:shadow-akaay-blue/20">
      <CardContent className="pt-6">
        <motion.div 
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center justify-center rounded-md bg-akaay-blue/10 p-2 text-akaay-blue"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const WhyUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight">Why Choose Us</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The Akaay Foundation stands apart through our commitment to transparency, sustainable impact, and community empowerment.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <FeatureCard
            icon={LineChart}
            title="Transparency"
            description="We maintain complete transparency in all our operations. Every donation is tracked and its impact is documented and shared with our supporters."
            index={0}
          />
          
          <FeatureCard
            icon={Leaf}
            title="Sustainable Impact"
            description="Our programs are designed for long-term sustainability. We focus on building capacity within communities to ensure lasting positive change."
            index={1}
          />
          
          <FeatureCard
            icon={Users}
            title="Community-Driven"
            description="We believe that communities know their needs best. Our approach involves local stakeholders in all stages of program design and implementation."
            index={2}
          />
          
          <FeatureCard
            icon={RefreshCw}
            title="Continuous Support"
            description="We don't just implement and leave. Our programs include ongoing monitoring, evaluation, and support to ensure continued success."
            index={3}
          />
        </div>
        
        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto hover:border-akaay-gold transition-all duration-500"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="text-akaay-gold text-6xl font-serif mb-4"
          >
            "
          </motion.div>
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-6 text-gray-300"
          >
            The Akaay Foundation transformed our village by setting up a learning center with proper infrastructure and qualified teachers. For the first time, our children have access to quality education and a chance for a brighter future.
          </motion.blockquote>
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center"
          >
            <div className="ml-4">
              <p className="font-bold">Priya Sharma</p>
              <p className="text-sm text-gray-400">Village Head, Rajasthan</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
