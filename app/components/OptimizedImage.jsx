"use client";
import Image from "next/image";
import { useState } from "react";
import Loader from "./loaders/ImageLoader";

export default function OptimizedImage({ src, alt }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-60">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 animate-pulse">
          <Loader />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
