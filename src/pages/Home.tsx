import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { MarqueeRow } from '../components/Marquee';
import { useLanguage } from '../lib/LanguageContext';

const row1 = [
  { id: 1, type: 'video' as const, url: '/images/marquee_vid_1.mp4', alt: 'Training' },
  { id: 2, type: 'image' as const, url: '/images/marquee_img_1.jpg', alt: 'Vieras Gym' },
  { id: 3, type: 'image' as const, url: '/images/marquee_img_2.jpg', alt: 'Vieras Gym' },
  { id: 4, type: 'video' as const, url: '/images/marquee_vid_2.mp4', alt: 'Training' },
];

const row2 = [
  { id: 5, type: 'image' as const, url: '/images/marquee_img_3.jpg', alt: 'Vieras Gym' },
  { id: 6, type: 'video' as const, url: '/images/marquee_vid_3.mp4', alt: 'Training' },
  { id: 7, type: 'image' as const, url: '/images/marquee_img_4.jpg', alt: 'Vieras Gym' },
  { id: 8, type: 'image' as const, url: '/images/marquee_img_5.jpg', alt: 'Vieras Gym' },
];

export default function Home() {
  const { language, t } = useLanguage();

  const programs = [
    { 
      id: 'kickboxing', 
      title: t.programs.kickboxing.title, 
      desc: t.programs.kickboxing.desc, 
      image: '/images/kickboxing_bg.jpg' 
    },
    { 
      id: 'boxing', 
      title: t.programs.boxing.title, 
      desc: t.programs.boxing.desc, 
      image: '/images/boxing_bg.jpg' 
    },
    { 
      id: 'taekwondo', 
      title: t.programs.taekwondo.title, 
      desc: t.programs.taekwondo.desc, 
      image: '/images/taekwondo_bg.jpg' 
    },
    { 
      id: 'self-defense', 
      title: t.programs.selfDefense.title, 
      desc: t.programs.selfDefense.desc, 
      image: '/images/self_defense_bg.jpg' 
    },
    { 
      id: 'calistenia', 
      title: t.programs.calisthenics.title, 
      desc: t.programs.calisthenics.desc, 
      image: '/images/calisthenics_bg.jpg' 
    },
    { 
      id: 'gym-training', 
      title: t.programs.gym.title, 
      desc: t.programs.gym.desc, 
      image: '/images/gym_training_bg.jpg' 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Home" 
        description={t.footer.desc}
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40"></div>
        <div className="absolute inset-0 z-0 scale-105">
           <img 
            src="/images/hero_bg.jpg" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-[10rem] font-display font-bold italic tracking-tighter mb-4 leading-none"
          >
            VIERAS <span className="text-primary italic">GYM</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-2xl uppercase tracking-[0.4em] font-medium text-gray-300 mb-12"
          >
            {t.hero.sub}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/schedule" className="btn-primary">
              {t.nav.btnTime}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Inside Vieras Gym Carousel - MULTI ROW AUTO SLIDER */}
      <section className="py-24 bg-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-7xl italic leading-none">{t.inside}</h2>
        </div>

        <div className="flex flex-col gap-2">
            <MarqueeRow items={row1} direction="left" speed={30} />
            <MarqueeRow items={row2} direction="right" speed={35} />
        </div>
      </section>

      {/* Sports & Programs Slider */}
      <section className="py-32 relative bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-5xl md:text-8xl italic">{t.programs.title}</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <motion.div 
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[600px] overflow-hidden bg-brand-black border border-white/5"
            >
              <img 
                src={program.image} 
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-primary font-display font-bold text-[10px] tracking-[0.4em] mb-4 block uppercase">— {program.id}</span>
                <h3 className="text-4xl mb-6 italic">{program.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest leading-relaxed mb-10 group-hover:text-white transition-colors">
                  {program.desc}
                </p>
                <Link to={`/programs#${program.id}`} className="inline-flex items-center gap-3 text-white font-display text-[10px] tracking-[0.4em] hover:text-primary transition-colors">
                  {t.programs.btn} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Battle Prep Section */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/quote_bg.jpg" 
            alt="Coach" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          <motion.blockquote 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-9xl font-display font-bold italic tracking-tighter leading-[0.9] mb-12 uppercase"
          >
            {t.quote}
          </motion.blockquote>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.quoteDesc}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl italic mb-12 tracking-tighter uppercase">{t.cta.title}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/schedule" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              {t.nav.btnTime}
            </Link>
            <Link to="/contact" className="btn-outline border-white bg-white text-primary hover:bg-brand-black hover:text-white hover:border-brand-black">
              {t.cta.btnLoc}
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
