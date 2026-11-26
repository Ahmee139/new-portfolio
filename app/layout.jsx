import { Familjen_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Familjen_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-mono', display: 'swap' });

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
    <html lang="en" className={`no-js ${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
