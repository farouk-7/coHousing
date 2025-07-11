"use client"

import React, { useState } from "react";
import CustomBtn from "./CustomBtn"; 
import Link from "next/link";   

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600 cursor-pointer">
            <Link href={"/"}>
            CoHousing
            </Link>
            
          </div>

          
          <div className="hidden md:flex space-x-8 items-center font-bold">
            <Link href="/explore" className="text-gray-700 hover:text-indigo-600">
              Explore
            </Link>
            <Link href="/howItWorks" className="text-gray-700 hover:text-indigo-600">
              How it works
            </Link>
            <Link href="pricing" className="text-gray-700 hover:text-indigo-600">
              Pricing
            </Link>
            <Link href="contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
             <Link href="login" className="text-gray-700 hover:text-indigo-600 cursor-pointer">
              <CustomBtn text="Login" bg="bg-blue-700"/>
            </Link>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 font-bold transition duration-300 ease-in-out">
          <Link
            href="explore"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
         Explore
          </Link>
          <Link
            href="howItWorks"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            How it works
          </Link>
          <Link
            href="pricing"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Pricing
          </Link>
          <a
            href="contact"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Contact
          </a>
                 <a
            href="login"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            <CustomBtn text="Login" bg="bg-blue-700"/>
          </a>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
