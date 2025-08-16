// app/components/ImageSlider.jsx
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider({ images }) {
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
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-40 md:h-60 lg:h-72">
            <Image
              src={src}
              alt={`Slide ${idx}`}
              fill
              className="object-cover rounded-xl px-2"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
