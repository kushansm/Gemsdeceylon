import React from "react";
import Image from "next/image";
import GemImg from "../../public/assets/aboutus/mining.jpg";
import GemImg2 from "../../public/assets/aboutus/washing.jpg";
import GemImg3 from "../../public/assets/aboutus/Blue-Sapphire.jpg";
import GemImg4 from "../../public/assets/aboutus/cut.png";

export const AboutUs = () => {
  return (
    <section className="w-screen min-h-screen py-20 px-6 bg-gradient-to-b from-white via-gray-100 to-gray-200 flex flex-col items-center">
      {/* Title */}
      <h2 className="mozilla-headline-main text-4xl md:text-5xl font-bold text-gray-900 text-center drop-shadow-lg mb-10">
        About Gems De Ceylon
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-gray-800">Gems De Ceylon</span>, 
            we have been at the heart of Sri Lanka’s sapphire trade since <span className="font-semibold">1970</span>.  
            We are more than traders — we are <span className="font-semibold">real gem miners</span>, 
            involved in every step from mining to crafting.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our sapphires are sourced directly from the mines of Ceylon, washed and hand-selected by skilled artisans, 
            and then masterfully cut to unlock their brilliance. This process ensures that each gemstone 
            reflects authenticity, elegance, and timeless value.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            With decades of heritage and expertise, Gems De Ceylon continues to supply the world’s most exquisite sapphires — 
            <span className="font-semibold">from the source, with trust</span>.
          </p>

          <div className="flex justify-center">
            <button className="px-8 py-4 bg-gray-400 text-white font-semibold rounded-xl shadow-xl hover:scale-105 transition transform">
              Learn More
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={GemImg}
              alt="Gem Mining in Sri Lanka"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-16 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[GemImg2, GemImg3, GemImg4].map((img, index) => (
          <div
            key={index}
            className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={img}
              alt={`Gem Process ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
