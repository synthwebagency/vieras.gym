import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.programs, path: '/programs' },
    { name: t.nav.schedule, path: '/schedule' },
    { name: t.nav.senseis, path: '/senseis' },
    { name: t.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter italic">
            VIERAS <span className="text-primary group-hover:text-white transition-colors">GYM</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display uppercase text-xs tracking-widest hover:text-primary transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            <button 
              onClick={() => setLanguage('pt')}
              className={`text-[10px] tracking-widest uppercase font-bold transition-colors ${language === 'pt' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
            >
              PT
            </button>
            <div className="w-px h-3 bg-white/10"></div>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] tracking-widest uppercase font-bold transition-colors ${language === 'en' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <Link to="/schedule" className="btn-primary py-2 px-6 text-[10px]">
            {t.nav.btnTime}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display uppercase text-2xl tracking-widest ${
                  location.pathname === link.path ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/schedule" className="btn-primary mt-4">
              Ver Horário
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
