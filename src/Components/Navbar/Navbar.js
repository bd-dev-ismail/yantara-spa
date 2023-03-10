import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItem = (
      <>
        <li>
          <a
            href="#home"
            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-yellow-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-yellow-400"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-yellow-400"
          >
            Services
          </a>
        </li>
        {/* <li>
          <a
            href="#offer"
            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-yellow-400"
          >
            Offers
          </a>
        </li> */}
        {/* <li>
          <a
            href="#reviews"
            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-yellow-400"
          >
            Reviews
          </a>
        </li> */}
        <li>
          <a
            href="#form"
            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-yellow-400"
          >
            contact us
          </a>
        </li>
      </>
    );
    return (
      <div className="relative">
        <div class="bg-white fixed top-0 w-full z-10">
          <div class="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between">
              <a
                href="home"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center"
              >
                <span class="ml-2 text-xl font-bold tracking-wide hover:hover:text-yellow-400 text-gray-900 uppercase">
                  Yantra Spa
                </span>
              </a>
              {/* <ul class="flex items-cetner hidden space-x-8 lg:flex"></ul> */}
              <ul class="flex items-center hidden space-x-8 lg:flex">
                {menuItem}
                <li>
                  <a
                    href="#form"
                    class="inline-flex items-center text-white rounded-lg font-semibold justify-center h-12 px-6 "
                    style={{ background: "#cea314" }}
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
              <div class="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg class="w-5 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div class="absolute top-0 left-0 w-full">
                    <div class="p-5 bg-white border rounded shadow-sm">
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center"
                          >
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Yantra Spa
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul class="space-y-4">
                          <li>
                            <a
                              href="#home"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Home
                            </a>
                          </li>
                          <li>
                            <a
                              href="#about"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#services"
                              aria-label="Product pricing"
                              title="Product pricing"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Services
                            </a>
                          </li>
                          <li>
                            <a
                              href="#offer"
                              aria-label="About us"
                              title="About us"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Offers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#reviews"
                              aria-label="About us"
                              title="About us"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Reviews
                            </a>
                          </li>
                          <li>
                            <a
                              href="#form"
                              class="inline-flex items-center rounded-lg font-semibold justify-center h-12 px-6 text-black"
                              style={{ background: "#ffc812" }}
                            >
                              Book Appointment
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;