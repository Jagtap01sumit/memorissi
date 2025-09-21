import Hero from "../pages/Hero";
import { EmailSection } from "@/app/sections";
import Footer from "../components/Footer";
import { COLORS } from "../utils";
import { HomeIntro } from "../sections";
export default function Services() {
  const slug = "contact";
  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <div className="mx-2">
        <Hero slug={slug} /> <HomeIntro slug={slug} />
        <EmailSection />
        <Footer />
      </div>
    </div>
  );
}
