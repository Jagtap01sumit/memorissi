import Hero from "@/src/components/sections/Hero";
import { EmailSection } from "@/src/components/sections";
import Footer from "@/src/components/layout/Footer";
import { COLORS } from "@/src//utils";
import HomeIntro from "@/src/components/sections/home-intro/HomeIntro";
export default function Services() {
  const slug = "contact";
  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <div className="mx-2">
        <Hero slug={slug} />
        <HomeIntro slug={slug} />
        <EmailSection />
        <Footer />
      </div>
    </div>
  );
}
