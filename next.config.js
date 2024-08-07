// @ts-check
const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    /* config options here */
  }
   
  module.exports = withMDX(nextConfig)