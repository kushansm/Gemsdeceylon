import React from "react";
import Image from "next/image";
import GemImg from "../../public/assets/home/bluesapphire.png";

export const Hero = () => {
  return (
    <section
      className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center 
      px-6 py-12 bg-gradient-to-b from-white via-gray-100 to-gray-200"
    >
      {/* Left Text Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center md:text-center space-y-4 md:space-y-6">
        <h1 className="mozilla-headline-main text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 drop-shadow-lg">
          CEYLON SAPPHIRES
        </h1>
        <h2 className="mozilla-headline-main text-xl sm:text-2xl md:text-3xl font-medium text-gray-600">
          EXQUISITE & TIMELESS
        </h2>
        <button className="px-8 py-4  bg-gray-400 text-white font-semibold rounded-xl shadow-xl hover:scale-105 transition transform">
          Shop Now
        </button>
      </div>

      {/* Right Gem Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full">
        <div className="relative w-full max-w-[800px] aspect-[4/3]">
          <Image
            src={GemImg}
            alt="Ceylon Sapphire"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};
