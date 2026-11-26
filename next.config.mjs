/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain static site to /out (deploys anywhere, incl. Vercel)
  output: 'export',
  images: { unoptimized: true },
  // The scroll/animation engine mutates the DOM once on mount; StrictMode's double-mount would init it twice in dev
  reactStrictMode: false
};

export default nextConfig;
