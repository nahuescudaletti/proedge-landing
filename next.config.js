const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'standalone',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // ... otras configuraciones que ya tengas
};

module.exports = nextConfig;
