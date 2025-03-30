
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight">Contact Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to us. We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-300 mb-6">We'll get back to you as soon as possible.</p>
                  <Button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border border-gray-700"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} min-h-[120px]`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-akaay-blue/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-akaay-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-300">
                      42 Community Lane, Sector 18<br />
                      New Delhi, 110001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-akaay-blue/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-akaay-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:contact@akaayfoundation.org" className="text-gray-300 hover:text-akaay-blue">
                      contact@akaayfoundation.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-akaay-blue/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-akaay-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+911140505060" className="text-gray-300 hover:text-akaay-blue">
                      +91 11 4050 5060
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-gray-800 hover:bg-akaay-blue/20 p-4 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-akaay-blue" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-akaay-blue/20 p-4 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-akaay-blue" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-akaay-blue/20 p-4 rounded-full transition-colors">
                  <Facebook className="h-5 w-5 text-akaay-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
