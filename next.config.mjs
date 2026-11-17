/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/r2', destination: '/prototypes/r2-main.html' },
      { source: '/e-contract', destination: '/prototypes/econtract.html' },
      { source: '/vendor', destination: '/prototypes/vendor.html' },
      { source: '/r2-e-contract', destination: '/prototypes/r2-econtract.html' },
    ];
  },
};
export default nextConfig;
