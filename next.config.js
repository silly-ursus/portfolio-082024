// @ts-check
const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    /* config options here */
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
   
  module.exports = withMDX(nextConfig)