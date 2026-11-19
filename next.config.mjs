/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/r2', destination: '/prototypes/r2-main.html' },
      { source: '/e-contract', destination: '/prototypes/econtract.html' },
      { source: '/vendor', destination: '/prototypes/vendor.html' },
      { source: '/r2-e-contract', destination: '/prototypes/r2-econtract.html' },
      { source: '/guide', destination: '/prototypes/people-solar-public-top-nav.html' },
      { source: '/vendor-guide', destination: '/prototypes/people-solar-vendor-top-nav.html' },
      // ต้นแบบและคู่มือลิงก์หากันด้วยชื่อไฟล์ (relative) ให้ชื่อไฟล์ที่ระดับบนสุดเปิดได้ด้วย
      { source: '/people-solar-public-top-nav.html', destination: '/prototypes/people-solar-public-top-nav.html' },
      { source: '/people-solar-vendor-top-nav.html', destination: '/prototypes/people-solar-vendor-top-nav.html' },
    ];
  },
};
export default nextConfig;
