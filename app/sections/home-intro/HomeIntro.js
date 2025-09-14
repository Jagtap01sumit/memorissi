"use client";
import { fetchHeroBySlug } from "@/app/data/HeroData";
import { COLORS } from "@/app/utils";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
export default function HomeIntro({ slug }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadHero() {
      if (!slug) return;
      const urls = await fetchHeroBySlug(slug);
      // if (!urls) {
      //   console.log("SOMETHING WENT WRONG:", urls);
      //   notFound();
      // }
      if (urls) {
        setData(urls);
      }
    }
    loadHero();
  }, [slug]);
  return (
    <section
      className="w-full bg-background  py-6 px-6"
      style={{ backgroundColor: COLORS.background, text: COLORS.textPrimary }}
    >
      <div className="text-center max-w-2xl mx-auto mb-0 md:mb-10">
        <p className="tracking-[0.2em] text-xs text-gray-300">
          {data.heroIntroTitle}
        </p>
        <h2 className="mt-4 text-2xl md:text-3xl mb-0 md:mb-10 font-light leading-relaxed">
          {data.heroParagraph}
        </h2>
      </div>
    </section>
  );
}
