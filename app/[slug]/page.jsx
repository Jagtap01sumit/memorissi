import { COLORS } from "@/app/utils";
import Hero from "@/app/pages/Hero";
import Footer from "@/app/components/Footer";
import { EmailSection, HomeIntro, ServicesSection } from "../sections";
import ImageSlider from "@/app/components/ImageSlider";
import { isSlugAvl } from "@/app/data/HeroData";
import { ClientTestimonials } from "@/app/sections";
import { notFound } from "next/navigation";

export default async function HeroSection({ params }) {
  const slug = params.slug;

  const slugAvailability = await isSlugAvl(slug);

  if (!slugAvailability) {
    notFound();
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
    </div>
  );
}
