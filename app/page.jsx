<<<<<<< Updated upstream
import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { EmailSection, HomeIntro, ServicesSection } from "@/app/sections";
import ImageSlider from "@/app/components/ImageSlider";

import { FeaturedStory, ClientTestimonials } from "@/app/sections";
import { FloatingSocialButtons } from "@/app/components/socialbuttons/FloatingSocialButtons";
=======
import { COLORS } from "@/src/utils";
import Hero from "@/src/components/sections/Hero";
import Footer from "@/src/components/layout/Footer";
import {
  EmailSection,
  HomeIntro,
  ServicesSection,
} from "@/src/components/sections";
import ImageSlider from "@/src/components/media/ImageSlider";
import { FeaturedStory, ClientTestimonials } from "@/src/components/sections";
import { FloatingSocialButtons } from "@/src/components/common/FloatingSocialButtons";
import { fetchSliderImages } from "@/src/data/SliderData";
>>>>>>> Stashed changes
export default async function HeroSection() {
  const slug = "/";
  const urls = await fetchSliderImages(slug);

  if (!urls || urls.length === 0) {
    // notFound();
  }
  return (
    <div
      className="px-2 pb-2 md:pb-4 md:px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <Hero slug={slug} />
      <HomeIntro slug={slug} />
      <ImageSlider slug={slug} />
      <ServicesSection slug={slug} />
      <ClientTestimonials slug={slug} />
      <EmailSection />
      <Footer />
      <FloatingSocialButtons />
    </div>
  );
}
