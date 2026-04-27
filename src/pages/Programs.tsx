import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/LanguageContext';

export default function Programs() {
  const { language, t } = useLanguage();

  const programDetails = [
    {
      id: 'kickboxing',
      title: t.programs.kickboxing.title,
      intro: t.programs.kickboxing.intro,
      benefits: t.programs.kickboxing.benefits,
      image: '/images/kickboxing_bg.jpg'
    },
    {
      id: 'boxing',
      title: t.programs.boxing.title,
      intro: t.programs.boxing.intro,
      benefits: t.programs.boxing.benefits,
      image: '/images/boxing_bg.jpg'
    },
    {
      id: 'taekwondo',
      title: t.programs.taekwondo.title,
      intro: t.programs.taekwondo.intro,
      benefits: t.programs.taekwondo.benefits,
      image: '/images/taekwondo_bg.jpg'
    },
    {
      id: 'self-defense',
      title: t.programs.selfDefense.title,
      intro: t.programs.selfDefense.intro,
      benefits: t.programs.selfDefense.benefits,
      image: '/images/self_defense_bg.jpg'
    },
    {
      id: 'calistenia',
      title: t.programs.calisthenics.title,
      intro: t.programs.calisthenics.intro,
      benefits: t.programs.calisthenics.benefits,
      image: '/images/calisthenics_bg.jpg'
    },
    {
      id: 'gym-training',
      title: t.programs.gym.title,
      intro: t.programs.gym.intro,
      benefits: t.programs.gym.benefits,
      image: '/images/gym_training_bg.jpg'
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
        title={t.nav.programs} 
        description={t.programs.sub} 
      />

      {/* Header */}
      <section className="bg-brand-black py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl md:text-8xl italic mb-6 leading-tight uppercase"
          >
            {t.programs.deepTitle.split(' ').slice(0, 2).join(' ')} <br/><span className="text-primary italic">{t.programs.deepTitle.split(' ').slice(2).join(' ')}</span>
          </motion.h1>
          <div className="w-24 h-2 bg-primary mb-10"></div>
          <p className="text-gray-400 uppercase tracking-widest text-sm md:text-xl max-w-3xl leading-relaxed">
            {t.programs.sub}
          </p>
        </div>
      </section>

      {/* Program Deep-Dive List */}
      <section className="bg-brand-black">
        {programDetails.map((program, idx) => (
          <div 
            key={program.id}
            id={program.id}
            className={`py-24 border-b border-white/5 ${idx % 2 !== 0 ? 'bg-brand-dark' : 'bg-brand-black'}`}
          >
            <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`order-2 ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 border border-primary/20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="relative z-10 w-full aspect-video md:aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`order-1 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <span className="text-primary font-display font-bold text-[10px] tracking-[0.4em] mb-4 block uppercase leading-none italic">— {program.id}</span>
                <h2 className="text-4xl md:text-6xl italic mb-8 uppercase">{program.title}</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed italic">
                  {program.intro}
                </p>
                
                <div className="space-y-4 mb-12">
                  {program.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex gap-4 items-start group">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em] transition-colors group-hover:text-white leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/258828436590" className="btn-primary text-[10px] tracking-[0.3em]">
                  {language === 'pt' ? 'INSCREVER-SE AGORA' : 'SIGN UP NOW'}
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
}
