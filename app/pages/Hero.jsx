"use client";

import { Navbar } from "@/app/sections";
import { COLORS } from "@/app/utils";
import { useEffect, useState } from "react";
import { fetchHeroBySlug } from "@/app/data/HeroData";

export default function Hero({ slug, imgUrl }) {
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(null);

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

  if (!url && !data) return null;

  return (
    <div
      className={`relative w-full h-[500px] md:h-[80vh] lg:min-h-screen px-2 ${
        url ? "bg-no-repeat bg-center bg-cover" : ""
      }`}
      style={{
        backgroundImage: url ? `url('${url}')` : "none",
      }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        style={{ color: COLORS.textPrimary }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          {data?.heroHeading}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow">
          {data?.heroIntroPara}
        </p>
      </div>
    </div>
  );
}
