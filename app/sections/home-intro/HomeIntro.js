"use client";
import { COLORS } from "@/app/utils";
export default function HomeIntro() {
  return (
    <section
      className="w-full bg-background  py-6 px-6"
      style={{ backgroundColor: COLORS.background, text: COLORS.textPrimary }}
    >
      <div className="text-center max-w-2xl mx-auto mb-0 md:mb-10">
        <p className="tracking-[0.2em] text-xs text-gray-300">
          AWARD WINNING PHOTOGRAPHY
        </p>
        <h2 className="mt-4 text-2xl md:text-3xl mb-0 md:mb-10 font-light leading-relaxed">
          Showcasing your big day in a memorable <br /> and unforgettable way.
        </h2>
      </div>
    </section>
  );
}
