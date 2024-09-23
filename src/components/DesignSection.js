import React from 'react';
import designImage from '../images/designImage.png'; // Use the correct path for your left-side image

const DesignSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-gray-100 py-20 px-10 mt-20">
      {/* Left: Design Image */}
      <div className="w-full md:w-1/2">
        <img src={designImage} alt="Design Products" className="w-full object-contain rounded-lg shadow-lg" />
      </div>

      {/* Right: Text Section */}
      <div className="w-full md:w-1/2 md:ml-10 mt-10 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          Easily add your design to a wide range of products
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="#" className="text-green-600 font-bold hover:underline">
          All products &#8594;
        </a>
      </div>
    </section>
  );
};

export default DesignSection;
