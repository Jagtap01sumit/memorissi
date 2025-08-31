"use client";

import { Navbar } from "@/app/sections";
import { COLORS } from "@/app/utils";
import { useEffect, useState } from "react";
import { fetchHero } from "@/app/data/HeroData";

export default function Hero() {
  const [url, setUrl] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadHero() {
      const urls = await fetchHero();
      if (urls) {
        setUrl(urls.heroImage.url);
        setData(urls);
      } else {
        console.log("SOMETHING WENT WRONG:", urls);
      }
    }
    loadHero();
  }, []);
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] lg:min-h-screen bg-no-repeat bg-center bg-cover px-2"
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
          {data?.title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow">
          {data?.paragraph}
        </p>
      </div>
    </div>
  );
}
