/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/products',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.lorem.space',
                port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

module.exports = nextConfig;
