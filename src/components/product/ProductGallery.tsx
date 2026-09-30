import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

export interface GalleryImage {
  thumb: string;
  src: string;
  full: string;
  alt: string;
}

export default function ProductGallery({ images, badge }: { images: GalleryImage[]; badge?: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const current = images[active];

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative w-full max-w-[540px]">
        {badge && (
          <span className="absolute -left-[6px] -top-[6px] z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#7a6a12] text-[13.7px] font-bold leading-none text-white">
            {badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label="View full-size image"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>

        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={540}
              height={540}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full object-contain transition-transform duration-500 ease-out hover:scale-[1.04]"
            />
          </AnimatePresence>
        </div>

        <ul className="-mx-[5px] mt-[10px] flex">
          {images.map((img, i) => (
            <li key={img.thumb} className="min-w-0 basis-1/6 px-[5px] pb-[10px]">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === active}
                className="block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  width={80}
                  height={80}
                  loading="lazy"
                  className={`h-auto w-full rounded-md border-2 transition-opacity duration-200 ${i === active ? 'border-gold-dark opacity-100' : 'border-transparent opacity-70 hover:-translate-y-0.5 hover:opacity-100'}`}
                />
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {zoom && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Product image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
              onClick={() => setZoom(false)}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setZoom(false)}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black"
              >
                ×
              </button>
              <img src={current.full} alt={current.alt} className="max-h-full max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
