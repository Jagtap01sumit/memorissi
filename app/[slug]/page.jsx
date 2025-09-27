import { COLORS } from "@/src/utils";
import Hero from "@/src/components/sections/Hero";
import Footer from "@/src/components/layout/Footer";
import {
  EmailSection,
  HomeIntro,
  ServicesSection,
} from "@/src/components/sections";
import ImageSlider from "@/src/components/media/ImageSlider";
import { isSlugAvl } from "@/src/data/HeroData";
import { ClientTestimonials } from "@/src/components/sections";
import { notFound } from "next/navigation";
import { FloatingSocialButtons } from "@/app/components/socialbuttons/FloatingSocialButtons";
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
      <FloatingSocialButtons />
    </div>
  );
}
