/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui.shadcn.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
