// Client-side cart helpers (used by React islands).
import { shopifyFetch } from './shopify';
import { CART_CREATE, CART_LINES_ADD } from './queries';
import type { Cart } from '../types/shopify';

const CART_KEY = 'physioci_cart_id';

function normalize(raw: any): Cart {
  return { ...raw, lines: raw.lines?.nodes ?? [] };
}

export async function addToCart(variantId: string, quantity = 1): Promise<Cart> {
  const lines = [{ merchandiseId: variantId, quantity }];
  const cartId = localStorage.getItem(CART_KEY);

  if (cartId) {
    const data = await shopifyFetch<{ cartLinesAdd: { cart: any } }>(CART_LINES_ADD, { cartId, lines });
    return normalize(data.cartLinesAdd.cart);
  }

  const data = await shopifyFetch<{ cartCreate: { cart: any } }>(CART_CREATE, { lines });
  const cart = normalize(data.cartCreate.cart);
  localStorage.setItem(CART_KEY, cart.id);
  return cart;
}
