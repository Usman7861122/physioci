import { useState } from 'react';
import { motion } from 'motion/react';
import { addToCart } from '../../lib/cart';

interface Props {
  variantId: string;
  available?: boolean;
}

export default function AddToCartButton({ variantId, available = true }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'added' | 'error'>('idle');

  async function handleClick() {
    setStatus('loading');
    try {
      const cart = await addToCart(variantId);
      setStatus('added');
      window.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      setTimeout(() => setStatus('idle'), 1500);
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      disabled={!available || status === 'loading'}
      onClick={handleClick}
      className="rounded-full bg-black px-6 py-3 text-white disabled:opacity-50"
    >
      {!available ? 'Sold out' : status === 'loading' ? 'Adding…' : status === 'added' ? 'Added ✓' : status === 'error' ? 'Try again' : 'Add to cart'}
    </motion.button>
  );
}
