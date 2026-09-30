import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { addToCart } from '../../lib/cart';

export interface Option {
  id: string;
  title: string;
  price: number;
  comparePrice: number | null;
  badge: string | null;
  image: string;
  description: string;
  variantId: string;
}

const money = (n: number) => `$${n.toFixed(2)}`;

export default function PurchaseOptions({ options }: { options: Option[] }) {
  const [selected, setSelected] = useState(options[0].id);
  const [busy, setBusy] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);

  async function onAdd(o: Option) {
    setSelected(o.id);
    if (!o.variantId) {
      setNote('Shopify is not connected yet. Add the variant ID to enable Add to Cart.');
      return;
    }
    setBusy(o.id);
    setNote(null);
    try {
      await addToCart(o.variantId, 1);
      setNote('Added to your cart.');
    } catch {
      setNote('Something went wrong. Please try again.');
    } finally {
      setBusy(null);
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div id="buynow" role="radiogroup" aria-label="Choose your option" className="flex flex-col gap-4">
        {options.map((o) => {
          const on = selected === o.id;
          return (
            <motion.div
              key={o.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.45, delay: options.indexOf(o) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(o.id)}
              className={`relative flex cursor-pointer items-start gap-3 rounded-xl border bg-white/60 p-3 transition-colors sm:gap-4 sm:p-4 ${
                on ? 'border-[#8b6114] shadow-[0_0_0_1px_#8b6114]' : 'border-[#d8cdb8] hover:border-[#b58a3c] hover:shadow-[0_10px_24px_rgba(120,80,20,0.14)]'
              }`}
            >
              <label className="flex shrink-0 items-center self-center p-1">
                <input
                  type="radio"
                  name="purchase-option"
                  value={o.id}
                  checked={on}
                  onChange={() => setSelected(o.id)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#8b6114] peer-focus-visible:ring-2 peer-focus-visible:ring-[#8b6114] peer-focus-visible:ring-offset-2"
                >
                  {on && <span className="h-3 w-3 rounded-full bg-[#8b6114]" />}
                </span>
                <span className="sr-only">{o.title}</span>
              </label>

              <img
                src={o.image}
                alt=""
                width={120}
                height={120}
                loading="lazy"
                className="h-[84px] w-[84px] shrink-0 rounded-lg object-cover sm:h-[120px] sm:w-[120px]"
              />

              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-nunito text-[16px] font-extrabold uppercase leading-tight text-black sm:text-[18px]">
                    {o.title}
                  </h3>
                  {o.badge && (
                    <span className="rounded-full bg-gold px-2.5 py-0.5 font-nunito text-[12px] font-bold text-white">
                      {o.badge}
                    </span>
                  )}
                </div>
                <p className="font-nunito text-[17px] font-bold text-black">
                  {money(o.price)}
                  {o.comparePrice && (
                    <span className="ml-2 text-[14px] font-normal text-[#777] line-through">
                      {money(o.comparePrice)}
                    </span>
                  )}
                </p>
                <p className="font-nunito text-[14px] leading-snug text-[#333] sm:text-[15px]">{o.description}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAdd(o);
                  }}
                  disabled={busy === o.id}
                  className="mt-1.5 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#8b6114] px-6 font-nunito text-[15px] font-bold text-white transition hover:bg-[#7a5410] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b6114] active:scale-[0.98] disabled:opacity-60 sm:w-[190px]"
                >
                  {busy === o.id ? 'Adding…' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          );
        })}
        <AnimatePresence>
          {note && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-nunito text-sm text-[#7f500d]"
            >
              {note}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
