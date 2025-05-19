import React from 'react';
import SearchBar from './SearchBar';
import StorageCard from './StorageCard';
import Sunfresh from '../assets/sunfresh.png';
import AgriSafe from '../assets/AgriSafe.png';
import GreenField from '../assets/GreenField.png';
import Chevron from '../assets/chevronRight.png';

function StorageLocations() {
  return (
    <section className="flex flex-col justify-center items-center my-20" id="storagecenters">
      <div className="flex justify-center">
        <p className="text-[36px] font-semibold text-center">Find Reliable Storage Near You!</p>
      </div>

      <div className="my-10">
        <p className="text-[20px] text-[#757575] w-[670px] text-center">
          Protect your harvest with trusted storage facilities. Search by location, crop type, and storage method to keep your produce fresh for longer.
        </p>
      </div>

      <div className="w-full h-[64px] flex justify-center">
        <SearchBar />
      </div>

      <div className="flex w-[1152px] justify-around flex-wrap gap-8 py-10">
        <StorageCard
          imageUrl={Sunfresh}
          location="Keta, Volta Region"
          title="SunFresh Cold Storage"
          rating={4.5}
          capacity="500 Tons"
          phone="+233200000001"
          mapLink="https://www.google.com/maps/place/Keta"
        />
        <StorageCard
          imageUrl={AgriSafe}
          location="Bolgatanga, Upper-East Region"
          title="AgriSafe Cold Chain"
          rating={4.0}
          capacity="1,200 Tons"
          phone="+233200000002"
          mapLink="https://www.google.com/maps/place/Bolgatanga"
        />
        <StorageCard
          imageUrl={GreenField}
          location="Kumasi, Ashanti Region"
          title="GreenField Storage Hub"
          rating={3.5}
          capacity="300 Tons"
          phone="+233200000003"
          mapLink="https://www.google.com/maps/place/Kumasi"
        />
      </div>

      <div className="flex items-center justify-center cursor-pointer hover:underline">
        <a className="text-[20px] text-[#007F5F] mr-2">Find Storage Centers</a>
        <img className="h-[15px]" src={Chevron} alt="Chevron right" />
      </div>
    </section>
  );
}

export default StorageLocations;
