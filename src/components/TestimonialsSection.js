import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      {/* Title Section */}
      <div className="text-center mb-12 lg:flex lg:items-center lg:justify-between px-8">
        <div className="lg:w-1/2 lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900">
            Trusted by over 8M sellers around the world
          </h2>
        </div>
        <div className="lg:w-1/2 lg:text-left mt-4 lg:mt-0">
          <p className="text-lg text-gray-600 max-w-xl">
            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full flex items-center justify-center px-4 lg:px-16">
        {/* Left Arrow */}
        <button className="absolute left-0 text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Robert A. Voltaire"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Robert A. Voltaire</h3>
                <a href="#" className="text-green-500">Store link</a>
              </div>
            </div>
            <p className="text-yellow-500 mb-4">★★★★★</p>
            <p className="text-gray-600">
              Printify has been an incredible service for us musicians unable to keep large amounts of inventory. Anyone can create designs, particularly tees.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/83.jpg"
                alt="Quinten Barney"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Quinten Barney</h3>
                <span className="text-green-500">Etsy Merchant</span>
              </div>
            </div>
            <p className="text-yellow-500 mb-4">★★★★★</p>
            <p className="text-gray-600">
              We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is second to none.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Nikki"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Nikki</h3>
                <a href="#" className="text-green-500">Store link</a>
              </div>
            </div>
            <p className="text-yellow-500 mb-4">★★★★★</p>
            <p className="text-gray-600">
              Printify has been amazing in helping us grow our business. From what we can make for our customers, to the quality and the service.
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slider Dots */}
      <div className="mt-8 flex justify-center">
        <button className="w-3 h-3 mx-1 bg-gray-400 rounded-full focus:outline-none"></button>
        <button className="w-3 h-3 mx-1 bg-green-500 rounded-full focus:outline-none"></button>
        <button className="w-3 h-3 mx-1 bg-gray-400 rounded-full focus:outline-none"></button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
