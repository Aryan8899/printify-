import React from 'react';
import tshirtImage from '../images/tshirt.jpg';  // Ensure correct path for the T-shirt image
import pointingCharacter from '../images/character.png';  // Ensure correct path for the character image
import profitIcon from "../images/profitIcon.png";
import scalingIcon from "../images/scalingIcon.png";
import selectionIcon from "../images/selectionIcon.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center bg-white mt-20 mb-10 py-20 px-6 md:px-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center p-10 w-full mt-12 md:mt-0"> {/* Added mt-12 for mobile */}
        {/* Left: Text and Buttons */}
        <div className="space-y-6 max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Create and sell custom products
          </h1>
          <ul className="text-lg space-y-2">
            <li className="flex justify-center md:justify-start items-center">
              <span className="text-green-500 font-bold">&#10003;</span>
              <span className="ml-2">100% Free to use</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <span className="text-green-500 font-bold">&#10003;</span>
              <span className="ml-2">900+ High-Quality Products</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <span className="text-green-500 font-bold">&#10003;</span>
              <span className="ml-2">Largest global print network</span>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
              Start for free
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-100">
              How it works?
            </button>
          </div>
          <p className="text-green-600 text-sm font-bold mt-4 md:mt-0">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right: Image of T-shirt and Character */}
        <div className="relative mt-10 md:mt-0 flex items-center justify-center md:ml-10">
          <div className="relative">
            <img
              src={tshirtImage}
              alt="Custom T-shirt"
              className="w-[250px] md:w-[380px] h-auto object-contain"
            />
            <img
              src={pointingCharacter}
              alt="Pointing Character"
              className="absolute -bottom-10 -right-10 md:-right-20 w-[150px] md:w-[250px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Spacing Before Feature Section */}
      <div className="mt-60 md:mt-60 -mb-5"></div> {/* Adjust spacing if needed */}

      {/* Feature Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 text-center mb-40">
        
        {/* Feature 1: Higher Profits */}
        <div className="flex flex-col items-center">
          <img src={profitIcon} alt="Higher Profits" className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Higher Profits</h3>
          <p className="text-gray-600 max-w-xs">
            We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
          </p>
        </div>

        {/* Feature 2: Robust Scaling */}
        <div className="flex flex-col items-center">
          <img src={scalingIcon} alt="Robust Scaling" className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Robust Scaling</h3>
          <p className="text-gray-600 max-w-xs">
            Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
          </p>
        </div>

        {/* Feature 3: Best Selection */}
        <div className="flex flex-col items-center">
          <img src={selectionIcon} alt="Best Selection" className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Best Selection</h3>
          <p className="text-gray-600 max-w-xs">
            With 900+ products and top quality brands, you can choose the best products for your business.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
