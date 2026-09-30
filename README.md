# Physioci

Ecommerce site built with Astro, Tailwind CSS v4, React, Motion and Shopify (headless, Storefront API).

## Setup

1. `cp .env.example .env` and fill in your Shopify store domain and Storefront API token.
2. `npm install`
3. `npm run dev`

## Structure

```
src/
  components/        Astro components (Header, Footer, ProductCard)
  components/react/  React islands (AddToCartButton, later CartDrawer)
  layouts/           BaseLayout
  lib/               shopify.ts (API client), queries.ts, products.ts, cart.ts
  pages/             index, products/, products/[handle], 404
  styles/            global.css (Tailwind + theme tokens)
  types/             Shopify TypeScript types
```
