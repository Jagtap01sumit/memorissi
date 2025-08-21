import React from "react";
import Hero from "../pages/Hero";
import { ServicesSection } from "@/app/sections";
import Footer from "../components/Footer";
export default function Services() {
  return (
    <div>
      {" "}
      <div className="mx-2">
        <Hero />
        <ServicesSection />
        <Footer />
      </div>
    </div>
  );
}
