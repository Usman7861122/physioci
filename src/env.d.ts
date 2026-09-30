interface ImportMetaEnv {
  readonly PUBLIC_SHOPIFY_STORE_DOMAIN: string;
  readonly PUBLIC_SHOPIFY_STOREFRONT_TOKEN: string;
  readonly PUBLIC_SHOPIFY_API_VERSION?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
