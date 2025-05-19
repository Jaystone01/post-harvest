import React from 'react';
import HeroImage from '../assets/HeroPage.png'; 
import HeroImages from '../assets/HeroImages.png';

function Hero() {
  return (
    <section 
      className="w-full bg-cover bg-center px-6 py-16 md:py-24"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-xl md:text-2xl tracking-wider text-[#9D9F0D]">
            CROP CARE SOLUTIONS
          </p>

          <p className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-dark-green to-yellow-green mt-2">
            Reduce Post-Harvest Losses, Improve Your Profits!
          </p>

          <p className="text-base md:text-lg text-gray-700 mt-4">
            Learn the best crop storage techniques, connect with experts, and find nearby storage solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-green to-dark-green rounded-full text-white text-base md:text-lg font-medium cursor-pointer">
              Learn Storage Techniques
            </button>
            <a href="#storagecenters" className="text-base md:text-lg text-[#13595B] font-medium cursor-pointer">
              Find Storage Facilities
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img src={HeroImages} alt="Hero Visual" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
