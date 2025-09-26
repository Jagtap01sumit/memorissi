import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { EmailSection, HomeIntro, ServicesSection } from "@/app/sections";
import ImageSlider from "@/app/components/ImageSlider";
import { fetchSliderImages } from "@/app/data/SliderData";
import { FeaturedStory, ClientTestimonials } from "@/app/sections";
import { FloatingSocialButtons } from "@/app/components/socialbuttons/FloatingSocialButtons";
export default async function HeroSection() {
  const slug = "/";

  return (
    <div
      className="px-2 pb-2 md:pb-4 md:px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <Hero slug={slug} />
      <HomeIntro slug={slug} />
      <ImageSlider images={urls} />
      <ServicesSection slug={slug} />
      <ClientTestimonials slug={slug} />
      <EmailSection />
      <Footer />
      <FloatingSocialButtons />
    </div>
  );
}
