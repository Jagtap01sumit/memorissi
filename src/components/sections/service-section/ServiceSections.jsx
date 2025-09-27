"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "@/src/components/cards/ServiceCard";
import { COLORS } from "@/src/utils";
import { servicesData } from "@/src/data/ServiceCardData";
import { CubeLoader } from "@/src/components/common/loaders/CubicalLoader";

const ServicesSection = ({ slug }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      if (!slug) {
        console.log("slug is not provided");
      }

      try {
        const data = await servicesData(slug);
        if (data) {
          setCategories(data || []);
        } else {
          console.log("SOMETHING WENT WRONG", data);
        }
      } catch (err) {
        console.error("Error loading services:", err);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, [slug]);

  return (
    <section
      className="relative bg-gray-900 py-16 text-center"
      style={{ backgroundColor: COLORS.background }}
    >
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <CubeLoader />
        </div>
      )}

      <h5 className="text-sm text-gray-400">SERVICES</h5>
      <h2 className="text-3xl font-serif mb-10">What We Offer</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {!loading &&
          categories.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.category_name}
              image={service.cover_photo}
              logo={service.logo}
              id={service.id}
            />
          ))}
      </div>
    </section>
  );
};

export default ServicesSection;
