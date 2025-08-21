"use client";
import { useEffect, useRef, useState } from "react";
import ReelsScroller from "@/app/components/Reel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchReelsData } from "@/app/data/FeaturedStory";
export default function FeaturedStory() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    async function loadReels() {
      const data = await fetchReelsData();
      console.log(data, "client data");
      if (!data) {
        console.error("Error fetching reels:", error);
        setReels([]);
      } else {
        console.log("Fetched reel URL:", data);
        setReels(data || []);
      }
    }
    loadReels();
  }, []);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#1a1525] text-white px-6 py-16">
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-sm text-gray-400">
          Portfolio
        </p>
        <h2 className="text-4xl font-serif">Featured Story</h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 items-start">
        <div className="col-span-1 bg-[#2a2238] md:bg-[#2a2238] bg-transparent p-6 rounded-r-2xl sticky top-24 self-start shadow-lg">
          <h3 className="text-5xl font-bold text-yellow-400">01</h3>
          <p className="mt-4 font-semibold italic text-lg">
            Ricardo & Michelle
          </p>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            We also help in social media management.
          </p>
        </div>

        <div className="relative col-span-2">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg"
          >
            <ChevronLeft />
          </button>

          <div
            className="flex gap-6 snap-x snap-mandatory scroll-smooth overflow-hidden"
            ref={scrollRef}
          >
            <ReelsScroller reels={reels} />
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
