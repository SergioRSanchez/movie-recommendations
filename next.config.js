/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tmdb.org',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
