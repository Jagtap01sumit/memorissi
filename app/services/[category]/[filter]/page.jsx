"use client";

import { use, useEffect, useState } from "react";
import { getGrids } from "../../../data/ServiceCategory";
import GalleryView from "../../../components/PhotoGallaryGrid";
import { Navbar } from "@/app/sections";
import { motion } from "framer-motion";

export default function Gallery({ params }) {
  const { filter } = use(params);

  console.log(filter, "id");
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function loadGalleries() {
      const data = await getGrids(filter);
      console.log(data, "grid");
      if (data) {
        setGallery(data || []);
      }
    }
    loadGalleries();
  }, []);

  return (
    <>
      <Navbar />
      {gallery.map((val, i) => (
        <div key={i} className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <h1 className="text-2xl font-bold mb-6">{val.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 px-6 text-sm md:text-lg"
          >
            <div className="flex justify-center">
              <h1>Date:{val.eventDate}</h1>
            </div>
            <div className="flex justify-center">
              <h1>Category: {val.categoryTitle}</h1>
            </div>
          </motion.div>

          {val?.galleryImages?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full flex justify-center mb-10 "
            >
              {val ? (
                <img
                  src={val.galleryImages[0].url}
                  alt={val?.title || "Gallery Main Image"}
                  className="w-full flex justify-center mb-10 px-6 "
                />
              ) : null}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-10 px-6"
          >
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
              {val?.description}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <GalleryView gallery={val} />
          </motion.div>
        </div>
      ))}
    </>
  );
}
