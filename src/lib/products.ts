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
  const data = await shopifyFetch<{ products: { nodes: any[] } }>(GET_PRODUCTS, { first: 10 });
  return data.products.nodes.map(normalize);
}

export async function getProduct(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: any | null }>(GET_PRODUCT_BY_HANDLE, { handle });
  return data.product ? normalize(data.product) : null;
}
