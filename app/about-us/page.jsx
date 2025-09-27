import Navbar from "@/src/components/layout/Navbar";
import { COLORS } from "@/src/utils";
import FaqAccordion from "../../src/components/aboutus/FAQ";
import Contact from "../../src/components/aboutus/contact";
import Footer from "../../src/components/layout/Footer";
import AboutusDetails from "@/src/components/aboutus/aboutusDetails";
import Hero from "@/src/components/sections/Hero";
import { FloatingSocialButtons } from "@/src/components/common/FloatingSocialButtons";
export default function AboutPage() {
  const slug = "about-us";
  return (
    <div
      style={{ backgroundColor: COLORS.background }}
      className="px-2 pb-2 md:pb-4 md:px-4"
    >
      <Navbar />
      <div className="w-full text-white ">
        <Hero slug={slug} />
        {/* <HomeIntro slug={slug} /> */}
        <AboutusDetails />
        <FaqAccordion />
        <Contact />
        <Footer />
        <FloatingSocialButtons />
      </div>
    </div>
  );
}
