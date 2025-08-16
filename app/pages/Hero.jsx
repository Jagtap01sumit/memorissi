"use client";

import { Navbar, HomeIntro } from "@/app/sections";
import { MEDIA } from "@/app/utils";

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
    </div>
  );
}
