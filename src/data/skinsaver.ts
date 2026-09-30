// GLP-1 SkinSaver page content. Wording comes from the "Physio/Sci Labs Website Edits" PDF slides.
export const product = {
  handle: 'glp-1-skinsaver',
  title: 'GLP-1 SKINSAVER',
  label: 'GLP-1 SUPPORT',
  subtitle: 'The Skin Support Your GLP-1 Journey Has Been Missing.',
};

const g = (n: number, alt: string) => ({
  thumb: `/images/skinsaver/ss-gallery-thumb-${n}.webp`,
  src: `/images/skinsaver/ss-gallery-${n}.webp`,
  full: `/images/skinsaver/ss-gallery-${n}.webp`,
  alt,
});

// Only three photos exist in the PDF. Replace with the real product photos later.
export const gallery = [
  g(1, 'GLP-1 SkinSaver™ box and pump bottle'),
  g(2, 'GLP-1 SkinSaver™ pump bottle on a stone shelf'),
  g(3, 'Woman with GLP-1 SkinSaver™ pump bottle'),
];

// Prices are static until Shopify is connected. Set variantId to the Shopify variant GID.
export const purchaseOptions = [
  {
    id: 'single',
    title: 'Single SkinSaver',
    price: 179.99,
    comparePrice: null as number | null,
    badge: null as string | null,
    image: '/images/skinsaver/ss-option-single.webp',
    description: 'One GLP-1 SkinSaver™ Exosome Regeneration Cream (1.7 oz / 50 mL).',
    variantId: '',
  },
  {
    id: 'three',
    title: 'Buy Three, Save More',
    price: 459.99,
    comparePrice: 539.97,
    badge: '15% OFF',
    image: '/images/skinsaver/ss-option-three.webp',
    description: 'Three GLP-1 SkinSaver™ Exosome Regeneration Creams. Save 15%.',
    variantId: '',
  },
  {
    id: 'bundle',
    title: 'Bundle',
    price: 259.99,
    comparePrice: 269.98,
    badge: null as string | null,
    image: '/images/skinsaver/ss-option-bundle.webp',
    description: 'GLP-1 SIDEKICK™ + GLP-1 SkinSaver™ together.',
    variantId: '',
  },
];

export const hero = {
  tagline: 'The Skin Support Your GLP-1 Journey Has Been Missing.',
  highlight: 'Industry-Leading 20 Trillion PRP-Derived Exosomes',
  intro: 'GLP-1 SkinSaver™ is an advanced topical skin-support formula designed to support smoother, firmer, more hydrated-looking skin.',
  checks: [
    { lead: 'Improve', strong: 'Skin Firmness' },
    { lead: 'Enhance', strong: 'Elasticity' },
    { lead: 'Deep', strong: 'Hydration' },
  ],
  note: 'Rapid weight loss can affect the appearance of skin, including firmness, elasticity, hydration, and overall texture.',
};

export const problem = {
  title: ['Rapid weight loss can', 'change more than your weight.'],
  intro: 'When your body changes quickly, your skin will need additional support to maintain its healthy-looking appearance.',
  lead: 'Common concerns include:',
  concerns: [
    { lead: 'Loss of', strong: 'skin firmness' },
    { lead: 'Reduced', strong: 'elasticity' },
    { strong: 'Dryness', lead2: 'and', strong2: 'dehydration' },
    { lead: 'Changes in', strong: 'skin texture' },
    { lead: 'Visible signs of', strong: 'wrinkles and fine lines' },
  ],
  outro:
    'GLP-1 SkinSaver™ delivers advanced, science-backed skin support to help restore hydration, improve elasticity, enhance skin firmness, and promote a smoother, more youthful-looking complexion — so your skin stays as healthy and vibrant as you feel.',
};

export const support = {
  title: ['Support your skin', 'from the outside.'],
  intro: 'When your body changes quickly, your skin will need additional support to maintain its healthy-looking appearance.',
  items: [
    { icon: '/images/skinsaver/ss-icon-1.webp', lead: 'Improve', strong: 'Skin Firmness', text: 'Supports the appearance of firmer, smoother-looking skin.' },
    { icon: '/images/skinsaver/ss-icon-2.webp', lead: 'Enhance', strong: 'Elasticity', text: 'Helps support skin elasticity and a more resilient appearance.' },
    { icon: '/images/skinsaver/ss-icon-3.webp', lead: 'Deep', strong: 'Hydration', text: 'Multi-weight hyaluronic acid helps support hydration at different levels of the skin.' },
    {
      icon: '/images/skinsaver/ss-icon-4.webp',
      lead: 'Support',
      strong: 'Skin Renewal',
      text: '<strong>20 trillion PRP-Derived Exosomes</strong> supercharges the skin’s renewal and regeneration process.',
    },
  ],
};

// The slide has no "Read More" wording yet. These short panels only repeat facts from the slides
// and the product box. Replace when the client sends the final wording.
export const advanced = {
  intro: 'combines complementary ingredients selected to support hydration, firmness, elasticity, and overall skin appearance.',
  cards: [
    {
      icon: '/images/skinsaver/ss-adv-1.webp',
      title: ['Exosomes'],
      panel: '<p>GLP-1 SkinSaver™ features <strong>20 trillion PRP-Derived Exosomes</strong> to support the skin’s renewal and regeneration process.</p>',
    },
    {
      icon: '/images/skinsaver/ss-adv-2.webp',
      title: ['GHK-Cu Peptide'],
      panel: '<p><strong>GHK-Cu Peptide</strong> is part of the RejuvaSphere™ BioComplex, selected to support smoother, firmer-looking skin.</p>',
    },
    {
      icon: '/images/skinsaver/ss-adv-3.webp',
      title: ['Hyaluronic Acid'],
      panel: '<p><strong>Multi-weight hyaluronic acid</strong> helps support hydration at different levels of the skin.</p>',
    },
    {
      icon: '/images/skinsaver/ss-adv-4.webp',
      title: ['Ceramides +', 'Niacinamide'],
      panel: '<p><strong>Ceramides</strong> and <strong>Niacinamide</strong> join Beta Glucan in the RejuvaSphere™ BioComplex to support a healthy-looking skin appearance.</p>',
    },
  ],
};

export const descriptionHtml = `
<p>GLP-1 SkinSaver™ delivers advanced, science-backed skin support to help restore hydration, improve elasticity, enhance skin firmness, and promote a smoother, more youthful-looking complexion — so your skin stays as healthy and vibrant as you feel.</p>
<p><strong>Industry-Leading 20 Trillion PRP-Derived Exosomes</strong></p>
<h3>RejuvaSphere™ BioComplex</h3>
<ul>
<li>Cytocell Exosomes</li>
<li>GHK-Cu Peptide</li>
<li>Multi-Weight Hyaluronic Acid</li>
<li>Ceramides</li>
<li>Beta Glucan</li>
<li>Niacinamide</li>
</ul>
<p>Powered by Bioactive Exosome and Peptide Technology.<br>Exosome Regeneration Cream. Net Wt. 1.7 oz (50 mL).</p>
`;
