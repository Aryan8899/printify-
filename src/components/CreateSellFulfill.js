import React from 'react';
import createIcon from '../images/createIcon.png'; // Ensure correct path for 'Create' image
import sellIcon from '../images/sellIcon.png';     // Ensure correct path for 'Sell' image
import fulfillmentIcon from '../images/fulfillmentIcon.png'; // Ensure correct path for 'Fulfillment' image

const CreateSellFulfill = () => {
  return (
    <section className="py-16 bg-white mt-16 mb-32"> {/* Adjusted top and bottom margins for balance */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center text-center space-y-6 md:space-y-0 md:space-x-10"> {/* Adjusted horizontal and vertical spacing */}

        {/* Create Custom Products */}
        <div className="flex flex-col items-center">
          <img src={createIcon} alt="Create" className="w-30 h-40 mb-3" /> {/* Adjusted image size and margin */}
          <h3 className="text-green-600 font-bold text-lg mb-1">CREATE</h3>
          <h4 className="text-xl font-semibold mb-1">custom products</h4>
          <p className="text-gray-600 max-w-xs">
            Easily add your designs to a wide range of products using our free tools.
          </p>
        </div>

        {/* Sell on Your Terms */}
        <div className="flex flex-col items-center">
          <img src={sellIcon} alt="Sell" className="w-30 h-40 mb-3" /> {/* Adjusted image size and margin */}
          <h3 className="text-green-600 font-bold text-lg mb-1">SELL</h3>
          <h4 className="text-xl font-semibold mb-1">on your terms</h4>
          <p className="text-gray-600 max-w-xs">
            You choose the products, sale price, and where to sell.
          </p>
        </div>

        {/* We Handle Fulfillment */}
        <div className="flex flex-col items-center">
          <img src={fulfillmentIcon} alt="Fulfillment" className="w-30 h-40 mb-3" /> {/* Adjusted image size and margin */}
          <h3 className="text-green-600 font-bold text-lg mb-1">WE HANDLE</h3>
          <h4 className="text-xl font-semibold mb-1">fulfillment</h4>
          <p className="text-gray-600 max-w-xs">
            Once an order is placed, we automatically handle all the printing and delivery logistics.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CreateSellFulfill;
