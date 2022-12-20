import React from 'react';

const Offer = () => {
    return (
      <div className="my-20">
        <div className="text-center">
          <span className="font-bold tracking-wider uppercase golden-color">
            Pricing
          </span>
          <h2 className="text-center text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
            Our Membership <span className="golden-color">Packages</span>
          </h2>
        </div>
        <div>
          <section className="py-10">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex w-full mb-8 ">
                  <div className="flex flex-col p-6 space-y-6 rounded hover:text-white text-black shadow sm:p-8 hover:bg-[#cea314] bg-gray-100">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Silver</h4>
                      <span className="text-6xl font-bold">Free</span>
                    </div>
                    <p className="mt-3 leading-relaxed dark:text-gray-400">
                      Etiam ac convallis enim, eget euismod dolor.
                    </p>
                    <ul className="flex-1 mb-6 dark:text-gray-400">
                      <li className="flex mb-2 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Aenean quis</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Morbi semper</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Tristique enim nec</span>
                      </li>
                    </ul>
                    <button className="btn hover:bg-black change hover:text-white font-bold uppercase border-0 btn-primary">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="flex w-full mb-8">
                  <div className="flex flex-col p-6 space-y-6 rounded  text-white hover:text-black shadow sm:p-8 bg-[#cea314] hover:bg-gray-100">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Gold</h4>
                      <span className="text-6xl font-bold">
                        ₹15000
                        <span className="text-sm tracking-wide">/6month</span>
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      Morbi cursus ut sapien sit amet consectetur.
                    </p>
                    <ul className="flex-1 space-y-2">
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Everything in Free</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Phasellus tellus</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Praesent faucibus</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Aenean et lectus blandit</span>
                      </li>
                    </ul>
                    <button className="btn hover:bg-black change hover:text-white font-bold uppercase border-0 btn-primary">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="flex w-full mb-8 ">
                  <div className="flex flex-col p-6 space-y-6 rounded hover:text-white text-black shadow sm:p-8 hover:bg-[#cea314] bg-gray-100">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Diamond</h4>
                      <span className="text-6xl font-bold">
                        ₹25000
                        <span className="text-sm tracking-wide">/9month</span>
                      </span>
                    </div>
                    <p className="leading-relaxed dark:text-gray-400">
                      Phasellus ultrices bibendum nibh in vehicula.
                    </p>
                    <ul className="space-y-2 dark:text-gray-400">
                      <li className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Everything in Pro</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Fusce sem ligula</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Curabitur dictum</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Duis odio eros</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Vivamus ut lectus ex</span>
                      </li>
                    </ul>
                    <button className="btn hover:bg-black change hover:text-white font-bold uppercase border-0 btn-primary">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Offer;
// flex flex-wrap items-stretch -mx-4
// sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0
// sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0
//  sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0