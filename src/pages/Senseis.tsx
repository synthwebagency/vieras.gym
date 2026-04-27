import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/LanguageContext';

export default function Senseis() {
  const { language, t } = useLanguage();

  const senseis = [
    {
      name: 'SENSEI VIERA',
      role: 'Head Coach - Kickboxing & Boxe',
      bio: language === 'pt' ? 'Especialista em strikers de elite com mais de 15 anos de experiência competitiva. Disciplina é a base de tudo.' : 'Specialist in elite strikers with over 15 years of competitive experience. Discipline is the basis of everything.',
      image: '/images/sensei_viera.jpg'
    },
    {
      name: 'SENSEI IVAN',
      role: 'Instructor - Calistenia',
      bio: language === 'pt' ? 'Mestre do movimento corporal. Ivan foca em força funcional e o domínio total do peso do corpo.' : 'Master of body movement. Ivan focuses on functional strength and total body weight mastery.',
      image: '/images/sensei_ivan.jpg'
    },
    {
      name: 'SENSEI LUCAS',
      role: 'Taekwondo 4º DAN',
      bio: language === 'pt' ? 'Especialista em artes marciais coreanas. Foco em precisão, velocidade de chutos e agilidade mental.' : 'Specialist in Korean martial arts. Focus on precision, kick speed, and mental agility.',
      image: '/images/sensei_lucas.jpg'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO 
        title={t.nav.senseis} 
        description={t.senseis.sub} 
      />

      <section className="section-padding">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] italic">{t.senseis.header}</span>
          </div>
          <h1 className="text-5xl md:text-8xl italic mb-10 leading-none uppercase">{t.senseis.title.split(' ').slice(0, 2).join(' ')} <span className="text-primary italic">{t.senseis.title.split(' ').slice(2).join(' ')}</span></h1>
          <p className="text-gray-400 uppercase text-xs md:text-lg tracking-[0.2em] max-w-3xl border-l border-white/10 pl-8 leading-relaxed">
            {t.senseis.sub}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {senseis.map((sensei, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-dark group border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={sensei.image} 
                  alt={sensei.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl italic mb-2 tracking-tighter transition-colors group-hover:text-primary uppercase">{sensei.name}</h3>
                <span className="text-primary font-display font-medium text-[10px] tracking-[0.2em] uppercase block mb-6 italic">{sensei.role}</span>
                <p className="text-gray-500 uppercase text-[9px] tracking-widest leading-relaxed">
                  {sensei.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
            <h2 className="text-3xl md:text-5xl italic mb-10 tracking-tighter uppercase">{t.senseis.join}</h2>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-10 max-w-xl mx-auto">
                {t.senseis.joinDesc}
            </p>
            <a href="https://wa.me/258828436590" className="btn-outline text-[10px] tracking-[0.3em]">
                {t.nav.contact}
            </a>
        </div>
      </section>
    </motion.div>
  );
}
