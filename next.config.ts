import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Preserve previously shared merchandise links after the brand change.
    return ["polo", "taza", "bolso"].map((item) => ({
      source: `/merch/${item}-kuntiq`,
      destination: `/merch/${item}-agromia`,
      permanent: true,
    }));
  },
};

export default nextConfig;
