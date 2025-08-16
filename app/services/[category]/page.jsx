"use client";

import { categoryImages } from "@/app/data/ServiceCategory";
import { Navbar, HomeIntro } from "@/app/sections";
export default function ServiceCategoryPage({ params }) {
  const { category } = params;
  const images = categoryImages[category] || [];

  return (
    <div className="pt-10 md:pt-20">
      <Navbar />
      <div className="p-8 md:p10">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {category} Gallery
        </h1>

        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={`${img}`}
                alt={`${category}-${i}`}
                className="rounded-lg shadow-md object-cover"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No images found for {category}</p>
        )}
      </div>
    </div>
  );
}
