"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchSliderImages } from "@/src/data/SliderData";

export default function ImageSlider({ slug }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const loadImages = async () => {
      const getImages = await fetchSliderImages(slug);
      if (getImages) {
        setImages(getImages);
      }
    };
    loadImages();
  }, [slug]);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 1.5,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    draggable: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {images?.length > 0 &&
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
          ))}
      </Slider>
    </div>
  );
}
