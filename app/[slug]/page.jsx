import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { EmailSection, HomeIntro, ServicesSection } from "../sections";
import ImageSlider from "@/app/components/ImageSlider";
import { fetchSliderImages } from "@/app/data/SliderData";
import { FeaturedStory, ClientTestimonials } from "@/app/sections";
import { notFound } from "next/navigation";
import { fetchHeroBySlug } from "../data/HeroData";

export default async function HeroSection({ params }) {
  const slug = params.slug;

  const urls = await fetchSliderImages(slug);

  if (!urls || urls.length === 0) {
    notFound();
  }
  const heroData = await fetchHeroBySlug(slug);
  // if (!heroData) {
  //   notFound();
  // }
  return (
    <div
      className="px-2 pb-2 md:pb-4 md:px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <Hero slug={slug} />
      <HomeIntro slug={slug} />
      <ImageSlider images={urls} />
      <ServicesSection slug={slug} />
      <ClientTestimonials />
      <EmailSection />
      <Footer />
    </div>
  );
}
