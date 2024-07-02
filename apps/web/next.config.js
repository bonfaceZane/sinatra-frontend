const MillionLint = require("@million/lint")
// next.config.{js|ts}

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["ui", "lib", "@repo/typescript-config"],
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    pageExtensions: ["ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
        reactCompiler: true,
    },
}

module.exports = MillionLint.next({ rsc: true })(nextConfig)
