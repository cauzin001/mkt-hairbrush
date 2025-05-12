import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-purple-600' : 'text-purple-700'}`}>
              StylePro
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-700 
                        px-4 py-2 rounded-full transition-colors">
              <ShoppingBag size={18} />
              <span>Buy Now</span>
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute w-full left-0 right-0 transition-all`}>
        <div className="container-custom py-4 space-y-3">
          <a href="#benefits" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Benefits</a>
          <a href="#testimonials" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Testimonials</a>
          <a href="#features" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Features</a>
          <a href="#pricing" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Pricing</a>
          <a href="#faq" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">FAQ</a>
          <button className="flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-700 
                    px-4 py-2 rounded-full transition-colors my-2">
            <ShoppingBag size={18} />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;