"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/app/utils";
import { getAboutPageData } from "../../data/AboutUsData";

export default function AboutUsDetails() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAboutPageData();
      setAboutData(data);
    }
    fetchData();
  }, []);

  if (!aboutData)
    return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div>
      {/* Hero */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center px-5 md:px-2"
        style={{
          backgroundImage: `url(${aboutData.hero?.image})`,
        }}
      >
        <motion.div className=" p-6 rounded-lg text-center">
          <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
            {aboutData.hero?.title}
          </motion.h1>
          <motion.p className="mt-4 max-w-2xl text-lg mx-auto">
            {aboutData.hero?.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Me */}
      <motion.div
        className="p-16 flex flex-col items-center gap-8 text-center md:text-left"
        style={{
          backgroundColor: COLORS.cardBackground,
          text: COLORS.textPrimary,
        }}
      >
        <motion.img
          src={aboutData.me?.image}
          alt={aboutData.me?.name}
          className="md:w-60 md:h-60 w-30 h-30 rounded-full object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-center">
            {aboutData.me?.name}
          </h2>
          <p className="text-yellow-400 mt-2 md:text-3xl">
            {aboutData.me?.title}
          </p>
        </div>
      </motion.div>

      {/* Journey */}
      <motion.div className="max-w-3xl mx-auto mb-10 px-2 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {aboutData.journey?.title}
        </h2>
        <p className="text-justify text-gray-300 leading-relaxed tracking-wide indent-8">
          {aboutData.journey?.description}
        </p>
      </motion.div>

      {/* Showcases */}
      {aboutData.showcases?.map((item, index) => (
        <React.Fragment key={index}>
          <section
            className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center relative overflow-hidden"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg px-4 text-center">
              {item.title}
            </motion.h1>
          </section>

          <motion.div className={`py-4 px-2 md:px-16 `}>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
              {item.title}
            </h2>
            <p className="text-justify text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide indent-8">
              {item.description}
            </p>
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
}
