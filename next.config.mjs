/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  headers: async () => {
    return [
      {
        source: '/(.*)', // applies to all routes
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dojo-files-dev.tensorplex.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dojo-files-testnet.tensorplex.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dojo-files.tensorplex.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // Handle .spz files as static assets
    config.module.rules.push({
      test: /\.spz$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
