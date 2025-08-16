import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { MEDIA } from "@/app/utils";
import { HomeIntro, ServicesSection } from "./sections";
import ImageSlider from "@/app/components/ImageSlider";
export default function HeroSection() {
  const sliderImages = [
    `${MEDIA.slider.path}1.png`,
    `${MEDIA.slider.path}2.png`,
    `${MEDIA.slider.path}3.png`,
    `${MEDIA.slider.path}4.png`,
  ];
  return (
    <div
      className="px-2 md:px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <Hero />

      <HomeIntro />
      <ImageSlider images={sliderImages} />
      <ServicesSection />
      <Footer />
    </div>
  );
}
