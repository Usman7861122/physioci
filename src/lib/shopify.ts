const domain = import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const version = import.meta.env.PUBLIC_SHOPIFY_API_VERSION ?? '2025-07';

const endpoint = `https://${domain}/api/${version}/graphql.json`;

/** Small helper to call the Shopify Storefront GraphQL API. */
export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!domain || !token) {
    throw new Error('Missing Shopify env vars. Copy .env.example to .env and fill it in.');
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`Shopify GraphQL error: ${JSON.stringify(json.errors)}`);
  }
  return json.data as T;
}
