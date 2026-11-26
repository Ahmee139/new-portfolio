import Chrome from '@/components/Chrome';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Climb from '@/components/Climb';
import Cases from '@/components/Cases';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';
import { CONFIG } from '@/lib/config';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Sehar Anjum',
      jobTitle: 'SEO Executive',
      worksFor: { '@type': 'Organization', name: 'Mesh Square' },
      knowsAbout: ['Off-Page SEO', 'On-Page SEO', 'Link Building', 'Guest Posting', 'Blogger Outreach', 'Business Listings'],
      image: '/assets/img/sehar.jpg',
      sameAs: [CONFIG.linkedin]
    },
    {
      '@type': 'ProfessionalService',
      name: 'Sehar Anjum SEO',
      description: 'Off-page SEO, link building and on-page SEO services.',
      areaServed: 'Worldwide',
      serviceType: ['Off-Page SEO', 'On-Page SEO', 'Link Building']
    }
  ]
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Chrome />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Climb />
        <Cases />
        <Process />
        <Contact />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
