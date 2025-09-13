"use client";
import { motion } from "framer-motion";
import { COLORS } from "@/app/utils";
import { getAboutPageData } from "../../data/AboutUsData";
import { useEffect, useState } from "react";

export default function Contact() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function fetchAboutUsData() {
      try {
        const data = await getAboutPageData();
        if (data) setAboutData(data);
      } catch (error) {
        console.error("Error fetching About Page data:", error);
      }
    }
    fetchAboutUsData();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  if (!aboutData) {
    return (
      <section
        className="relative py-10 px-6 md:px-16 text-center"
        style={{ backgroundColor: COLORS.background }}
      >
        <p className="text-gray-400">Loading contact info...</p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-10 px-3 md:px-16 text-center"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
          {aboutData.contact?.title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          {aboutData.contact?.message}
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3 text-lg text-gray-200"
      >
        <motion.p variants={fadeUp}>📧 {aboutData.contact?.email}</motion.p>
        <motion.p variants={fadeUp}>📱 {aboutData.contact?.phone}</motion.p>
        <motion.p variants={fadeUp}>📍 {aboutData.contact?.location}</motion.p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 flex justify-center gap-8"
      >
        {aboutData.contact?.socials?.map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            {social.name}
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12"
      >
        <a
          href={`mailto:${aboutData.contact?.email}`}
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-300 transition"
        >
          Send Us a Message
        </a>
      </motion.div>
    </section>
  );
}
