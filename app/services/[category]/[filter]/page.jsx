"use client";
import { getGalleryById } from "@/app/data/ServiceCategory";
import GalleryView from "../../../components/PhotoGallaryGrid";
import { Navbar } from "@/app/sections";
import { motion } from "framer-motion";

export default function Gallery({ params }) {
  const gallery = getGalleryById(params.filter);

  return (
    <>
      <Navbar />
      <div className="mt-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <h1 className="text-2xl font-bold mb-6">{gallery.title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 px-6 text-sm md:text-lg"
        >
          <div className="flex justify-center">
            <h1>Date: 18-08-2025</h1>
          </div>
          <div className="flex justify-center">
            <h1>Category: {gallery.category}</h1>
          </div>
        </motion.div>

        {gallery && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center mb-10 px-6"
          >
            <img
              src={gallery?.images[1].src}
              alt={gallery?.title || "Gallery Main Image"}
              className="w-full flex justify-center mb-10 "
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 px-6"
        >
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            {gallery?.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <GalleryView gallery={{ ...gallery }} />
        </motion.div>
      </div>
    </>
  );
}
