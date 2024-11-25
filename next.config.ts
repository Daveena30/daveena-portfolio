import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Option recommandée
  images: {
    domains: [], // Ajoutez ici vos domaines pour les images externes si nécessaire
  },
};

export default nextConfig;
