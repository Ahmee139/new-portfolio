'use client';
import { useEffect } from 'react';
import { initSite } from '@/lib/site';

// Mounts the GSAP / Lenis / canvas engine once the static markup is on the page.
export default function SiteEffects() {
  useEffect(() => { initSite(); }, []);
  return null;
}
