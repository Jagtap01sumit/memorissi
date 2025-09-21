import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { EmailSection, HomeIntro, ServicesSection } from "@/app/sections";
import ImageSlider from "@/app/components/ImageSlider";
import { ClientTestimonials } from "@/app/sections";

export default function Services() {
  const slug = "services";
  console.log(slug, "service slug");
  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <div className="mx-2">
        <Hero slug={slug} />
        <HomeIntro slug={slug} />
        <ServicesSection slug={"/"} />
        <ImageSlider slug={slug} />
        <ClientTestimonials slug={slug} />
        <EmailSection />
        <Footer />
      </div>
    </div>
  );
}
