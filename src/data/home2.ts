// Homepage v2. Wording comes from the client's "Website Homepage" document.
import { products } from './home';

export const mission = {
  eyebrow: 'Physio/Sci Laboratories',
  tagline: 'Physician-Inspired. Science-Driven. Purposefully Formulated.',
  paragraphs: [
    'At Physio/Sci Laboratories, we believe exceptional results begin with exceptional science. Our physician-inspired formulations are thoughtfully developed with clinically respected ingredients to support your body’s evolving needs and help you feel your best throughout every stage of your health and wellness journey.',
    'Whether your goal is to preserve lean muscle during GLP-1 therapy, restore healthier-looking skin, support balanced metabolism, or enhance your overall well-being, our products are designed to provide the targeted support your body needs to help you achieve your goals with confidence.',
    'Rooted in clinical insight and guided by a commitment to quality, innovation, and evidence-informed formulation, we believe that your wellness journey deserves more than a one-size-fits-all approach. As your needs evolve, so will our dedication to developing innovative solutions that support your health, vitality, and long-term well-being.',
  ],
  closing: 'Our mission is simple: To empower you with science-driven solutions that help you feel stronger, look healthier, and live more confidently at every stage of your journey.',
  button: { label: 'Explore Our Products', href: '#collection' },
};

export const collection = {
  title: 'Discover the',
  strong: 'Physio/Sci Collection',
  intro: 'Our introductory collection brings together advanced nutritional science, metabolic support, and innovative skincare to address the evolving needs of your wellness journey.',
};

const byHref = (href: string) => products.find((p) => p.href === href)!;

// Order: Sidekick, SkinSaver, Nature's (same as the image, left to right)
export const slides = [
  { id: 'sidekick', ...byHref('/product/glp-1-sidekick') },
  { id: 'skinsaver', ...byHref('/product/glp-1-skinsaver') },
  { id: 'natures', ...byHref('/product/natures-glp-1') },
];

export const bundle = {
  href: '/product/glp-1-total-transformation-system',
  image: '/images/bundle/bundle-gallery-1.webp',
  alt: 'GLP-1 Sidekick jar and GLP-1 SkinSaver pump bottle together',
  title: 'GLP-1 Total Transformation System',
  sub: 'Inside + Outside. Complete Support for Your Weight Loss Journey.',
  lead: 'Two Complementary Products. One Comprehensive Approach.',
  paragraphs: [
    'Weight loss can bring changes that extend beyond the number on the scale. Maintaining lean muscle, supporting adequate nutrition, and caring for your skin are all important parts of feeling confident throughout your transformation.',
    'The GLP-1 Total Transformation System combines two of our signature formulations to provide complementary nutritional and skincare support.',
  ],
  closing: 'Maintain Your Strength. Nourish Your Skin. Feel Confident in Your Transformation.',
  button: 'Explore the Total Transformation System',
};

export const commitment = {
  eyebrow: 'Our Commitment to You',
  title: 'Your Goals Are',
  strong: 'Our Purpose.',
  paragraphs: [
    'At Physio/Sci Laboratories, we understand that every wellness journey is personal.',
    'Whether you are beginning medical weight loss, working toward a healthier metabolism, supporting your skin through physical changes, or pursuing a new health goal, we believe you deserve products developed with intention, integrity, and respect for the science behind them.',
    'Our commitment extends beyond introducing new products. We want to help customers better understand their bodies, make informed wellness decisions, and feel supported throughout their progress.',
  ],
  belief: 'We are building Physio/Sci Laboratories around a simple belief:',
  quote: 'When you combine science, education, and purposeful nutritional support, you create a stronger foundation for lasting wellness.',
  outro: 'This is only the beginning, and we look forward to growing alongside the people who place their trust in us.',
  sign: 'Physio/Sci Laboratories',
  motto: 'Advanced Science. Meaningful Results. Wellness With Purpose.',
  button: { label: 'Explore Our Collection', href: '#collection' },
};
