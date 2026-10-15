// GLP-1 Total Transformation System (Sidekick + SkinSaver bundle). Wording comes from the PDF (pages 10-11).
export const product = {
  handle: 'glp-1-total-transformation-system',
  title: 'GLP-1 TOTAL TRANSFORMATION SYSTEM',
  label: 'GLP-1 SUPPORT',
  subtitle: 'GLP-1 SIDEKICK™ + GLP-1 SkinSaver™. A complete inside + outside support system for your weight loss journey.',
};

const g = (src: string, thumb: string, alt: string) => ({ thumb, src, full: src, alt });

export const gallery = [
  g('/images/bundle/bundle-gallery-1.webp', '/images/bundle/bundle-gallery-thumb-1.webp', 'GLP-1 Sidekick jar and GLP-1 SkinSaver pump bottle with a pink drink and a scoop of powder'),
  g('/images/bundle/bundle-gallery-2.webp', '/images/bundle/bundle-gallery-thumb-2.webp', 'GLP-1 Sidekick and GLP-1 SkinSaver on a stone shelf beside a white flower'),
  g('/images/bundle/bundle-gallery-3.webp', '/images/bundle/bundle-gallery-thumb-3.webp', 'Smiling couple with GLP-1 Sidekick and GLP-1 SkinSaver'),
  g('/images/sidekick-main.webp', '/images/sidekick-main-thumb.webp', 'GLP-1 Sidekick jar'),
  g('/images/skinsaver/ss-gallery-1.webp', '/images/skinsaver/ss-gallery-thumb-1.webp', 'GLP-1 SkinSaver box and pump bottle'),
];

// Bundle price from the PDF. Compare price = Sidekick $89.99 + SkinSaver $179.99.
// Set variantId to the Shopify variant GID when Shopify is connected.
export const purchaseOptions = [
  {
    id: 'bundle',
    title: 'GLP-1 Total Transformation System',
    price: 259.99 as number | null,
    comparePrice: 269.98 as number | null,
    badge: null as string | null,
    image: '/images/bundle/bundle-option.webp',
    description: 'GLP-1 SIDEKICK™ + GLP-1 SkinSaver™ together.',
    variantId: '',
  },
];

export const hero = {
  eyebrow: 'GLP-1 Support',
  title: ['GLP-1 Total', 'Transformation', 'System'],
  highlight: 'A complete inside + outside support system for your weight loss journey.',
  products: 'GLP-1 SIDEKICK™ + GLP-1 SkinSaver™',
  checks: [
    { icon: 'muscle', lead: 'Maintain', strong: 'Lean Muscle' },
    { icon: 'sparkle', lead: 'Enhance', strong: 'Skin Firmness' },
    { icon: 'drop', lead: 'Deep', strong: 'Hydration' },
    { icon: 'leaf', lead: 'Replenish', strong: 'Key Nutrients' },
    { icon: 'gut', lead: 'Support', strong: 'Digestive Health' },
  ],
  note: 'Two science-backed formulas. One more complete you.',
  small: 'Designed for those taking GLP-1 medications and those on calorie restrictive diets.',
  closing: 'Complete your transformation!',
};

export const approach = {
  title: ['A complete approach to', 'GLP-1 support'],
  intro:
    'GLP-1 Sidekick and GLP-1 SkinSaver work together to support your body from the outside and within — so you can look and feel your best throughout your GLP-1 journey.',
  lead: 'The dual benefit approach:',
  items: [
    { icon: 'muscle', title: 'Preserve Lean Muscle', text: 'Help maintain muscle mass and body composition.' },
    { icon: 'sparkle', title: 'Support Firmer, Smoother Looking Skin', text: 'Improve elasticity, texture, and skin quality.' },
    { icon: 'drop', title: 'Enhance Hydration', text: 'Replenish fluids, electrolytes and moisture — inside and out.' },
    { icon: 'leaf', title: 'Replenish Key Nutrients', text: 'Support overall health, energy and metabolic function.' },
    { icon: 'lotus', title: 'Support Collagen Production', text: 'Help maintain the structural foundation for youthful skin.' },
  ],
  closing: 'Same transformation. Healthier, radiant skin.',
};

export const formulas = {
  eyebrow: 'GLP-1 Support',
  title: ['Two Formulas.', 'One Complete Approach.'],
  intro:
    'Powerful ingredients working from the inside and outside to help you lose weight, maintain your strength, and keep your skin healthy, firm and radiant throughout your GLP-1 journey.',
  items: [
    { icon: 'muscle', title: 'Muscle + Body Support', lines: [['SIDEKICK', 'EAAs + BCAAs + HMB']], text: 'Helps preserve lean muscle, support recovery and strength during weight loss.' },
    {
      icon: 'sparkle',
      title: 'Skin Structure + Firmness',
      lines: [['SIDEKICK', 'Collagen Peptides + Hyaluronic Acid + Astaxanthin'], ['SKINSAVER', 'GHK-Cu Peptide + Exosomes']],
      text: 'Works together to support firmer, smoother, more youthful-looking skin.',
    },
    {
      icon: 'drop',
      title: 'Hydration Inside + Out',
      lines: [['SIDEKICK', 'Electrolytes + Hyaluronic Acid'], ['SKINSAVER', 'Hyaluronic Acid + Ceramides']],
      text: 'Helps replenish fluids internally and lock in moisture externally.',
    },
    {
      icon: 'leaf',
      title: 'Nourish + Protect',
      lines: [['SIDEKICK', 'Vitamins, Minerals + B-Complex'], ['SKINSAVER', 'Niacinamide + Ceramides']],
      text: 'Supports overall wellness and a healthy skin barrier.',
    },
    {
      icon: 'gut',
      title: 'Digestive + Daily Support',
      lines: [['SIDEKICK', 'Digestive Enzymes + Prebiotic Complex + Ginger + Peppermint']],
      text: 'Supports digestion, nutrient absorption and overall gut health.',
    },
  ],
  closing: 'Same journey. Better results.',
};

export const descriptionHtml = `
<p>The <strong>GLP-1 Total Transformation System™</strong> pairs GLP-1 SIDEKICK™ and GLP-1 SkinSaver™: two science-backed formulas that support your body from the inside and the outside during your weight loss journey.</p>
<h3>What is in the bundle</h3>
<ul>
<li>GLP-1 SIDEKICK™ Dietary Supplement (30 servings, Net Wt. 10.6 oz / 300 g)</li>
<li>GLP-1 SkinSaver™ Exosome Regeneration Cream (Net Wt. 1.7 oz / 50 mL)</li>
</ul>
<p>Designed for those taking GLP-1 medications and those on calorie restrictive diets.</p>
`;
