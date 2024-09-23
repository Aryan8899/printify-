import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaTiktok, FaReddit } from 'react-icons/fa';
import logo from "../images/printifylogo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0">
            <img src={logo} alt="Printify Logo" className="h-10 w-auto" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-8 lg:mb-0">
            <a href="https://facebook.com" className="text-green-500 hover:text-green-700">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="text-green-500 hover:text-green-700">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-green-500 hover:text-green-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-green-500 hover:text-green-700">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" className="text-green-500 hover:text-green-700">
              <FaYoutube size={24} />
            </a>
            <a href="https://tiktok.com" className="text-green-500 hover:text-green-700">
              <FaTiktok size={24} />
            </a>
            <a href="https://reddit.com" className="text-green-500 hover:text-green-700">
              <FaReddit size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-center lg:text-left mt-8">
          {/* Integrations */}
          <div>
            <h3 className="font-semibold mb-4">Integrations</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-500 cursor-pointer">Shopify</li>
              <li className="hover:text-green-500 cursor-pointer">Etsy</li>
              <li className="hover:text-green-500 cursor-pointer">eBay</li>
              <li className="hover:text-green-500 cursor-pointer">Amazon</li>
              <li className="hover:text-green-500 cursor-pointer">TikTok Shop</li>
              <li className="hover:text-green-500 cursor-pointer">PrestaShop</li>
              <li className="hover:text-green-500 cursor-pointer">BigCommerce</li>
              <li className="hover:text-green-500 cursor-pointer">Wix</li>
              <li className="hover:text-green-500 cursor-pointer">WooCommerce</li>
              <li className="hover:text-green-500 cursor-pointer">Squarespace</li>
              <li className="hover:text-green-500 cursor-pointer">Printify API</li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-500 cursor-pointer">Blog</li>
              <li className="hover:text-green-500 cursor-pointer">Guides</li>
              <li className="hover:text-green-500 cursor-pointer">Products</li>
              <li className="hover:text-green-500 cursor-pointer">Etsy print-on-demand</li>
              <li className="hover:text-green-500 cursor-pointer">Shopify print-on-demand</li>
              <li className="hover:text-green-500 cursor-pointer">Woocommerce print-on-demand</li>
              <li className="hover:text-green-500 cursor-pointer">Wix print-on-demand</li>
              <li className="hover:text-green-500 cursor-pointer">Squarespace print-on-demand</li>
              <li className="hover:text-green-500 cursor-pointer">Brands</li>
              <li className="hover:text-green-500 cursor-pointer">Pricing</li>
              <li className="hover:text-green-500 cursor-pointer">Shipping Rates</li>
            </ul>
          </div>

          {/* Start selling */}
          <div>
            <h3 className="font-semibold mb-4">Start selling</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-500 cursor-pointer">Custom T-shirts</li>
              <li className="hover:text-green-500 cursor-pointer">Custom Hoodies</li>
              <li className="hover:text-green-500 cursor-pointer">Custom Mugs</li>
              <li className="hover:text-green-500 cursor-pointer">Custom Socks</li>
              <li className="hover:text-green-500 cursor-pointer">Custom Backpacks</li>
              <li className="hover:text-green-500 cursor-pointer">Sell on Etsy</li>
              <li className="hover:text-green-500 cursor-pointer">Sell on Social Media</li>
              <li className="hover:text-green-500 cursor-pointer">Custom All-Over-Print Hoodies</li>
              <li className="hover:text-green-500 cursor-pointer">Start POD Business</li>
              <li className="hover:text-green-500 cursor-pointer">Transfering To Printify</li>
            </ul>
          </div>

          {/* Printify */}
          <div>
            <h3 className="font-semibold mb-4">Printify</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-500 cursor-pointer">Print on Demand</li>
              <li className="hover:text-green-500 cursor-pointer">Print Providers</li>
              <li className="hover:text-green-500 cursor-pointer">Experts Program</li>
              <li className="hover:text-green-500 cursor-pointer">Printify Express Delivery</li>
              <li className="hover:text-green-500 cursor-pointer">Become a Partner</li>
              <li className="hover:text-green-500 cursor-pointer">Printify Quality Promise</li>
              <li className="hover:text-green-500 cursor-pointer">Jobs</li>
              <li className="hover:text-green-500 cursor-pointer">Webinars</li>
              <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-width Copyright and Policies */}
      <div className="bg-gray-100 py-12 mt-40">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-2">
            <span className="text-gray-600 text-sm mx-2 hover:text-green-500 cursor-pointer">Intellectual Property Policy</span>
            <span className="text-gray-600 text-sm mx-2 hover:text-green-500 cursor-pointer">Terms of Service</span>
            <span className="text-gray-600 text-sm mx-2 hover:text-green-500 cursor-pointer">Privacy Policy</span>
            <span className="text-gray-600 text-sm mx-2 hover:text-green-500 cursor-pointer">Security</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 Printify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
