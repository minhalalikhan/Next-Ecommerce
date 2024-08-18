/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '', // optional, leave empty for default
                pathname: '/**', // optional, allows all paths
            },
            {
                protocol: 'http',
                hostname: 'another-example.com',
                pathname: '/images/**',
            },
        ],
    },

};

export default nextConfig;