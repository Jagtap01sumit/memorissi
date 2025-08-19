"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryGrid({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!gallery) return <p>No gallery found</p>;

  return (
    <div className="p-6">
      <div className="columns-2 md:columns-4 gap-1 md:gap-2">
        {gallery.images.map((img, i) => (
          <div
            key={i}
            className=" mb-1 md:mb-2 break-inside-avoid"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`${i}`}
              className="w-full rounded-lg shadow-md object-contain"
            />
          </div>
        ))}
      </div>{" "}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
