
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDark(!isDark);
    const newTheme = !isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };
  
  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDark(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-akaay-background/95 backdrop-blur-sm py-3 shadow-lg' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <a href="#" className="text-2xl font-bold">
            <span className="text-akaay-blue">Akaay</span> Foundation
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.button 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => scrollToSection('about')} 
            className="text-akaay-text hover:text-akaay-blue transition-colors"
          >
            About Us
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollToSection('services')} 
            className="text-akaay-text hover:text-akaay-blue transition-colors"
          >
            Services
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => scrollToSection('why-us')} 
            className="text-akaay-text hover:text-akaay-blue transition-colors"
          >
            Why Us
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => scrollToSection('contact')} 
            className="text-akaay-text hover:text-akaay-blue transition-colors"
          >
            Contact
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-primary"
            >
              Start Your Journey
            </Button>
          </motion.div>
          
          {/* Theme toggle */}
          <motion.div
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-2"
          >
            <Moon size={16} className={isDark ? "text-akaay-blue" : "text-gray-500"} />
            <Switch 
              checked={!isDark}
              onCheckedChange={toggleTheme}
            />
            <Sun size={16} className={!isDark ? "text-akaay-gold" : "text-gray-500"} />
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="flex items-center space-x-2"
          >
            <Moon size={16} className={isDark ? "text-akaay-blue" : "text-gray-500"} />
            <Switch 
              checked={!isDark}
              onCheckedChange={toggleTheme}
            />
            <Sun size={16} className={!isDark ? "text-akaay-gold" : "text-gray-500"} />
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-akaay-background/95 backdrop-blur-sm py-4 px-6 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              <motion.button 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection('about')} 
                className="text-akaay-text hover:text-akaay-blue transition-colors py-2"
              >
                About Us
              </motion.button>
              <motion.button 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection('services')} 
                className="text-akaay-text hover:text-akaay-blue transition-colors py-2"
              >
                Services
              </motion.button>
              <motion.button 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('why-us')} 
                className="text-akaay-text hover:text-akaay-blue transition-colors py-2"
              >
                Why Us
              </motion.button>
              <motion.button 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('contact')} 
                className="text-akaay-text hover:text-akaay-blue transition-colors py-2"
              >
                Contact
              </motion.button>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button onClick={() => scrollToSection('contact')} className="btn btn-primary w-full">
                  Start Your Journey
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
