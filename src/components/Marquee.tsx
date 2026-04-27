import { motion } from 'motion/react';

interface MarqueeRowProps {
  items: Array<{ id: number; type: 'image' | 'video'; url: string; alt: string }>;
  direction?: 'left' | 'right';
  speed?: number;
}

export function MarqueeRow({ items, direction = 'left', speed = 40 }: MarqueeRowProps) {
  return (
    <div className="flex overflow-hidden group select-none py-1">
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-nowrap whitespace-nowrap min-w-max gap-2 px-1"
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`}
            className="w-[280px] md:w-[400px] aspect-video flex-shrink-0 bg-brand-dark overflow-hidden group/item border border-white/5"
          >
            {item.type === 'video' ? (
              <video
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-all duration-700"
              />
            ) : (
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover/item:scale-100"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
