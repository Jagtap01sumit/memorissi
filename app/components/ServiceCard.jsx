"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ slug, image, logo, title, id }) {
  return (
    <Link href={`/services/${id}`}>
      <div className="relative h-40 md:w-64 md:h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer group">
        {/* Background Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2A2139]/70 transition-all duration-500 group-hover:bg-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          {/* Logo with animation */}
          {logo && (
            <motion.img
              src={logo}
              alt={`${title} logo`}
              className="w-14 h-14 md:w-20 md:h-20 object-contain mb-3"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}

          {/* Title with animation */}
          <motion.h3
            className="text-lg md:text-xl font-serif text-white drop-shadow-md uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {title}
          </motion.h3>
        </div>
      </div>
    </Link>
  );
}
