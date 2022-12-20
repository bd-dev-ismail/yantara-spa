import React from 'react';
import head from '../../assets/headmassage.jpg';
import neack from "../../assets/neckbackshoulder.jpg";
const ServiceItem = () => {
    return (
      <div>
        <div className="px-4 border-2 border-yellow-400 rounded-xl shadow-2xl py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-3xl sm:leading-none">
                    Head<span className="golden-color"> Massage</span>
                  </h2>
                  <p className="my-5">
                    A head massage help relieve stress and reduce tesnsion. It
                    may also ease migraine or headache pain, lower blood
                    pressure,improve circulation to your head and neck, and
                    promote hair growtyh. Before using essential olis, make sure
                    they're diluted, and do a patch test before using on a large
                    area of skin.
                  </p>
                </div>
                <ul className="space-y-2 dark:text-gray-400">
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span> Lowers Blood Pressure and Heart Rate.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Reduces Arthritis Symptoms.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Rehabilitates Injured Muscles.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      {" "}
                      Deep tissue massage is a great stress reliever.
                    </span>
                  </li>
                </ul>
                <div className="flex justify-around my-5 items-center">
                  <div>
                    <p className="text-xl font-semibold">Minutes</p>
                    <p>30 Mins</p>
                    <p>45 Mins</p>
                    <p>45 Mins</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Price</p>
                    <p>₹1500 Rs</p>
                    <p>₹2200 Rs</p>
                    <p>₹2200 Rs</p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#form"
                    class="inline-flex items-center rounded-lg font-semibold justify-center h-12 px-6 text-white"
                    style={{ background: "#cea314" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={head}
                alt=""
              />
              {/* <a
                href="/"
                className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
              ></a> */}
            </div>
          </div>
        </div>
        <div className="px-4 my-10 border-2 border-yellow-400 rounded-xl shadow-2xl py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col-reverse items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-3xl sm:leading-none">
                    Neck, Back &<span className="golden-color"> Shoulder</span>
                  </h2>
                  <p className="my-5">
                    Neck, Back & Shoulder Massage will have a soothing effect on
                    the sensory nerve endings in the skin, it will promote
                    relaxation, It relieves muscular tension and pain in the
                    neck and shoulders. It improves the elastioty of the skin
                    and the muscles.
                  </p>
                </div>
                <ul className="space-y-2 dark:text-gray-400">
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span> Lowers Blood Pressure and Heart Rate.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Reduces Arthritis Symptoms.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Rehabilitates Injured Muscles.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 golden-color dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      {" "}
                      Deep tissue massage is a great stress reliever.
                    </span>
                  </li>
                </ul>
                <div className="flex justify-around my-5 items-center">
                  <div>
                    <p className="text-xl font-semibold">Minutes</p>
                    <p>30 Mins</p>
                    <p>45 Mins</p>
                    <p>45 Mins</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Price</p>
                    <p>₹1500 Rs</p>
                    <p>₹2200 Rs</p>
                    <p>₹2200 Rs</p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#form"
                    class="inline-flex items-center rounded-lg font-semibold justify-center h-12 px-6 text-white"
                    style={{ background: "#cea314" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={neack}
                alt=""
              />
              {/* <a
                href="/"
                className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
              ></a> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceItem;