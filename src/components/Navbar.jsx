import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/85 backdrop-blur-lg border-b border-black/5 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 z-50 relative group">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-heading">
            Studio
          </span>
          <span className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-brand-red shadow-[0_0_15px_rgba(230,26,35,0.6)] group-hover:scale-110 transition-transform duration-300">
            <Play size={10} fill="white" className="text-white ml-0.5" />
          </span>
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-red font-heading">
            Grill
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-brand-red ${
                location.pathname === link.path ? 'text-brand-red' : 'text-slate-600'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-brand-red"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-xs tracking-widest px-6 py-2.5 rounded-full font-bold">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative text-slate-900 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-black uppercase tracking-widest font-heading transition-colors ${
                  location.pathname === link.path ? 'text-brand-red' : 'text-slate-900 hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 text-sm tracking-widest px-8 py-3 rounded-full"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
