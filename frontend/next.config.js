/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
// module.exports = {
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://api.cloudinary.com/:path*",
//       },
//     ];
//   },
// };
