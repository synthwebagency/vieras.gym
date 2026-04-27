import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/LanguageContext';

export default function Schedule() {
  const { language, t } = useLanguage();
  
  const ptDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const enDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const days = language === 'pt' ? ptDays : enDays;

  const scheduleData = [
    { time: '05:30 - 07:00', activities: { 1: 'Kickboxing', 2: 'Boxe', 3: 'Calistenia', 4: 'Taekwondo', 5: 'Kickboxing' } },
    { time: '09:00 - 10:30', activities: { 1: 'Calistenia', 2: 'Defesa Pessoal', 3: 'Calistenia', 4: 'Boxe', 5: 'Treino Livre' } },
    { time: '12:00 - 13:30', activities: { 1: 'Boxe', 2: 'Taekwondo', 3: 'Kickboxing', 4: 'Calistenia', 6: 'Treino Especial' } },
    { time: '17:00 - 18:30', activities: { 1: 'Taekwondo', 2: 'Kickboxing', 3: 'Defesa Pessoal', 4: 'Boxe', 5: 'Kickboxing', 6: 'Treino Livre' } },
    { time: '19:00 - 20:30', activities: { 1: 'Kickboxing', 2: 'Boxe', 3: 'Taekwondo', 4: 'Defesa Pessoal', 5: 'Calistenia' } },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO 
        title={t.nav.schedule} 
        description={t.schedule.note} 
      />

      <section className="section-padding">
        <header className="mb-20 text-center">
          <span className="text-primary font-display font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block italic">{t.schedule.header}</span>
          <h1 className="text-5xl md:text-8xl italic uppercase">{t.schedule.title.split(' ')[0]} <span className="text-primary italic">{t.schedule.title.split(' ')[1]}</span></h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </header>

        {/* Timetable Desktop */}
        <div className="hidden lg:block overflow-x-auto border border-white/5 bg-brand-dark">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-black border-b border-white/10 uppercase">
                <th className="p-8 font-display tracking-widest text-primary text-[10px] border-r border-white/10 w-48 italic">Time</th>
                {days.map((day, i) => (
                  <th key={i} className={`p-8 font-display tracking-widest text-[10px] italic ${i === 0 ? 'text-gray-600' : 'text-white'}`}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((slot, sIdx) => (
                <tr key={sIdx} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                  <td className="p-8 font-display text-gray-500 text-[10px] tracking-widest border-r border-white/10 italic">
                    {slot.time}
                  </td>
                  {days.map((_, dIdx) => (
                    <td key={dIdx} className="p-8 border-r border-white/5 last:border-r-0">
                      {slot.activities[dIdx as keyof typeof slot.activities] ? (
                        <div className="group/item">
                          <span className="block text-white font-display font-bold text-[10px] tracking-widest uppercase transition-colors group-hover/item:text-primary italic">
                            {slot.activities[dIdx as keyof typeof slot.activities]}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-800 text-[10px] uppercase font-bold tracking-widest">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Schedule List View */}
        <div className="lg:hidden space-y-12">
          {days.filter((_, idx) => idx !== 0).map((day, dIdx) => (
            <div key={dIdx}>
              <h3 className="text-2xl text-primary italic mb-6 border-b border-primary/20 pb-2 uppercase">{day}</h3>
              <div className="space-y-4">
                {scheduleData.map((slot, sIdx) => (
                  slot.activities[(dIdx + 1) as keyof typeof slot.activities] && (
                    <div key={sIdx} className="bg-brand-dark p-6 border border-white/5 flex justify-between items-center group">
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] mb-1 block italic">{slot.time}</span>
                        <h4 className="text-white font-display font-bold tracking-widest uppercase group-hover:text-primary transition-colors italic text-sm">
                          {slot.activities[(dIdx + 1) as keyof typeof slot.activities]}
                        </h4>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto bg-brand-dark p-10 border border-primary/10">
          <p className="text-gray-400 uppercase text-[10px] tracking-[0.2em] italic mb-8 leading-relaxed">
            {t.schedule.note}
          </p>
          <a href="https://wa.me/258828436590" className="btn-primary text-[10px] tracking-[0.3em] font-bold">
            {t.schedule.fullBtn}
          </a>
        </div>
      </section>
    </motion.div>
  );
}
