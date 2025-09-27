"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "@/src/components/common/OptimizedImage";

export default function GalleryGrid({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedImage =
    selectedIndex !== null ? gallery.galleryImages[selectedIndex]?.url : null;

  const goNext = () => {
    if (selectedIndex < gallery.galleryImages.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const closeModal = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex]);

  if (!gallery) return <p>No gallery found</p>;

  return (
    <div className="p-6">
      <div className="columns-2 md:columns-4 gap-1 md:gap-2">
        {gallery.galleryImages.map((img, i) => (
          <div
            key={i}
            className="mb-1 md:mb-2 break-inside-avoid cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            {img ? (
              <OptimizedImage src={img.url} alt={`${i}`} />
            ) : (
              <h1>No Images Found</h1>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeModal}
            >
              <X size={32} />
            </button>

            {selectedIndex > 0 && (
              <button
                className="absolute left-4 md:left-8 text-white"
                onClick={goPrev}
              >
                <ArrowLeft size={40} />
              </button>
            )}

            {selectedIndex < gallery.galleryImages.length - 1 && (
              <button
                className="absolute right-4 md:right-8 text-white"
                onClick={goNext}
              >
                <ArrowRight size={40} />
              </button>
            )}

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
