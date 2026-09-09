/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /**
   * A production build writes to the same .next directory the dev server is
   * serving from, which overwrites the chunks dev has already handed to the
   * browser — every route then 500s with "Cannot find module './vendor-chunks/…'".
   *
   * `npm run build:safe` sets BUILD_DIST_DIR so the build lands somewhere else
   * and a running dev server is left alone. Plain `npm run build` still uses
   * .next, which is what CI and Vercel expect.
   */
  ...(process.env.BUILD_DIST_DIR ? { distDir: process.env.BUILD_DIST_DIR } : {}),
};

export default nextConfig;
