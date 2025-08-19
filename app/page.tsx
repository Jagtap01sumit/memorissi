"use client";
import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { HomeIntro, ServicesSection } from "./sections";
import ImageSlider from "@/app/components/ImageSlider";
import { useEffect, useState } from "react";
import { fetchSliderImages } from "@/app/data/SliderData";
export default function HeroSection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadSliderImages() {
      const urls = await fetchSliderImages();
      setImages(urls);
    }
    loadSliderImages();
  }, []);
  return (
    <div
      className="px-2 md:px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <Hero />
      <HomeIntro />
      <ImageSlider images={images} />
      <ServicesSection />
      <Footer />
    </div>
  );
}
