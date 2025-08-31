"use client";
import { use, useEffect, useState } from "react";
import { galleries } from "@/app/data/ServiceCategory";
import { Navbar } from "@/app/sections";
import Link from "next/link";

export default function ServiceCategoryPage({ params }) {
  const { category } = use(params);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function loadGalleries() {
      const data = await galleries(category);
      if (data) setGallery(data);
    }
    loadGalleries();
  }, []);

  return (
    <div className="pt-10 md:pt-20">
      <Navbar />
      <div className="p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-6 uppercase">
          {gallery[0]?.categoryTitle} Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((val, i) => (
            <Link href={`/services/${category}/${val?.id}`} key={i}>
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                {val?.cover_photo && (
                  <img
                    src={val.cover_photo}
                    alt={val.title}
                    className="w-full h-60 object-cover filter blur-[1.2px] group-hover:blur-none transition duration-900"
                  />
                )}
                <div
                  className="absolute inset-0 flex items-center justify-center
                      text-white text-lg font-semibold drop-shadow-md
                      transition-all duration-900
                      group-hover:translate-y-full"
                >
                  {val?.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
