import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons
import image1 from "../images/newone.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to toggle mobile menu
  const [showHowItWorks, setShowHowItWorks] = useState(false); // Dropdown state for "How it works"
  const [showServices, setShowServices] = useState(false);
  const [showUseCases, setShowUseCases] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu); // Toggle the mobile menu
  // Add this CSS either in a separate file or in your component file if you're using CSS-in-JS
const styles = `
.hamburger-menu {
  display: none;
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

@media screen and (max-width: 1024px) {
  .hamburger-menu {
    display: block;
  }

  .desktop-nav {
    display: none;
  }

  .logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 768px) {
  .hamburger-menu {
    top: 0.5rem;
    left: 0.5rem;
  }
}
`;

  return (
    <>    
    <style>{styles}</style>
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Container for logo, navigation, and buttons */}
      <div className="flex justify-between items-center px-6 py-4 md:px-12 lg:px-20">
        {/* Left: Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center z-50 bg-gray-50 p-2 lg:hidden"
        >
          {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Center: Logo */}
        <div className="flex items-center mr-auto md:mr-32 lg:mx-0">
          <img src={image1} alt="Printify Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-green-500 ml-2 hidden md:block lg:block">
            Printify
          </span>
        </div>

        {/* Right: Log in and Sign up for Mobile */}
        <div className="md:hidden flex items-center space-x-2 z-50">
          <button className="border border-gray-300 px-3 py-1 rounded text-gray-700 hover:bg-gray-100">
            Log in
          </button>
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Sign up
          </button>
        </div>

        {/* Desktop: Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#catalog" className="text-gray-700 hover:text-green-500">
            Catalog
          </a>

          {/* Dropdown for How it works */}
          <div
            className="relative"
            onMouseEnter={() => setShowHowItWorks(true)}
            onMouseLeave={() => setShowHowItWorks(false)}
          >
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-green-500 flex items-center"
            >
              How it works <span className="ml-1">&#9662;</span>
            </a>
            {showHowItWorks && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">How Printify works</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Print on Demand</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Printify Quality Promise</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">What to sell</a>
                </li>
              </ul>
            )}
          </div>

          <a href="#pricing" className="text-gray-700 hover:text-green-500">
            Pricing
          </a>
          <a href="#blog" className="text-gray-700 hover:text-green-500">
            Blog
          </a>

          {/* Dropdown for Services */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <a
              href="#services"
              className="text-gray-700 hover:text-green-500 flex items-center"
            >
              Services <span className="ml-1">&#9662;</span>
            </a>
            {showServices && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Printify Studio</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Printify Express Delivery</a>
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown for Use-cases */}
          <div
            className="relative"
            onMouseEnter={() => setShowUseCases(true)}
            onMouseLeave={() => setShowUseCases(false)}
          >
            <a
              href="#use-cases"
              className="text-gray-700 hover:text-green-500 flex items-center"
            >
              Use-cases <span className="ml-1">&#9662;</span>
            </a>
            {showUseCases && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Help Center</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Contact</a>
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown for Need Help */}
          <div
            className="relative"
            onMouseEnter={() => setShowHelp(true)}
            onMouseLeave={() => setShowHelp(false)}
          >
            <a
              href="#help"
              className="text-gray-700 hover:text-green-500 flex items-center"
            >
              Need help? <span className="ml-1">&#9662;</span>
            </a>
            {showHelp && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Help Center</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Right: Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-300 px-4 py-1 rounded text-gray-700 hover:bg-gray-100">
            Log in
          </button>
          <button className="bg-green-500 text-white px-6 py-1 rounded hover:bg-green-600">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu (Left-Side) */}
      <nav
        className={`md:hidden bg-white fixed top-0 left-0 h-full w-64 shadow-lg transition-transform transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="p-6">
          <button onClick={toggleMenu} className="mb-4">
            <FaTimes size={24} />
          </button>
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <a
            href="#catalog"
            className="block text-gray-700 hover:text-green-500 py-2"
          >
            Catalog
          </a>

          {/* Dropdown for How it works in Mobile */}
          <div>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-green-500 py-2 flex justify-between items-center"
              onClick={() => setShowHowItWorks(!showHowItWorks)}
            >
              How it works <span>{showHowItWorks ? "▲" : "▼"}</span>
            </a>
            {showHowItWorks && (
              <ul className="pl-4">
                <li className="py-2">
                  <a href="#">How Printify works</a>
                </li>
                <li className="py-2">
                  <a href="#">Print on Demand</a>
                </li>
                <li className="py-2">
                  <a href="#">Printify Quality Promise</a>
                </li>
                <li className="py-2">
                  <a href="#">What to sell</a>
                </li>
              </ul>
            )}
          </div>

          <a
            href="#pricing"
            className="block text-gray-700 hover:text-green-500 py-2"
          >
            Pricing
          </a>
          <a
            href="#blog"
            className="block text-gray-700 hover:text-green-500 py-2"
          >
            Blog
          </a>

          {/* Dropdown for Services in Mobile */}
          <div>
            <a
              href="#services"
              className="block text-gray-700 hover:text-green-500 py-2 flex justify-between items-center"
              onClick={() => setShowServices(!showServices)}
            >
              Services <span>{showServices ? "▲" : "▼"}</span>
            </a>
            {showServices && (
              <ul className="pl-4">
                <li className="py-2">
                  <a href="#">Printify Studio</a>
                </li>
                <li className="py-2">
                  <a href="#">Printify Express Delivery</a>
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown for Use-cases in Mobile */}
          <div>
            <a
              href="#use-cases"
              className="block text-gray-700 hover:text-green-500 py-2 flex justify-between items-center"
              onClick={() => setShowUseCases(!showUseCases)}
            >
              Use-cases <span>{showUseCases ? "▲" : "▼"}</span>
            </a>
            {showUseCases && (
              <ul className="pl-4">
                <li className="py-2">
                  <a href="#">Help Center</a>
                </li>
                <li className="py-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown for Need help in Mobile */}
          <div>
            <a
              href="#help"
              className="block text-gray-700 hover:text-green-500 py-2 flex justify-between items-center"
              onClick={() => setShowHelp(!showHelp)}
            >
              Need help? <span>{showHelp ? "▲" : "▼"}</span>
            </a>
            {showHelp && (
              <ul className="pl-4">
                <li className="py-2">
                  <a href="#">Help Center</a>
                </li>
                <li className="py-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Navbar;
