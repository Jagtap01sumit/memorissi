"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ReviewCard from "./ReviewCard";
import FullReviewCard from "./FullReviewCard";

const reviews = [
  {
    name: "Ankush S.",
    title: "Pure Aroma, Authentic Taste!",
    review:
      "A2 Desi Cow Ghee from Rosier Foods gives my cooking a rich, authentic flavor. The purity and aroma are unmatched—my family loves it!",
    rating: 5,
    image: "/images/image.png",
  },
  {
    name: "Alisha R.",
    title: "Healthy Choice Everyday",
    review:
      "Switching to Khapli wheat from Rosier Foods was the best decision! It's nutritious, easy to digest, and perfect for my family meals.",
    rating: 5,
    image: "/images/image.png",
  },
  {
    name: "Rohan P.",
    title: "Top Quality!",
    review:
      "The ghee is absolutely pure, rich in aroma, and authentic in taste. Highly recommend Rosier Foods!",
    rating: 4,
    image: "/images/image.png",
  },
  {
    name: "Sunita K.",
    title: "Loved by Family",
    review:
      "Everyone in my home loves the taste of this ghee. It has made our meals special.",
    rating: 5,
    image: "/images/image2.png",
  },
  {
    name: "Kajal K.",
    title: "Loved by Family",
    review:
      "Everyone in my home loves the taste of this ghee. It has made our meals special.",
    rating: 5,
    image: "/images/image.png",
  },
  {
    name: "Sneha K.",
    title: "Loved by Family",
    review:
      "Everyone in my home loves the taste of this ghee. It has made our meals special.",
    rating: 5,
    image: "/images/image2.png",
  },
  {
    name: "Rama K.",
    title: "Loved by Family",
    review:
      "Everyone in my home loves the taste of this ghee. It has made our meals special.",
    rating: 5,
    image: "/images/image.png",
  },
  {
    name: "Neha K.",
    title: "Loved by Family",
    review:
      "Everyone in my home loves the taste of this ghee. It has made our meals special.",
    rating: 5,
    image: "/images/image.png",
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const visible = [
    (index - 1 + reviews.length) % reviews.length,
    index,
    (index + 1) % reviews.length,
  ];

  return (
    <div className="relative flex justify-center items-center overflow-hidden md:p-8 w-full">
      {/* Left Button */}
      <button
        onClick={prevCard}
        className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Carousel */}
      <div className="flex gap-3 sm:gap-6">
        {visible.map((i) => {
          const isCenter = i === index;
          return (
            <motion.div
              key={i}
              animate={{
                scale: isCenter ? 1.1 : 0.85,
                opacity: isCenter ? 1 : 0.6,
              }}
              transition={{ duration: 0.6 }}
              className="w-28 sm:w-48 md:w-64 lg:w-72 cursor-pointer flex-shrink-0"
              onClick={() => setSelectedCard(i)}
            >
              <ReviewCard {...reviews[i]} />
            </motion.div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={nextCard}
        className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>
      <AnimatePresence>
        {selectedCard !== null && (
          <FullReviewCard
            review={reviews[selectedCard]}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
