"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "@/app/components/ServiceCard";
import { COLORS } from "@/app/utils";
import { servicesData } from "@/app/data/ServiceCardData";
const ServicesSection = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function loadServices() {
      const { data, error } = await servicesData();
      if (error) {
        console.error("Error fetching services:", error);
        setCategories([]);
      } else {
        console.log("Fetched URL:", data);
        setCategories(data || []);
      }
    }
    loadServices();
  }, []);
  return (
    <section
      className="bg-gray-900 py-16 text-center"
      style={{ backgroundColor: COLORS.background }}
    >
      <h5 className="text-sm text-gray-400">SERVICES</h5>
      <h2 className="text-3xl font-serif mb-10">What I Offer</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.category_name}
            image={service.cover_photo}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
