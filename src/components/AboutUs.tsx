"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GemImg from "../../public/assets/aboutus/mining.png";
import GemImg2 from "../../public/assets/aboutus/washing.jpg";
import GemImg3 from "../../public/assets/aboutus/Blue-Sapphire.jpg";
import GemImg4 from "../../public/assets/aboutus/cut.png";

export const AboutUs = () => {
  const images = [
    { src: GemImg, alt: "Gem Mining in Sri Lanka" },
    { src: GemImg2, alt: "Gem Washing Process" },
    { src: GemImg3, alt: "Blue Sapphire" },
    { src: GemImg4, alt: "Gem Cutting" },
  ];

  return (
    <section className="w-screen min-h-screen py-20 px-6 bg-gradient-to-b from-white via-gray-100 to-gray-200 flex flex-col items-center">
      {/* Title at top */}
      <h2 className="mozilla-headline-main text-4xl md:text-5xl font-bold text-gray-900 text-center drop-shadow-lg mb-12">
        About Gems De Ceylon
      </h2>

      {/* Centered content */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 text-center px-2 md:px-0">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Founded in <span className="font-semibold">1970</span>,{" "}
              <span className="font-semibold text-gray-800">Gems De Ceylon</span>{" "}
              has stood as a trusted name in Sri Lanka’s sapphire legacy for over
              five decades. We are not just traders — we are{" "}
              <span className="font-semibold">real gem miners</span>, deeply
              connected to the earth and the art of gemstone craftsmanship.
            </p>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              From the ancient riverbeds of Opanayaka to master cutters’ workbenches,
              each gem passes through hands that value heritage, authenticity, and
              detail. Our sapphires are carefully mined, hand-washed, and shaped to
              reflect their natural brilliance, ensuring{" "}
              <span className="font-semibold">purity and timeless elegance</span>.
            </p>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Today, Gems De Ceylon proudly connects Sri Lanka’s treasures with
              clients around the globe — from collectors to jewelry houses — with a
              promise of trust, sustainability, and unmatched beauty.
            </p>

            {/* Centered button */}
            <div className="flex justify-center w-full">
              <button className="px-8 py-4 bg-gray-400 text-white font-semibold rounded-xl shadow-xl hover:scale-105 transition transform">
                Discover More
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <div className="flex-1 flex justify-center items-center w-full">
            <div className="w-full md:max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="h-full w-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
