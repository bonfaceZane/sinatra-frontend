/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['ui', 'lib', '@repo/typescript-config'],
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        mdxRs: true,
    },
};

module.exports = nextConfig;
