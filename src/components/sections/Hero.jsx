"use client";

import Navbar from "../layout/Navbar";
import { COLORS } from "@/src/utils";
import { useEffect, useState } from "react";
import { fetchHeroBySlug } from "@/src/data/HeroData";
import { CubeLoader } from "@/src/components/common/loaders/CubicalLoader";

export default function Hero({ slug, imgUrl }) {
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHero() {
      if (imgUrl) {
        setUrl(imgUrl);
        return;
      }

      if (slug) {
        const urls = await fetchHeroBySlug(slug);
        if (urls && !imgUrl) {
          setUrl(urls.heroImage);
          setData(urls);
        } else {
          console.log("SOMETHING WENT WRONG:", urls);
        }
      }
    }
    loadHero();
  }, [slug, imgUrl]);

  return (
    <div
      className={`relative w-full h-[500px] md:h-[80vh] lg:min-h-screen px-2 ${
        url ? "bg-no-repeat bg-center bg-cover" : "bg-gray-200"
      }`}
      style={{
        backgroundImage: url ? `url('${url}')` : "none",
      }}
    >
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <CubeLoader />
        </div>
      )}

      <Navbar />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        style={{ color: COLORS.textPrimary }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          {data?.heroHeading || "404"}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow">
          {data?.heroIntroPara || "Page Not Found!!"}
        </p>
      </div>

      {url && (
        <img
          src={url}
          alt="preload"
          className="hidden"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      )}
    </div>
  );
}
