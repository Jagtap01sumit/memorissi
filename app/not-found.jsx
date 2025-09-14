"use client";

import React from "react";
import Hero from "./pages/Hero";
import { COLORS } from "./utils";
import Link from "next/link";
import Footer from "./components/Footer";
export default function NotFound() {
  return (
    <div className="mx-2">
      <Hero imgUrl="/images/image.png" />

      <div
        className="flex flex-col min-h-screen justify-between "
        style={{ backgroundColor: COLORS.background, text: COLORS.textPrimary }}
      >
        {/* Error Section */}
        <div className="flex flex-col items-center justify-center flex-grow py-20">
          <p
            className="uppercase tracking-widest "
            style={{ text: COLORS.textSecondary }}
          >
            Error
          </p>
          <h1 className="mt-4 text-2xl md:text-3xl font-light text-center">
            Sorry, the page you are looking for doesn’t exist.
          </h1>
          <Link
            href="/"
            className="mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Home
          </Link>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
