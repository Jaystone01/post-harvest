import { FaStar, FaRegStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';

export default function StorageCard({
  imageUrl,
  title,
  rating,
  capacity,
  location,
  phone = '+233279187945', // Default contact
  mapLink = 'https://maps.google.com' // Default map link
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const handleContact = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleDirections = () => {
    window.open(mapLink, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72">
      <img 
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-lg mb-2">{title}</h2>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={i} />
            ))}
            {hasHalfStar && <FaRegStar />}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
              <FaRegStar key={i + 5} />
            ))}
          </div>
          <span className="text-gray-600 text-sm ml-2">{rating}</span>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-1">
          <BsBoxSeam className="mr-2" />
          Cold Storage | Capacity: {capacity}
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FiMapPin className="mr-2" />
          {location}
        </div>

        <button
          onClick={handleContact}
          className="w-full bg-green-700 text-white py-2 rounded-full text-sm mb-2 hover:bg-green-800"
        >
          Contact Us
        </button>

        <button
          onClick={handleDirections}
          className="w-full border border-green-600 text-green-600 py-2 rounded-full text-sm hover:bg-green-50"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
}
