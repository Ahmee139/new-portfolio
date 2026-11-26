import './globals.css';

// Fonts load in the browser from Google Fonts (no build-time download, so builds never fail on fonts)
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap';

const SITE_URL = 'https://example.com'; // TODO: your domain

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sehar Anjum, SEO Executive | Off-Page SEO, On-Page SEO & Link Building',
  description: 'Sehar Anjum is an SEO Executive specialising in off-page SEO, link building, guest posting outreach and on-page SEO. Helping businesses get found first on Google.',
  authors: [{ name: 'Sehar Anjum' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Sehar Anjum, SEO Executive',
    description: 'Off-page SEO, link building and on-page SEO that move websites up Google.',
    images: ['/assets/img/portrait.jpg']
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/assets/icons/favicon.svg' }
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0C' }
  ]
};

// runs before paint: sets js flag + saved/OS theme so there's no flash
const themeInit = `(function(){var d=document.documentElement;d.classList.remove('no-js');d.classList.add('js');try{var t=localStorage.getItem('sa-theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.setAttribute('data-theme',t);}catch(e){d.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>{children}</body>
    </html>
  );
}
