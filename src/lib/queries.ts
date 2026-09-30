export const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    featuredImage { url altText width height }
    images(first: 10) { nodes { url altText width height } }
    priceRange { minVariantPrice { amount currencyCode } }
    variants(first: 20) {
      nodes { id title availableForSale price { amount currencyCode } }
    }
  }
`;

export const GET_PRODUCTS = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int = 10) {
    products(first: $first) { nodes { ...ProductFields } }
  }
`;

export const GET_PRODUCT_BY_HANDLE = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProduct($handle: String!) {
    product(handle: $handle) { ...ProductFields }
  }
`;

const CART_FIELDS = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    lines(first: 50) {
      nodes {
        id
        quantity
        merchandise {
          ... on ProductVariant { id title product { title handle } }
        }
      }
    }
  }
`;

export const CART_CREATE = /* GraphQL */ `
  ${CART_FIELDS}
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) { cart { ...CartFields } }
  }
`;

export const CART_LINES_ADD = /* GraphQL */ `
  ${CART_FIELDS}
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ...CartFields } }
  }
`;
