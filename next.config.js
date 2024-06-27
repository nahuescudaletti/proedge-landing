const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'standalone',
    distDir: 'dist', // Asegúrate de que esta configuración sea compatible con tu estructura de proyecto
    assetPrefix: isProd ? '' : '',
    images: {
        loader: 'custom', // Asegúrate de que estás usando un loader personalizado si es necesario
        path: isProd ? '/proedge-landing/_next/image' : '/_next/image', // Ajusta según el entorno de producción
        domains: ['example.com'], // Agrega tus dominios de imágenes si es necesario
        // otras configuraciones de imágenes
    },
    // otras configuraciones específicas de Next.js
};

module.exports = nextConfig;
