"use client";

import { use, useEffect, useState } from "react";
import { getGrids } from "../../../data/ServiceCategory";
import GalleryView from "../../../components/PhotoGallaryGrid";
import { Navbar } from "@/app/sections";
import { motion } from "framer-motion";

export default function Gallery({ params }) {
  const { filter } = use(params);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function loadGalleries() {
      const data = await getGrids(filter);
      if (data) setGallery(data || []);
    }
    loadGalleries();
  }, []);

  return (
    <>
      <Navbar />
      {gallery.map((val, i) => (
        <div key={i} className="mt-12 md:mt-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-h-[600px] overflow-hidden rounded-xl mx-auto"
          >
            <img
              src={val.galleryImages?.[0]?.url}
              alt={val?.title || "Gallery Main Image"}
              className="w-full h-[400px] md:h-[500px] object-cover brightness-90"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-4xl font-bold text-white"
              >
                {val.title}
              </motion.h1>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 mt-3"
              >
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                  📅 {val.eventDate}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                  📍 {val.categoryTitle}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-center my-10 px-6"
          >
            <p className="text-justify text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide indent-8">
              {val?.description}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {val ? <GalleryView gallery={val} /> : <Loader />}
          </motion.div>
        </div>
      ))}
    </>
  );
}

function Loader() {
  return (
    <div className="flex flex-row gap-2 justify-center items-center py-10">
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}
