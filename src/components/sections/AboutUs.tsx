"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GemImg from "../../../public/assets/aboutus/mining.png";
import GemImg2 from "../../../public/assets/aboutus/washing.jpg";
import GemImg3 from "../../../public/assets/aboutus/Blue-Sapphire.jpg";

export const AboutUs = () => {
  const images = [
    { src: GemImg, alt: "Gem Mining in Sri Lanka" },
    { src: GemImg2, alt: "Gem Washing Process" },
    { src: GemImg3, alt: "Blue Sapphire" },
  ];

  return (
    <section id="aboutus" className="w-screen min-h-screen py-32 px-8 lg:px-16 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-24 max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-yellow-500/30" />
          <span className="text-yellow-500 font-bold uppercase tracking-[0.7em] text-[10px]">The Heritage</span>
          <div className="h-[1px] w-8 bg-yellow-500/30" />
        </div>
        <h2 className="mozilla-headline-main text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
          Decades of <span className="text-white/40">Pure Passion</span>
        </h2>
      </div>

      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        {/* Image Carousel - Reduced Size */}
        <div className="flex-1 w-full max-w-[600px] order-2 lg:order-1">
          <div className="relative group p-4 border border-white/5 rounded-[4rem] bg-white/[0.02]">
            <div className="w-full aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="h-full w-full custom-about-swiper"
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
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Navigation */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
              <button className="swiper-button-prev-custom w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:bg-yellow-500 transition-colors">←</button>
              <button className="swiper-button-next-custom w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:bg-yellow-500 transition-colors">→</button>
            </div>
          </div>
        </div>

        {/* Story Content - Sophisticated Typography */}
        <div className="flex-1 flex flex-col space-y-12 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-8">
            <p className="text-white/60 text-lg md:text-2xl leading-relaxed font-light font-sans tracking-tight">
              Founded in <span className="font-black text-white italic">1970</span>,{" "}
              Gems De Ceylon has stood as a trusted name in Sri Lanka&apos;s sapphire legacy. We are more than exhibitors — we are{" "}
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Real Gem Miners</span>.
            </p>

            <p className="text-white/40 text-md md:text-xl leading-relaxed font-light">
              From the ancient riverbeds of Opanayaka to the master cutters’ workbenches,
              each gem passes through hands that value heritage, authenticity, and detail.
              Our sapphires are hand-washed and shaped to reflect their natural brilliance.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 pt-8">
            <div className="flex-1 p-8 rounded-3xl bg-white/[0.03] border border-white/5">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Integrity</h4>
              <p className="text-white/30 text-xs uppercase tracking-widest leading-loose">Direct mining, no middlemen, total transparency.</p>
            </div>
            <div className="flex-1 p-8 rounded-3xl bg-white/[0.03] border border-white/5">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Mastery</h4>
              <p className="text-white/30 text-xs uppercase tracking-widest leading-loose">Precision cutting that honors the stone&apos;s soul.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
