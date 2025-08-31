"use client";
import { fetchHero } from "@/app/data/HeroData";
import { COLORS } from "@/app/utils";
import { useEffect, useState } from "react";
export default function HomeIntro() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadHero() {
      const urls = await fetchHero();
      if (urls) {
        setData(urls);
      } else {
        console.log("SOMETHING WENT WRONG:", urls);
      }
    }
    loadHero();
  }, []);
  return (
    <section
      className="w-full bg-background  py-6 px-6"
      style={{ backgroundColor: COLORS.background, text: COLORS.textPrimary }}
    >
      <div className="text-center max-w-2xl mx-auto mb-0 md:mb-10">
        <p className="tracking-[0.2em] text-xs text-gray-300">
          {data.introTitle}
        </p>
        <h2 className="mt-4 text-2xl md:text-3xl mb-0 md:mb-10 font-light leading-relaxed">
          {data.introPara}
        </h2>
      </div>
    </section>
  );
}
