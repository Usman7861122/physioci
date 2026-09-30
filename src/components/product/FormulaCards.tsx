import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

export interface FormulaCard {
  icon: string;
  title: string[];
  summary: string;
  panel: string; // trusted static HTML
}

function Card({ card, index }: { card: FormulaCard; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `formula-panel-${index}`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(140,100,30,0.22)' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center rounded-[14px] border border-white/70 bg-gradient-to-b from-[#f9f2e6]/85 to-[#efe3cf]/80 p-6 text-center shadow-[0_8px_24px_rgba(140,100,30,0.12)]"
    >
      <img src={card.icon} alt="" width={132} height={132} loading="lazy" className="h-[132px] w-[132px]" />

      <h3 className="mt-5 flex min-h-[56px] items-center justify-center font-nunito text-[21px] font-extrabold leading-[1.25] text-[#1b1b1f]">
        <span>
          {card.title.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
      </h3>

      <p className="mt-2 min-h-[72px] max-w-[260px] font-nunito text-[16px] leading-6 text-[#33333a]">{card.summary}</p>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#946826] bg-white/60 px-9 py-3 font-nunito text-[16px] font-semibold leading-none text-[#2b2b2b] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
      >
        <span>{open ? 'Read Less' : 'Read More'}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          className={`h-[14px] w-[14px] fill-current transition-transform duration-300 ${open ? '-rotate-90' : ''}`}
        >
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
            <div
              className="formula-panel pt-5 text-[15px] leading-6 text-[#2b2b33]"
              dangerouslySetInnerHTML={{ __html: card.panel }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function FormulaCards({ cards }: { cards: FormulaCard[] }) {
  return (
    <MotionConfig reducedMotion="user">
      <ul className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c, i) => (
          <Card key={c.title.join(' ')} card={c} index={i} />
        ))}
      </ul>
    </MotionConfig>
  );
}
