import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter italic mb-6 block">
              VIERAS <span className="text-primary italic">GYM</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 uppercase text-xs tracking-wider leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/258828436590" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display uppercase tracking-[0.2em] text-[10px] text-primary mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em]">
              <li><Link to="/" className="hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">{t.nav.programs}</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">{t.nav.schedule}</Link></li>
              <li><Link to="/senseis" className="hover:text-primary transition-colors">{t.nav.senseis}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Special Resources */}
          <div>
            <h4 className="font-display uppercase tracking-[0.2em] text-[10px] text-primary mb-6">{t.footer.resources}</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em]">
              <li>
                <a 
                  href="https://share.google/hLmzbKDmPHrsdZSfQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Playlist Vieras
                </a>
              </li>
              <li>
                <a 
                  href="https://share.google/ojCgKe1od31XkrL9W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Galeria 2024
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-gray-500">
          <p>© {new Date().getFullYear()} VIERAS GYM. {t.footer.rights}</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACIDADE</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMOS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
