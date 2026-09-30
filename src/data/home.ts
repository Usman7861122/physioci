import { img } from './assets';

export const hero = {
  eyebrow: 'Physio / Sci Laboratories',
  title: 'Nutritional Support for your GLP-1 Weight Loss Journey',
  tagline: 'Support Your Body. Protect Your Progress.',
  text: 'Physician-inspired nutritional and skincare solutions designed to support patients using GLP-1 medications and those seeking healthier aging, metabolic wellness, and skin rejuvenation.',
  chips: ['Physician formulated', '30-Day Satisfaction Guarantee', '20 Trillion PRP-Derived Exosomes'],
};

// PDF wording is used where it exists (Sidekick + SkinSaver). Nature's wording is still the old site text.
export const products = [
  {
    href: '/product/glp-1-sidekick',
    image: '/images/sidekick-main.webp',
    alt: 'GLP-1 Sidekick jar on a stone shelf',
    label: 'GLP-1 Support',
    name: 'GLP-1 Sidekick™',
    lead: 'The Missing Piece of GLP-1 Weight Loss.',
    text: 'A nutritional support formula designed for patients taking GLP-1 medications. It focuses on preserving lean muscle, supporting metabolism, improving digestion, replenishing nutrients, and maintaining strength during weight loss.',
    points: ['Stop Losing Muscle', 'Stop Skin Sagging', 'Stop Nutrient Depletion', '30-Day Satisfaction Guarantee'],
    price: 'From $89.99',
  },
  {
    href: '/product/glp-1-skinsaver',
    image: '/images/skinsaver/ss-gallery-1.webp',
    alt: 'GLP-1 SkinSaver box and pump bottle',
    label: 'For the Skin',
    name: 'GLP-1 SkinSaver™',
    lead: 'The Skin Support Your GLP-1 Journey Has Been Missing.',
    text: 'An advanced topical skin-support formula with 20 trillion PRP-derived exosomes, designed to support smoother, firmer, more hydrated-looking skin.',
    points: ['Improve Skin Firmness', 'Enhance Elasticity', 'Deep Hydration', '30-Day Satisfaction Guarantee'],
    price: 'From $179.99',
  },
  {
    href: '/product/natures-glp-1',
    image: img('2026/07/GLP-1-nature.jpeg'),
    alt: 'Nature’s GLP-1 supplement',
    label: 'Botanical Support',
    name: 'Nature’s GLP-1™',
    lead: 'Natural metabolic support.',
    text: 'A natural metabolic support supplement designed to help support healthy blood sugar, appetite regulation, metabolism, gut health, and energy using botanical extracts, probiotics, and clinically inspired ingredients.',
    points: [],
    price: '',
  },
];

export const skin = {
  label: 'For the Skin',
  title: 'GLP-1 SkinSaver™ brings the backup.',
  sub: 'Think: smoother, firmer, more hydrated-looking skin.',
  items: [
    { icon: '/images/skinsaver/ss-adv-1.webp', title: 'Exosomes', text: 'Support skin renewal and overall skin health.' },
    { icon: '/images/skinsaver/ss-adv-2.webp', title: 'GHK-Cu Peptide', text: 'Helps support skin repair and rejuvenation.' },
    { icon: '/images/skinsaver/ss-adv-3.webp', title: 'Multi-Weight Hyaluronic Acid', text: 'Delivers deep hydration and helps maintain skin elasticity.' },
    { icon: '/images/skinsaver/ss-adv-4.webp', title: 'Ceramides + Niacinamide', text: 'Help strengthen the skin barrier and even skin tone.' },
  ],
};

export const steps = [
  { title: 'Nourish Your Body', text: 'Support overall wellness with essential nutrients that fuel strength, energy, and daily vitality.' },
  { title: 'Support Your Skin', text: 'Promote firmer, smoother, hydrated skin with advanced regenerative ingredients and lasting nourishment.' },
  { title: 'Stay Consistent', text: 'Build healthier habits through simple daily support for sustainable wellness and long-term success.' },
  { title: 'Keep Moving Forward', text: 'Maintain confidence, resilience, and progress with science-backed support throughout your wellness journey.' },
];

export const deals = [
  {
    href: '/product/glp-1-sidekick#buynow',
    image: '/images/skinsaver/ss-option-bundle.webp',
    alt: 'GLP-1 Sidekick jar with GLP-1 SkinSaver bottle',
    tag: 'Best value',
    title: 'The Bundle',
    text: 'GLP-1 SIDEKICK™ + GLP-1 SkinSaver™ together.',
    price: '$259.99',
  },
  {
    href: '/product/glp-1-sidekick#buynow',
    image: '/images/option-three.webp',
    alt: 'Three GLP-1 Sidekick jars',
    tag: '15% off',
    title: 'Buy Three, Save More',
    text: 'Three GLP-1 Sidekick™ jars.',
    price: '$229.99',
  },
  {
    href: '/product/glp-1-skinsaver#buynow',
    image: '/images/skinsaver/ss-option-three.webp',
    alt: 'Three GLP-1 SkinSaver bottles',
    tag: '15% off',
    title: 'Buy Three, Save More',
    text: 'Three GLP-1 SkinSaver™ creams.',
    price: '$459.99',
  },
];

export const why = {
  title: 'Why Choose Physio/Sci',
  sub: 'Physician formulated for GLP-1 users',
  text: 'At Physio/Sci Laboratories, we believe exceptional results begin with exceptional science. Our physician-inspired formulas are thoughtfully developed using clinically respected ingredients to support your wellness journey from every angle.',
  items: [
    { title: 'Skin Support from the Inside Out', text: 'Our Skin Beautifying & Tightening Complex combines 7 grams of hydrolyzed Type I & III collagen peptides, hyaluronic acid, astaxanthin, vitamins, zinc, and copper to support healthy-looking skin, hydration, firmness, and elasticity.*' },
    { title: 'Digestive Support with Fiber + Enzymes', text: 'Inulin fiber supports beneficial gut bacteria, while protease, lactase, bromelain, and amylase help support the breakdown and digestion of proteins, lactose, carbohydrates, and other nutrients.*' },
    { title: 'Hydration & Mineral Support', text: 'Sodium, potassium, magnesium, calcium, vitamin D3, and vitamin K2 help support hydration, muscle function, nerve signaling, energy, and bone health during periods of reduced food and fluid intake.*' },
    { title: 'Energy & Metabolic Support with B Vitamins', text: 'A comprehensive B-vitamin complex with choline helps provide important nutrients involved in energy production, cellular function, and normal metabolism.*' },
    { title: 'Digestive Comfort with Ginger + Peppermint', text: 'Ginger and peppermint provide targeted botanical support for stomach comfort and digestive wellness, helping you stay more comfortable throughout your GLP-1 journey.*' },
    { title: 'Advanced Skin Renewal with Exosomes + GHK-Cu', text: 'GLP-1 SkinSaver combines exosome technology, GHK-Cu copper peptides, multi-weight hyaluronic acid, niacinamide, panthenol, and ceramides to support hydration, skin barrier health, firmness, elasticity, and a smoother-looking texture.*' },
  ],
};

export const experts = {
  label: 'Trusted by the best',
  title: 'Our Medical Experts',
  text: 'Having a board of advisors is important to Physio/Sci because it ensures the product is developed with expert care and attention to detail. Our team’s expertise in nutrition, exercise, and microbiology ensures a diverse approach.',
  image: img('2026/08/doctor.png'),
};

// Placeholder reviews copied from the old site. Replace with real reviews.
export const reviews = [
  { title: 'I Love It!', name: 'Allison E.', photo: img('2026/07/customer-allison.webp') },
  { title: 'Absolutely the best!', name: 'Allison E.', photo: img('2026/07/customer-bryon.webp') },
  { title: 'I feel great!', name: 'Allison E.', photo: img('2026/07/customer-christine.webp') },
].map((r) => ({
  ...r,
  quote: 'Physio/Sci is refreshing and light… I am obsessed with drinking it in the morning… it’s delicious I love it!',
}));
export const star = img('2026/07/star-e1785064092962.webp');

export const press = [
  { name: 'Pharmacy Times', src: img('2026/07/logo_pharmacy_times.webp') },
  { name: 'Featured publication', src: img('2026/07/images-e1784830513131.png') },
  { name: 'Featured publication', src: img('2026/07/BLEh0pQw_400x400-e1784830589554.jpg') },
  { name: 'Drug Store News', src: img('2026/07/logo-drug-store-news.webp') },
  { name: 'Nutraceuticals World', src: img('2026/07/logo-nutraceuticals-world.webp') },
];

export const posts = [
  { title: 'Beyond the Scale: Supporting Your Body During Your Wellness Journey', href: '/beyond-the-scale-supporting-your-body-during-your-wellness-journey', image: img('2026/08/20700.jpg') },
  { title: 'Fine Lines & Early Wrinkles: Why Hydration and Collagen Support Matter', href: '/fine-lines-early-wrinkles-why-hydration-and-collagen-support-matter', image: img('2026/08/56958.jpg') },
  { title: 'Why Muscle Loss Occurs During GLP-1–Assisted Weight Loss', href: '/why-muscle-loss-occurs-during-glp-1-assisted-weightloss', image: img('2026/08/ChatGPT-Image-Aug-3-2026-07_00_41-PM.png') },
  { title: 'GLP-1 SkinSaver + GLP-1 Sidekick', href: '/glp-1-skinsaver-glp-1-sidekick', image: img('2026/07/GLP-1-removebg-preview-e1785140565299.png') },
];
