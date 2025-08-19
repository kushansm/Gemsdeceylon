import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-2">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6 gap-6">
        {/* Company Info */}
        <div className="text-center md:text-left text-sm md:text-base leading-tight">
          <h3 className="font-semibold text-lg">Ceylon Guide (Pvt) Ltd</h3>
          <p>No.35,</p>
          <p>Sri Mahindarama Mawatha,</p>
          <p>Dandeniya,</p>
          <p>Opanayaka, Sri Lanka</p>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-3">Follow us on</h3>
          <ul className="flex flex-row md:flex-col justify-center md:justify-start gap-4 md:gap-3">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Image
                  src="/assets/Footer/Twitter White.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Image
                  src="/assets/Footer/Youtube White.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Licence and Credits */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm mt-8 px-6 border-t border-gray-800 pt-4 gap-2 text-center">
        <p>© 2025 Ceylon Guide. All rights reserved.</p>
        <p>Photos by Gems De Ceylon (Pvt) Ltd</p>
      </div>
    </footer>
  );
};
