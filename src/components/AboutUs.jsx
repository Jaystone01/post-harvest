import React from 'react';
import AboutImage from '../assets/AboutUs.png';
import Chevron from '../assets/chevronRight.png';

function AboutUs() {
  return (
    <div className="w-full py-10 px-4 md:px-36 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 items-center" id='aboutus'>
      
      {/* Image */}
      <div className="w-full max-w-md mx-auto md:mx-0">
        <img src={AboutImage} alt="About Image" className="w-full h-auto rounded-3xl" />
      </div>

      {/* Text Section */}
      <div className="space-y-4">
        <p className="text-[20px] md:text-[24px] text-[#AACC00] font-medium">About us</p>
        <p className="text-[32px] md:text-[48px] text-[#007F5F] font-bold">Crop Care Solutions</p>
        <p className="text-[16px] md:text-[20px] text-[#757575]">
          At Crop Care Solutions, we empower farmers with the knowledge and tools they need to reduce
          post-harvest losses and increase profits. Our mission is to ensure that every farmer can store,
          preserve, and transport crops effectively, reducing waste and improving food security.
        </p>

        <div className="flex items-center space-x-3 mt-6">
          <a className="text-[18px] text-[#007F5F] font-medium" href="">Learn More About Us</a>
          <img className="h-4 w-4" src={Chevron} alt="Chevron right" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
