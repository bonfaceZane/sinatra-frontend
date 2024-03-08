/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["ui"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
