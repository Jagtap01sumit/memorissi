import { COLORS } from "@/src/utils";
import Hero from "@/src/components/sections/Hero";
import Footer from "@/src/components/layout/Footer";
import {
  EmailSection,
  HomeIntro,
  ServicesSection,
} from "@/src/components/sections";
import { ImageSlider } from "@/src/components/media/ImageSlider";
import { ClientTestimonials } from "@/src/components/sections";

export default function Services() {
  const slug = "services";
  console.log(slug, "service slug");
  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <div className="mx-2">
        <Hero slug={slug} />
        <HomeIntro slug={slug} />
        <ServicesSection slug={slug} />
        <ImageSlider slug={slug} />
        <ClientTestimonials slug={slug} />
        <EmailSection />
        <Footer />
      </div>
    </div>
  );
}
