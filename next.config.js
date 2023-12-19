/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['res.cloudinary.com', 'via.placeholder.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '**',
            }
        ]
    }
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './src/i18n.ts'
);

module.exports = withNextIntl(nextConfig);
