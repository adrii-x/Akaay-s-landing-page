
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';

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
    // In a real app with next-themes, you would toggle the theme here
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-akaay-background/95 backdrop-blur-sm py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-akaay-blue">Akaay</span> Foundation
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-akaay-text hover:text-akaay-blue transition-colors">About Us</button>
          <button onClick={() => scrollToSection('services')} className="text-akaay-text hover:text-akaay-blue transition-colors">Services</button>
          <button onClick={() => scrollToSection('why-us')} className="text-akaay-text hover:text-akaay-blue transition-colors">Why Us</button>
          <button onClick={() => scrollToSection('contact')} className="text-akaay-text hover:text-akaay-blue transition-colors">Contact</button>
          <Button onClick={() => scrollToSection('contact')} className="btn btn-primary">Start Your Journey</Button>
          
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-akaay-background/95 backdrop-blur-sm py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-akaay-text hover:text-akaay-blue transition-colors py-2">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-akaay-text hover:text-akaay-blue transition-colors py-2">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="text-akaay-text hover:text-akaay-blue transition-colors py-2">Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-akaay-text hover:text-akaay-blue transition-colors py-2">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="btn btn-primary w-full">Start Your Journey</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
