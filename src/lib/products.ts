import { shopifyFetch } from './shopify';
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE } from './queries';
import type { Product } from '../types/shopify';

// Shopify returns { nodes: [...] } for connections; flatten them for easier use.
function normalize(raw: any): Product {
  return {
    ...raw,
    images: raw.images?.nodes ?? [],
    variants: raw.variants?.nodes ?? [],
  };
}

export async function getProducts(): Promise<Product[]> {
  // Shopify is not connected yet: return an empty list so the build does not fail.
  if (!import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN || !import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN) return [];
  const data = await shopifyFetch<{ products: { nodes: any[] } }>(GET_PRODUCTS, { first: 10 });
  return data.products.nodes.map(normalize);
}

export async function getProduct(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: any | null }>(GET_PRODUCT_BY_HANDLE, { handle });
  return data.product ? normalize(data.product) : null;
}
