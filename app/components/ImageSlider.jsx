"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { urlFor } from "../../lib/sanityClient";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchSliderImages } from "../data/SliderData";

export default function ImageSlider({ images }) {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   async function loadSliderImages() {
  //     const urls = await fetchSliderImages();
  //     setImages(urls || []);
  //   }
  //   loadSliderImages();
  // }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // continuous
    speed: 4000, // adjust for flow speed
    cssEase: "linear", // smooth flow
    slidesToShow: 1.5, // number of images visible at once
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    draggable: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1.5, // peek next img
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1440, // desktop
        settings: {
          slidesToShow: 3, // side previews
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {images?.length > 0 ? (
          images.map((src, idx) => (
            <div
              key={src._id || idx}
              className="relative w-full aspect-[16/9] md:aspect-[3/2] lg:aspect-[21/9]"
            >
              <Image
                src={src}
                alt={src || `Slide ${idx}`}
                fill
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
                className="object-cover rounded-xl px-2"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No images available</p>
        )}
      </Slider>
    </div>
  );
}
