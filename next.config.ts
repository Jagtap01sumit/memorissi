
const { URL } = require("url");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHost = new URL(supabaseUrl).hostname;

const nextConfig = {
  images: {
    remotePatterns: [
      {

        protocol: "https",
        hostname: supabaseHost,
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

module.exports = nextConfig;
