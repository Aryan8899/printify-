import React from 'react';
import illustration from '../images/illustration.png'; // Ensure the correct path

const ProfitComponent = () => {
  return (
    <section className="py-16 bg-white flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg-[#1b2d3a] text-white p-10 lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h2>
          <p className="text-sm mb-6">You pay for fulfillment only when you make a sale</p>
          <div className="bg-[#223847] p-6 rounded-lg mb-6">
            <p className="mb-2">
              <span className="font-semibold">You sell a t-shirt</span>
              <span className="float-right">$30</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">You pay for its production</span>
              <span className="float-right">$12</span>
            </p>
            <hr className="border-t border-gray-400 my-2" />
            <p>
              <span className="font-semibold text-green-500">Your profit</span>
              <span className="float-right text-green-500">$18</span>
            </p>
          </div>
          <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 mb-4">
            Start selling
          </button>
          <p className="text-xs text-gray-400">100% Free to use · 900+ Products · Largest print network</p>
        </div>

        {/* Right Section */}
        <div className="bg-[#f0f8f6] p-10 lg:w-1/2 flex justify-center items-center">
          <img src={illustration} alt="Make Money Illustration" className="w-80 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ProfitComponent;
