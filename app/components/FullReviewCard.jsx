"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { COLORS } from "@/app/utils";
export default function FullReviewCard({ review, onClose }) {
  if (!review) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className=" rounded-2xl shadow-lg max-w-2xl w-full relative p-6"
        style={{
          backgroundColor: COLORS.cardBackground,
          text: COLORS.textPrimary,
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
          onClick={onClose}
        >
          <X size={28} />
        </button>

        <img
          src={review.image}
          alt={review.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{
            text: COLORS.textPrimary,
          }}
        >
          {review.title}
        </h2>

        <p
          className="text-center mb-4"
          style={{
            // backgroundColor: COLORS.cardBackground,
            text: COLORS.textPrimary,
          }}
        >
          — {review.name}
        </p>

        <p
          className="text-lg leading-relaxed text-center"
          style={{
            // backgroundColor: COLORS.cardBackground,
            text: COLORS.textPrimary,
          }}
        >
          {review.review}
        </p>
      </div>
    </motion.div>
  );
}
