import React from 'react';
import { useNavigate } from 'react-router-dom';
import tomato from '../assets/Tomato.png';
import maize from '../assets/Maize.png';
import onion from '../assets/Onions.png';
import yams from '../assets/Yams.png';
import Chevron from '../assets/chevronRight.png';

function StorageTips() {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-10 md:px-20 lg:px-[160px] py-10 space-y-10" id="storagetips">
      <div className="flex justify-center text-center">
        <h3 className="text-[24px] sm:text-[32px] md:text-[36px] font-semibold">
          Smart Storage Tips to Keep Your Harvest Fresh!
        </h3>
      </div>
      <div className="flex justify-center text-[#757575] text-center">
        <p className="max-w-2xl text-base sm:text-lg">
          Discover expert-recommended techniques to store your crops longer, prevent spoilage, and maximize profits.
          Explore guides tailored for different crops and storage methods!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        <button onClick={() => navigate('/tomato')} className="w-full max-w-sm cursor-pointer">
          <img className="w-full h-auto rounded-md" src={tomato} alt="Tomato card" />
        </button>
        <button onClick={() => navigate('/maize')} className="w-full max-w-sm cursor-pointer ">
          <img className="w-full h-auto rounded-md" src={maize} alt="Maize card" />
        </button>
        <button onClick={() => navigate('/onion')} className="w-full max-w-sm cursor-pointer">
          <img className="w-full h-auto rounded-md" src={onion} alt="Onion card" />
        </button>
        <button onClick={() => navigate('/yams')} className="w-full max-w-sm cursor-pointer">
          <img className="w-full h-auto rounded-md" src={yams} alt="Yams card" />
        </button>
      </div>
      <div className="flex items-center justify-center mt-6">
        <a href="#" className="text-[18px] text-[#007F5F] font-medium mr-2">
          View All Storage Guides
        </a>
        <img className="h-[15px]" src={Chevron} alt="Chevron right" />
      </div>
    </section>
  );
}

export default StorageTips;
