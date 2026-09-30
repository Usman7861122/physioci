// Images that still load from the reference WordPress site (header logo, gallery, etc.).
// Later we can download them into /public/images and change this one base URL.
export const WP_UPLOADS = 'https://wordpress-1656419-6596710.cloudwaysapps.com/wp-content/uploads';

export const img = (path: string) => `${WP_UPLOADS}/${path}`;

export const assets = {
  // Remote (WordPress) images
  logoHeader: img('2026/07/logo-lab-1-e1784810889526.jpeg'),
  logoFooter: img('2026/08/logo-removebg-preview.png'),
  signIn: img('2026/07/sign_in-removebg-preview.png'),
  benefitsBg: img('2026/08/couple-with-GPL1.webp'),
  footerBg: img('2026/08/sleep-apnea-background.webp'),
  check: img('2026/08/check-mark.png'),
  compareBottle: img('2026/07/admin-ajax-1.png'),

  // Local images (public/images), from the PDF edits
  heroBg: '/images/main-section.webp',
  formulaBg: '/images/formula-bg.webp',
  problemImage: '/images/hidden-problem.webp',
};
