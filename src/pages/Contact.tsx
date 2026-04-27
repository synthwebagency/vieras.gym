import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();

  const hours = [
    { day: language === 'pt' ? 'Domingo' : 'Sunday', time: language === 'pt' ? 'FECHADO' : 'CLOSED', highlight: false },
    { day: language === 'pt' ? 'Segunda - Quinta' : 'Monday - Thursday', time: language === 'pt' ? 'ABERTO 24 HORAS' : 'OPEN 24 HOURS', highlight: true },
    { day: language === 'pt' ? 'Sexta' : 'Friday', time: '05:30 AM - 12:00 PM', highlight: false },
    { day: language === 'pt' ? 'Sábado' : 'Saturday', time: language === 'pt' ? 'ABERTO 24 HORAS' : 'OPEN 24 HOURS', highlight: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO 
        title={t.nav.contact} 
        description={t.contact.visit} 
      />

      <section className="section-padding">
        <h1 className="text-5xl md:text-9xl italic mb-16 text-center leading-none">
          {t.contact.title.split(' ').slice(0, 2).join(' ')} <span className="text-primary italic">{t.contact.title.split(' ').slice(2).join(' ')}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Col */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-primary"></div>
                <h2 className="text-2xl italic tracking-tight uppercase">{t.contact.where}</h2>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 border border-primary/20">
                    <MapPin className="text-primary" size={24} />
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-display font-medium tracking-tight mb-2 uppercase italic leading-none">VIERAS GYM MAPUTO</p>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] italic">Avenida Vladimir Lenine, n°2052, Maputo, Moçambique</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-primary"></div>
                <h2 className="text-2xl italic tracking-tight uppercase">{t.contact.channels}</h2>
              </div>
              <div className="space-y-8">
                <a href="tel:828436590" className="flex gap-6 items-center group">
                    <div className="bg-primary/10 p-4 border border-primary/20 group-hover:bg-primary transition-all">
                        <Phone className="text-primary group-hover:text-white" size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-display font-bold tracking-widest text-white group-hover:text-primary italic transition-colors">828436590</span>
                </a>
                <div className="flex gap-4">
                    <a href="https://wa.me/258828436590" className="btn-primary flex items-center gap-3 text-[10px] tracking-widest grow justify-center">
                        <MessageCircle size={18} /> {language === 'pt' ? 'WHATSAPP DIRETO' : 'WHATSAPP DIRECT'}
                    </a>
                    <div className="flex gap-2">
                        <a href="#" className="border border-white/10 p-3 hover:bg-white hover:text-brand-black transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="border border-white/10 p-3 hover:bg-white hover:text-brand-black transition-colors">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
              </div>
            </div>

            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-px bg-primary"></div>
                    <h2 className="text-2xl italic tracking-tight uppercase">{t.contact.hours}</h2>
                </div>
                <div className="space-y-3 bg-brand-dark p-8 border border-white/5">
                    {hours.map((h, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] italic">{h.day}</span>
                            <span className={`font-display font-bold uppercase tracking-widest text-[10px] italic ${h.highlight ? 'text-primary animate-pulse' : 'text-white'}`}>
                                {h.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="h-[600px] lg:h-auto min-h-[400px] border border-white/10 relative transition-all duration-700">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14352.000000000000!2d32.5800000!3d-25.9500000!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a489112a2df%3A0xc3af87c95b6c31f4!2sAv.%20Vladimir%20Lenine%2C%20Maputo!5e0!3m2!1sen!2smz!4v1714150000000!5m2!1sen!2smz" 
              className="w-full h-full filter invert contrast-125 opacity-80"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-brand-black/90 backdrop-blur-md p-6 border border-primary/20 z-10">
                <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold mb-2 italic">Visit Us</p>
                <p className="text-white text-[10px] uppercase tracking-widest leading-relaxed">
                    {t.contact.visit}
                </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
