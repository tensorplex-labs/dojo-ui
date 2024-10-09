/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dojo-files-dev.tensorplex.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
