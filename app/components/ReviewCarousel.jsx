"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import FullReviewCard from "./FullReviewCard";
import { COLORS } from "@/app/utils";

export default function ReviewCarousel({ cardData }) {
  const [index, setIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    if (cardData.length === 0) return;
    const interval = setInterval(() => {
      nextCard();
    }, 5000);
    return () => clearInterval(interval);
  }, [cardData.length]);
  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cardData.length);
  };

  if (cardData.length === 0) {
    return <Loader />;
  }

  return (
    <div className="relative flex justify-center items-center overflow-hidden md:p-8 p-6 w-full md:h-[570px] h-[300px]">
      {/* Left Button */}
      <button
        onClick={prevCard}
        aria-label="Previous Review"
        className="absolute left-2 z-20 shadow-md rounded-full p-2"
        style={{ backgroundColor: COLORS.accent }}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="relative w-full flex justify-center items-center">
        {cardData.map((review, i) => {
          const offset = (i - index + cardData.length) % cardData.length;

          let scale = 0.8;
          let opacity = 0;
          let zIndex = 0;
          let x = 0;
          let blur = "blur(1px)";
          let brightness = "brightness(0.6)";

          if (offset === 0) {
            scale = 1.1;
            opacity = 1;
            zIndex = 3;
            x = 0;
            blur = "blur(0px)";
            brightness = "brightness(1)";
          } else if (offset === 1 || offset === cardData.length - 1) {
            scale = 0.95;
            opacity = 0.8;
            zIndex = 2;
            x = offset === 1 ? 320 : -320;
          } else if (offset === 2 || offset === cardData.length - 2) {
            scale = 0.85;
            opacity = 0.6;
            zIndex = 1;
            x = offset === 2 ? 500 : -500;
          }

          return (
            <motion.div
              key={i}
              className="absolute w-64 sm:w-72 md:w-80 lg:w-96 cursor-pointer"
              style={{
                zIndex,
                filter: `${blur} ${brightness}`,
              }}
              animate={{ scale, opacity, x }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => setSelectedCard(i)}
            >
              <ReviewCard {...review} />
            </motion.div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={nextCard}
        aria-label="Next Review"
        className="absolute right-2 z-20 shadow-md rounded-full p-2"
        style={{ backgroundColor: COLORS.accent }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Full Review Modal */}
      <AnimatePresence>
        {selectedCard !== null && (
          <FullReviewCard
            review={cardData[selectedCard]}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/** Loader Component */
function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <h1 className="text-lg font-semibold animate-pulse">
        Loading reviews...
      </h1>
    </div>
  );
}
