// Nature's GLP-1 page content. Wording comes from the "Physio/Sci Labs Website Updates" PDF (Nature's GLP-1 slides).
export const product = {
  handle: 'natures-glp-1',
  title: 'NATURE’S GLP-1',
  label: 'GLP-1 SUPPORT',
  subtitle: 'Your Body’s Natural GLP-1 Response.',
};

const g = (n: number, alt: string) => ({
  thumb: `/images/natures-glp1/nat-gallery-thumb-${n}.webp`,
  src: `/images/natures-glp1/nat-gallery-${n}.webp`,
  full: `/images/natures-glp1/nat-gallery-${n}.webp`,
  alt,
});

export const gallery = [
  g(1, 'Nature’s GLP-1™ Metabolic Support Formula bottle'),
  g(2, 'Nature’s GLP-1™ bottle with a glass of water and capsules'),
  g(3, 'Nature’s GLP-1™ bottle beside berries, matcha and cinnamon'),
  g(4, 'Nature’s GLP-1™ bottle on a stone shelf'),
];

// The PDF has no price for Nature's GLP-1 yet. price: null shows "Price coming soon".
// Set price (and the Shopify variantId) when the client confirms it.
export const purchaseOptions = [
  {
    id: 'single',
    title: 'Nature’s GLP-1™',
    price: null as number | null,
    comparePrice: null as number | null,
    badge: null as string | null,
    image: '/images/natures-glp1/nat-option-single.webp',
    description: 'Metabolic Support Formula. 60 Vegan Capsules.',
    variantId: '',
  },
];

export const hero = {
  eyebrow: 'GLP-1 Support',
  title: 'Nature’s GLP-1',
  tagline: 'Your Body’s Natural GLP-1 Response.',
  highlight: ['Balance', ' blood sugar. ', 'Reduce', ' cravings. ', 'Support', ' metabolism.'],
  intro:
    'An advanced blend of plant-based and nutrient-rich ingredients designed to support key metabolic pathways associated with appetite, blood sugar, and healthy weight management.',
  checks: [
    { icon: 'drop', lead: 'Blood Sugar', strong: 'Support' },
    { icon: 'fork', lead: 'Appetite', strong: 'Regulation' },
    { icon: 'cycle', lead: 'Metabolic', strong: 'Support' },
    { icon: 'leaf', lead: 'Gut Health', strong: 'Support' },
  ],
  note: 'Natural support for a healthier, more balanced you.',
};

export const problem = {
  title: ['When your metabolism', 'feels out of balance'],
  intro:
    'Cravings, blood sugar fluctuations, low energy, and difficulty managing weight can all be signs that the systems supporting your metabolism need more support.',
  lead: 'Nature’s GLP-1™ is designed to support the key metabolic systems that influence:',
  items: [
    { icon: 'drop', strong: 'Blood Sugar', rest: 'Balance' },
    { icon: 'fork', strong: 'Craving & Appetite', rest: 'Control' },
    { icon: 'cycle', strong: 'Metabolic', rest: 'Function' },
    { icon: 'leaf', strong: 'Gut Microbiome', rest: 'Health' },
    { icon: 'chart', strong: 'Energy & Healthy Weight', rest: 'Management' },
  ],
  outro: 'Support Your Metabolism. Take Control of Your Cravings. Feel More Balanced.',
};

export const science = {
  eyebrow: 'Nature’s GLP-1',
  title: ['The science behind', 'metabolic balance'],
  intro:
    'Nature’s GLP-1 combines clinically studied nutrients, botanical extracts, and microbiome-supporting ingredients to help support your body’s natural GLP-1 pathways.',
  items: [
    { icon: '/images/natures-glp1/nat-ing-1.webp', title: 'Berberine Metabolic Complex', text: 'Helps support healthy blood sugar levels and metabolic function.' },
    { icon: '/images/natures-glp1/nat-ing-2.webp', title: 'Cinnamon Extract', text: 'Supports glucose metabolism and healthy blood sugar balance.' },
    { icon: '/images/natures-glp1/nat-ing-3.webp', title: 'Green Tea Extract', text: 'Provides natural metabolic energy and antioxidant support.' },
    { icon: '/images/natures-glp1/nat-ing-4.webp', title: 'Prebiotic & Probiotic Blend', text: 'Supports gut microbiome health, which plays a key role in metabolism and appetite regulation.' },
    { icon: '/images/natures-glp1/nat-ing-5.webp', title: 'Chromium & Targeted Nutrients', text: 'Help support glucose metabolism and appetite control.' },
  ],
  footer: 'Support your metabolism. Naturally.',
};

// Only facts printed on the bottle label and the slides. Replace when the client sends the final description.
export const descriptionHtml = `
<p>Nature’s GLP-1™ Metabolic Support Formula combines clinically studied nutrients, botanical extracts, and microbiome-supporting ingredients to help support your body’s natural GLP-1 pathways.</p>
<h3>Supplement Facts Highlights</h3>
<ul>
<li>Berberine Metabolic Complex (500 mg Berberine HCl)</li>
<li>Gastrobiotic Support Matrix (Probiotic + Prebiotic)</li>
<li>Glucose Support Blend (Cinnamon Extract + Chromium Picolinate)</li>
<li>Thermogenic Polyphenol Support (Green Tea Extract)</li>
<li>Metabolic &amp; Appetite Regulation Support</li>
</ul>
<p>Dietary Supplement | 60 Vegan Capsules. Non-GMO. Third-party tested. GMP certified.</p>
<p><em>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</em></p>
`;
