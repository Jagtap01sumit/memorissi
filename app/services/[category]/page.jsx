"use client";

import { galleries } from "@/app/data/ServiceCategory";
import { Navbar } from "@/app/sections";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServiceCategoryPage({ params }) {
  const { category } = params;
  const [obj, setObj] = useState([]);

  const getCategoryImages = (category) => {
    return Object.values(galleries).filter((g) => g.category === category);
  };

  useEffect(() => {
    setObj(getCategoryImages(category) || []);
  }, [category]);

  return (
    <div className="pt-10 md:pt-20">
      <Navbar />
      <div className="p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {category} Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {obj.map((val, i) => (
            <Link key={i} href={`/services/${category}/${val.id}`}>
              <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={val.cover}
                  alt={`${category}${i}`}
                  className="w-full h-60 object-cover filter blur-[1.2px] group-hover:blur-none transition duration-900"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center 
                   text-white text-lg font-semibold drop-shadow-md
                   transition-all duration-900 
                   group-hover:translate-y-full"
                >
                  {val.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <img
                src={img}
                alt={`${category}-${i}`}
                className="w-full rounded-lg shadow-md object-contain"
              />
            </div>
          ))}
        </div> */
}
