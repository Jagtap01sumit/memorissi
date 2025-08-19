"use client";

import { Navbar } from "@/app/sections";
import { supabase } from "@/lib/supabaseClient";
import { COLORS } from "@/app/utils";
import { useEffect, useState } from "react";
import { fetchHeroImage } from "@/app/data/HeroData";

export default function Hero() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    async function loadHero() {
      const heroUrl = await fetchHeroImage();
      console.log("Fetched URL:", heroUrl);
      if (heroUrl) {
        setUrl(heroUrl);
      } else {
        console.log("SOMETHING WENT WRONG:", heroUrl);
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
          Capture Your Best Moments
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow">
          We specialize in wedding, commercial, and creative photography.
        </p>
      </div>
    </div>
  );
}
