import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

export interface AdvancedCard {
  icon: string;
  title: string[];
  panel: string; // trusted static HTML
}

function Card({ card, index }: { card: AdvancedCard; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `adv-panel-${index}`;
  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(140,100,30,0.22)' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center rounded-[12px] border border-white/70 bg-[#f4ebdb]/80 p-5 text-center shadow-[0_8px_24px_rgba(140,100,30,0.12)] backdrop-blur-[2px]"
    >
      <img src={card.icon} alt="" width={190} height={190} loading="lazy" className="h-[150px] w-[150px] sm:h-[170px] sm:w-[170px]" />
      <h3 className="mt-4 flex min-h-[60px] items-center justify-center font-nunito text-[22px] font-normal leading-[1.25] text-[#2b2b2b]">
        <span>
          {card.title.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
      </h3>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex min-h-[44px] w-full max-w-[240px] items-center justify-center gap-2 rounded-full border-[1.5px] border-[#b58a3c] bg-white/40 px-6 font-nunito text-[15px] font-semibold text-[#6a4a12] transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
      >
        <span>{open ? 'Read Less' : 'Read More'}</span>
        <svg aria-hidden="true" viewBox="0 0 448 512" className={`h-[13px] w-[13px] fill-current transition-transform duration-300 ${open ? '-rotate-90' : ''}`}>
          <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <div className="formula-panel pt-4 text-[15px] leading-6 text-[#2b2b33]" dangerouslySetInnerHTML={{ __html: card.panel }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function AdvancedCards({ cards }: { cards: AdvancedCard[] }) {
  return (
    <MotionConfig reducedMotion="user">
      <ul className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Card key={c.title.join(' ')} card={c} index={i} />
        ))}
      </ul>
    </MotionConfig>
  );
}
