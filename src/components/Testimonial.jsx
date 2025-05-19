import { useEffect } from 'react';
import Testimonial from '../assets/Testimonial.png'
import Testimonial_1 from '../assets/Testimonial-2.png'
import Testimonial_2 from '../assets/Testimonial-3.png'
import Testimonial_3 from '../assets/Testimonial-4.png'


export default function Testimonials() {
  const testimonials = [
    { image: "https://via.placeholder.com/300x400" },
    { 
      type: "text", 
      quote: "I used to lose nearly 30% of my maize harvest due to poor storage. After learning proper techniques from Crop Care Solutions, my losses dropped to less than 5%! I feel more secure now.",
      author: "Kwame Amofa",
      role: "Maize Farmer at Sefwi Adobewura"
    },
    { image: "https://via.placeholder.com/300x400" },
    { image: "https://via.placeholder.com/300x400" },
    { image: "https://via.placeholder.com/300x400" },
  ];

  return (
    <section className="py-12 px-4 bg-white" id='testimonials'>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-green-500 font-semibold tracking-widest uppercase text-sm mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trusted by farmers<br /> all over Ghana.
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm">
          See how farmers across Ghana are reducing post-harvest losses, improving storage, and increasing profits with Crop Care Solutions.
        </p>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          
          <div className="flex-shrink-0 w-60 bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src={Testimonial} 
              alt="Farmer" 
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Card 2 - Testimonial */}
          <div className="flex-shrink-0 w-60 bg-white rounded-2xl shadow-md overflow-hidden p-6 flex flex-col">
            <div className="text-3xl text-green-400 mb-4">“</div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              I used to lose nearly 30% of my maize harvest due to poor storage. After learning proper techniques from Crop Care Solutions, my losses dropped to less than 5%! I feel more secure now.
            </p>
            <div className="text-sm text-gray-800 font-semibold">Kwame Amofa</div>
            <div className="text-xs text-gray-500">Maize Farmer at Sefwi Adobewura</div>
          </div>

          {/* Card 3 - Image */}
          <div className="flex-shrink-0 w-60 bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src={Testimonial_1} 
              alt="Farmer" 
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Card 4 - Image */}
          <div className="flex-shrink-0 w-60 bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src={Testimonial_2}
              alt="Farmer" 
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Card 5 - Image */}
          <div className="flex-shrink-0 w-60 bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src={Testimonial_3} 
              alt="Farmer" 
              className="w-full h-60 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
