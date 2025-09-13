"use client";
import { Navbar } from "@/app/sections";
import { COLORS } from "@/app/utils";
import FaqAccordion from "../components/aboutus/FAQ";
import Contact from "../components/aboutus/contact";
import Footer from "../components/Footer";
import AboutusDetails from "@/app/components/aboutus/aboutusDetails";
export default function AboutPage() {
  return (
    <div
      style={{ backgroundColor: COLORS.background }}
      className="px-2 pb-2 md:pb-4 md:px-4"
    >
      <Navbar />
      <div className="w-full text-white ">
        <AboutusDetails />
        <FaqAccordion />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
