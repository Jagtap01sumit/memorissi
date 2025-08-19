"use client";
import { use } from "react";
import { galleries, getTitleByIdForCategory } from "@/app/data/ServiceCategory";
import { Navbar } from "@/app/sections";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getIdFromTitle } from "../../data/ServiceCategory";

export default function ServiceCategoryPage({ params }) {
  const { category } = use(params);
  const [gallery, setGallery] = useState([]);

  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    async function loadGalleries() {
      const { data, error } = await galleries();
      if (error) {
        console.error("Error fetching galleries:", error);
        setGallery([]);
      } else {
        console.log("Fetched galleries:", data);
        setGallery(data || []);
      }
    }
    loadGalleries();
  }, []);

  useEffect(() => {
    async function loadId() {
      const { data, error } = await getIdFromTitle(category);
      if (error) {
        console.error("Error fetching id:", error);
        setCategoryId();
      } else {
        console.log("Fetched id:", data);
        setCategoryId(data.id);
        console.log(categoryId, "cat");
      }
    }
    loadId();
  }, []);

  return (
    <div className="pt-10 md:pt-20">
      <Navbar />
      <div className="p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {category} Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery
            .filter((item) => item.category_id === categoryId)
            .map((val, i) => (
              <Link key={i} href={`/services/${category}/${val.id}`}>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                  <img
                    src={val.cover_image}
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
