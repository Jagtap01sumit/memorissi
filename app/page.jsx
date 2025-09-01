"use client";
import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { EmailSection, HomeIntro, ServicesSection } from "./sections";
import ImageSlider from "@/app/components/ImageSlider";
import { useEffect, useState } from "react";
import { fetchSliderImages } from "@/app/data/SliderData";
import { FeaturedStory, ClientTestimonials } from "@/app/sections";
export default function HeroSection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadSliderImages() {
      const urls = await fetchSliderImages();
      setImages(urls || []);
    }
    loadSliderImages();
  }, []);
  return (
    <div
      className="px-2 pb-2 md:pb-4 md:px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <Hero />
      <HomeIntro />
      <ImageSlider images={images} />
      <ServicesSection />
      {/* <FeaturedStory /> */}
      <ClientTestimonials />
      <EmailSection />
      <Footer />
    </div>
  );
}
