"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Absolutely stunning work! You captured our day beautifully 💕",
    author: "Sarah & Luke",
    screenshot: "./images/image.png",
  },
  {
    text: "Professional, kind, and truly talented. Highly recommend!",
    author: "Anna & John",
    screenshot: "./images/image.png",
  },
  {
    text: "We were blown away by the final results. Memories for life!",
    author: "Emily & Ryan",
    screenshot: "./images/image.png",
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="bg-[#1c1524] text-white py-16 px-4 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl italic mb-10">
        Client Testimonials
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        {/* Slides */}
        <div className="max-w-5xl w-full overflow-hidden relative">
          <div className="relative w-full min-h-[400px] md:min-h-[500px]">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-8 items-center w-full px-4">
                  {/* Screenshot */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-md">
                      <img
                        src={t.screenshot}
                        alt={`${t.author} review`}
                        className="rounded-2xl shadow-lg w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Testimonial Card */}
                  <div className="bg-[#2a2238] p-3 md:p-10 rounded-2xl shadow-lg text-center md:text-left">
                    <p className="text-4xl leading-none md:mb-4">“</p>
                    <p className="text-sm md:text-lg md:mb-6">{t.text}</p>
                    <p className="text-yellow-400 text-sm font-semibold">
                      {t.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              current === index ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
