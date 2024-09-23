import React from 'react';
import printifyIcon from '../images/printify.png';  // Central logo
import shopifyIcon from '../images/shopify.png';
import etsyIcon from '../images/etsy.png';
import wixIcon from '../images/wix.png';
import apiIcon from '../images/api.png';
import squarespaceIcon from '../images/squarespace.png';
import bigcommerceIcon from '../images/bigcommerce.png';
import wooCommerceIcon from "../images/woocommerce.png";

const ConnectYourStore = () => {
  return (
    <>
      <section className="relative py-10 md:py-20 bg-white">
        {/* Title */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Connect your store</h2>
          <p className="text-gray-600 mt-4">
            Printify easily integrates with major e-commerce platforms and marketplaces
          </p>
        </div>

        {/* Grid layout for mobile view */}
      {/* Grid layout for mobile view */}
      <div className="grid grid-cols-3 gap-4 md:hidden place-items-center mb-20 px-4">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={bigcommerceIcon} alt="BigCommerce" className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={squarespaceIcon} alt="Squarespace" className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={wixIcon} alt="Wix" className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col items-center col-start-2">
            <div className="w-24 h-24 bg-green-500 shadow-md rounded-xl flex items-center justify-center">
              <img src={printifyIcon} alt="Printify" className="w-16 h-16" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={apiIcon} alt="API" className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={etsyIcon} alt="Etsy" className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={shopifyIcon} alt="Shopify" className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
              <img src={wooCommerceIcon} alt="WooCommerce" className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Circular distribution of logos for desktop view */}
        <div className="relative w-full h-[400px] md:h-[500px] hidden md:flex justify-center items-center mb-40 md:mb-60">
          {/* Central Logo */}
          <div className="bg-green-500 rounded-full shadow-lg absolute">
            <img
              src={printifyIcon}
              alt="Printify"
              className="w-24 h-24 md:w-40 md:h-40 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125"
            />
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="75%" y2="15%" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="15%" y2="60%" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="85%" y2="60%" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="35%" y2="85%" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="65%" y2="85%" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.3" />
          </svg>

          {/* Logos around the central icon */}
          <div className="absolute top-[5%] left-[20%] hidden md:flex flex-col items-center">
            <img src={bigcommerceIcon} alt="BigCommerce" className="w-20 h-20 mb-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="absolute top-[5%] right-[20%] hidden md:flex flex-col items-center">
            <img src={squarespaceIcon} alt="Squarespace" className="w-20 h-20 mb-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="absolute left-[7%] top-[45%] flex flex-col items-center">
            <img
              src={apiIcon}
              alt="API"
              className="w-24 h-24 md:w-48 md:h-48 mb-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="absolute right-[5%] top-[55%] flex flex-col items-center">
            <img src={wixIcon} alt="Wix" className="w-24 h-24 md:w-40 md:h-40 mb-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="absolute bottom-[3%] left-[30%] flex flex-col items-center">
            <img src={shopifyIcon} alt="Shopify" className="w-20 h-20 md:w-30 md:h-30 mb-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="absolute bottom-[2%] right-[30%] flex flex-col items-center">
            <img src={etsyIcon} alt="Etsy" className="w-24 h-24 md:w-48 md:h-48 mb-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-125" />
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="bg-green-100 py-6 px-6 md:px-12 flex flex-col md:flex-row justify-center items-center mt-2 mb-20 md:mb-80 rounded-lg mx-auto max-w-[90%] md:max-w-[60%]">
        <div className="text-center md:text-left mb-4 md:mb-0 mr-0 md:mr-4">
          <p className="text-lg md:text-xl font-bold">Are you a large business looking for custom solutions?</p>
        </div>
        <div className="text-center">
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
            Talk to sales
          </button>
        </div>
      </section>
    </>
  );
};

export default ConnectYourStore;
