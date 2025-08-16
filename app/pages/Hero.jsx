"use client";

import { Navbar, HomeIntro } from "@/app/sections";
import { COLORS } from "@/app/utils";

export default function Hero() {
  return (
    <div
      className="
        relative w-full 
        h-[60vh] md:h-[80vh] lg:min-h-screen
        bg-no-repeat bg-center bg-cover px-2
      "
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center  px-4"
        style={{ text: COLORS.textPrimary }}
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
