import { URL } from "url";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseHost = new URL(supabaseUrl).hostname;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseHost,
        pathname: "/storage/v1/object/**",

      },
    ], domains: ["cdn.sanity.io"]
  },
};

export default nextConfig;
