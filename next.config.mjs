/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/blog", destination: "https://blog.lockvera.com/", permanent: true },
      { source: "/blog/:slug*", destination: "https://blog.lockvera.com/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;
