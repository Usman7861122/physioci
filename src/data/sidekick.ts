import { img } from './assets';

export const product = {
  handle: 'glp-1-sidekick',
  title: 'GLP-1 SIDEKICK',
  label: 'GLP-1 SUPPORT',
  subtitle: 'Whole-Body Nutritional Support for GLP-1 Users and Calorie-Restricted Diets.',
};

const wp = (full: string, thumb?: string) => ({
  thumb: img(thumb ?? full.replace('.png', '-100x100.png')),
  src: img(full),
  full: img(full),
});

export const gallery = [
  { thumb: '/images/sidekick-main-thumb.webp', src: '/images/sidekick-main.webp', full: '/images/sidekick-main.webp', alt: 'GLP-1 Sidekick™' },
  { ...wp('2026/08/side-kick-image-1-e1785957703240.png'), alt: 'GLP-1 Sidekick™ - Image 2' },
  { ...wp('2026/08/side-kick-image-3-e1787753485288.png', '2026/08/side-kick-image-3-e1787753450176-100x100.png'), alt: 'GLP-1 Sidekick™ - Image 3' },
  { ...wp('2026/08/side-kick-image-2-e1785957650376.png'), alt: 'GLP-1 Sidekick™ - Image 4' },
  { ...wp('2026/08/ChatGPT-Image-Aug-5-2026-11_25_22-PM.png'), alt: 'GLP-1 Sidekick™ - Image 5' },
  { ...wp('2026/08/glp-sidelick-1.png'), alt: 'GLP-1 Sidekick™ - Image 6' },
];

// Prices are static until Shopify is connected. Set variantId to the Shopify variant GID.
export const purchaseOptions = [
  {
    id: 'single',
    title: 'Single Bottle',
    price: 89.99,
    comparePrice: null as number | null,
    badge: null as string | null,
    image: '/images/option-single.webp',
    description: 'One bottle of GLP-1 Sidekick™. Whole-body nutritional support for GLP-1 users and calorie-restricted diets.',
    variantId: '',
  },
  {
    id: 'three',
    title: 'Buy Three',
    price: 229.99,
    comparePrice: 269.97,
    badge: '15% OFF',
    image: '/images/option-three.webp',
    description: 'Three bottles of GLP-1 Sidekick™. Save 15% and stay supported for the full journey.',
    variantId: '',
  },
  {
    id: 'bundle',
    title: 'Bundle',
    price: 259.99,
    comparePrice: 450.0,
    badge: null as string | null,
    image: '/images/option-bundle.webp',
    description: 'The complete Physio/Sci bundle. Best value.',
    variantId: '',
  },
];

export const problemList = [
  'Muscle loss',
  'Skin laxity and “Ozempic face”',
  'Nutrient deficiencies',
  'Digestive discomfort',
  'Fatigue and electrolyte depletion',
];

export const benefits = [
  { icon: '/images/support-icon-1.webp', title: 'Maintain Muscle & Strength', text: 'Science-backed nutrients to protect lean muscle.' },
  { icon: '/images/support-icon-2.webp', title: 'Keep Your Skin Firm & Hydrated', text: 'Collagen peptides, hyaluronic acid & antioxidants.' },
  { icon: '/images/support-icon-3.webp', title: 'Boost Hydration & Energy', text: 'Electrolytes, B-complex vitamins & prebiotics.' },
  { icon: '/images/support-icon-4.webp', title: 'Digestive & Nausea Support', text: 'Enzymes, ginger + soothing herbs.' },
];

export const formulaCards = [
  {
    icon: '/images/formula-icon-1.webp',
    title: ['Preserve', 'Lean Muscle'],
    summary: 'Help maintain strength, metabolism and a toned, healthy physique.',
    panel: `<p>Rapid weight loss causes muscle breakdown.</p><p>Our <strong>10,000 mg Essential Amino Acid Complex + HMB</strong> helps maintain lean muscle and metabolic rate.</p>`,
  },
  {
    icon: '/images/formula-icon-2.webp',
    title: ['Support Skin', 'Tightening and Beauty'],
    summary: 'Promote firmer, more hydrated skin from within.',
    panel: `<p>Rapid fat loss often leaves loose skin and facial sagging.</p><div class="font-semibold"><strong class="font-black">Includes:</strong></div><ul><li>7g Collagen Peptides (Type I + III)</li><li>Hyaluronic Acid</li><li>Astaxanthin</li><li>Vitamin C</li><li>Zinc + Copper</li></ul><p>Designed to support skin firmness and collagen synthesis.</p>`,
  },
  {
    icon: '/images/formula-icon-3.webp',
    title: ['Restore Digestion', 'and Gut Function'],
    summary: 'Support a healthy gut microbiome and regularity.',
    panel: `<p>GLP-1 drugs slow gastric emptying, causing: <strong>Bloating</strong>, <strong>Constipation</strong> and <strong>Nausea</strong></p><p>Our digestive support complex includes: <strong>Protease</strong>, <strong>Lactase</strong>, <strong>Amylase</strong>, <strong>Bromelain</strong> and <strong>Prebiotic Inulin Fiber</strong></p><p>Plus ginger and peppermint for nausea support.</p>`,
  },
  {
    icon: '/images/formula-icon-4.webp',
    title: ['Rebuild Electrolytes +', 'Nutrients'],
    summary: 'Replenish what GLP-1s deplete and support whole-body wellness.',
    panel: `<p>GLP-1 Sidekick replenishes critical nutrients:</p><ul><li><strong>Magnesium Glycinate</strong></li><li><strong>Potassium Citrate</strong></li><li><strong>Sodium and </strong><strong>Calcium</strong></li><li><strong>Vitamin D3 + K2</strong></li><li><strong>Full B-Complex</strong></li></ul><p>Supporting energy, hydration, and metabolic health.</p>`,
  },
];

export const descriptionHtml = `
<p>GLP-1 medications are highly effective for weight loss, but the physiological changes they create include reduced caloric intake, slowed gastric emptying, and altered nutrient absorption, can place patients at risk for lean muscle loss, skin laxity, nutrient deficiencies, digestive discomfort, and fatigue.<br> GLP-1 Sidekick™ was developed to address these challenges with a clinically informed, multi-system support formula designed to complement GLP-1 therapy and support healthy, sustainable weight loss.</p>
<p><strong>Looking Lean and Healthy <br> is not just about the scale!</strong><br> GLP-1 Sidekick Picks Up<br> Where Your GLP-1 Medication Left off.</p>
<p><strong>GLP-1 Sidekick price at 25 and 30 servings<br> </strong></p>
<h3>Ingredients for GLP-1 Sidekick Include</h3>
<ul>
<li><strong>Lean Muscle Preserving Complex</strong></li>
<li>Essential Amino Acid Complex: 10,000 mg:</li>
<li>L-Leucine — 3,500 mg</li>
<li>L-Isoleucine — 1,750 mg</li>
<li>L-Valine — 1,750 mg</li>
<li>L-Lysine HCl — 1,400 mg</li>
<li>L-Threonine — 700 mg</li>
<li>L-Phenylalanine — 500 mg</li>
<li>L-Methionine — 350 mg</li>
<li>L-Histidine — 300 mg</li>
<li>L-Tryptophan — 150 mg</li>
<li>HMB 1000mg</li>
<li>Glycine 500mg</li>
</ul>`;

// Comparison chart (transcribed from the PDF slide; please double-check the numbers)
export const chart = {
  title: ['Not All GLP-1 Support Powders', 'Are Created Equal.'],
  tagline: 'Same goal. A more complete formula.',
  sidekick: {
    name: 'GLP-1 SIDEKICK',
    tag: 'ALL-IN-ONE DAILY SUPPORT',
    rows: [
      { title: 'Muscle Retention & Recovery', lines: ['<b>11.9 g</b> Muscle Support Complex'], sub: '(EAAs + BCAAs + HMB)' },
      { title: 'Skin Health', lines: ['<b>7.054 g</b> Skin Support Complex'], sub: '(Collagen Peptides + Hyaluronic Acid + Astaxanthin)' },
      { title: 'Energy & Vitality', lines: ['B-Complex (B1, B2, B6, B12), Vitamins A, C, D3, E, K2 + Key Nutrients'] },
      { title: 'Digestive & Gut Support', lines: ['<b>1,100 mg</b> Digestive Enzyme + Prebiotic Complex'], sub: '(Inulin, Protease, Lactase, Bromelain, Amylase)' },
      { title: 'Nausea Support', lines: ['<b>280 mg</b> Ginger + Peppermint'] },
      { title: 'Vitamins & Minerals', lines: ['A, C, D3, E, K2, B-Complex, Calcium, Magnesium, Zinc, Copper, Potassium, Choline & more'] },
      { title: 'Electrolytes & Hydration', lines: ['<b>250 mg</b> Potassium, <b>75 mg</b> Magnesium, <b>350 mg</b> Himalayan Sea Salt + more'] },
      { title: 'Caffeine', lines: ['Caffeine-Free'] },
    ],
  },
  typical: {
    name: 'TYPICAL GLP-1 SUPPORT POWDER',
    tag: 'GOOD, BUT NOT AS COMPLETE',
    rows: [
      { title: 'Muscle Support', lines: ['<b>6 g</b> Amino Acid Blend'], sub: '(BCAAs – limited profile)', ok: true },
      { title: 'Skin Support', lines: ['<b>2.5 g</b> Collagen + <b>10 mg</b> Hyaluronic Acid'], ok: true },
      { title: 'Energy Support', lines: ['Limited B Vitamins'], sub: '(B6, B12 only)', ok: true },
      { title: 'Digestive & Gut Support', lines: ['<b>2 g</b> Prebiotic Fiber'], sub: '(Enzymes not included)', ok: true },
      { title: 'Nausea Support', lines: ['Not included'], ok: false },
      { title: 'Vitamins & Minerals', lines: ['Limited (B6, B12 only)'], ok: false },
      { title: 'Electrolytes & Hydration', lines: ['Basic electrolytes'], sub: '(lower amounts)', ok: true },
      { title: 'Caffeine', lines: ['Contains caffeine'], sub: '(from green tea extract)', ok: false },
    ],
  },
  benefits: [
    { icon: '/images/chart-icon-1.webp', label: ['Muscle', 'Retention'] },
    { icon: '/images/chart-icon-2.webp', label: ['Skin', 'Health'] },
    { icon: '/images/chart-icon-3.webp', label: ['Energy', '& Vitality'] },
    { icon: '/images/chart-icon-4.webp', label: ['Digestion', '& Gut Support'] },
    { icon: '/images/chart-icon-5.webp', label: ['Nausea', 'Support'] },
    { icon: '/images/chart-icon-6.webp', label: ['Vitamins, Minerals', '& Electrolytes'] },
  ],
  banner: ['More than a powder.', 'A complete partner for your GLP-1 journey.'],
};

export const comparison = {
  rows: [
    ['Gut Lining Support', 'Comprehensive', 'Limited'],
    ['Absorption Focus', 'Targeted', 'General'],
    ['Inflammatory Support', 'Included', 'Limited'],
    ['Ingredient Dosing', 'Purposeful', 'Varies'],
    ['Quality Control', 'Professional', 'Varies'],
    ['Risk Reversal', 'Designed Support', 'Limited Support'],
  ] as const,
};

export const nav = [
  { label: 'Shop', href: '/shop' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Advisory Board', href: '/backed-by-our-advisory-board' },
  {
    label: 'Products',
    href: '/our-product',
    children: [
      { label: 'GLP-1 Sidekick™', href: '/product/glp-1-sidekick' },
      { label: 'GLP-1 SkinSaver™', href: '/product/glp-1-skinsaver' },
      { label: 'Nature’s GLP-1™', href: '/product/natures-glp-1' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];
