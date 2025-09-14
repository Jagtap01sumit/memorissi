import React from "react";
import Hero from "../pages/Hero";
import { EmailSection } from "@/app/sections";
import Footer from "../components/Footer";
export default function Services() {
  return (
    <div>
      {" "}
      <div className="mx-2">
        <Hero slug={"/"} />
        <EmailSection />
        <Footer />
      </div>
    </div>
  );
}
