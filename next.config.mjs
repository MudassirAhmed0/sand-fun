import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hadeed-cms.brackets-tech.com",
        port: "",
        pathname: "/img/asset/**"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
