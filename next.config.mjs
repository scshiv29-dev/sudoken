/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',  // The directory where the service worker file will be placed
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})({
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ]
  }
});

export default nextConfig;
