import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './offer.css';
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
const Offer = () => {
    return (
      <div className="my-20">
        <div className="text-center">
          <h2 className="text-center text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
            Our Membership <span className="golden-color">Packages</span>
          </h2>
        </div>
        <div>
          {/* <section>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
          </section> */}

          <div className="container mx-auto">
            <Swiper
              navigation={true}
              slidesPerView={1}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay
            >
              <SwiperSlide>
                <div class="relative max-w-screen-xl py-10 px-4 mx-auto sm:px-6 lg:px-8">
                  <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                      <h3 class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                        Silver
                      </h3>
                      <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                        Traditional Thai massage includes ayurvedic and
                        traditional Chinese medicine that involves stretching,
                        pulling and rocking techniques to reduce tension,
                        promote relaxation, and improve flexibility. Thai
                        massage benefits an individual in the following ways:
                      </p>
                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                            What&#x27;s included
                          </h4>
                          <div class="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lowers Blood Pressure and Heart Rate.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum, dolor sit amet consectetur.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Best ranking
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Prenium svg
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              My wife
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                            &amp; What&#x27;s not
                          </h4>
                        </div>
                        <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                class="w-6 h-6 mr-2"
                                fill="red"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              No Contracts. No monthly, setup, or additional
                              payment processor fees
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                class="w-6 h-6 mr-2"
                                fill="red"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              No 2-week on-boarding, it takes 20 minutes!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                      <p class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Free
                      </p>
                      <div class="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                        <span>$0/mo</span>
                      </div>
                      <p class="mt-4 text-sm leading-5">
                        <span class="block font-medium text-gray-500 dark:text-gray-400">
                          Card payments:
                        </span>
                        <span class="inline-block font-medium text-gray-500  dark:text-gray-400">
                          2.9% + 20p per transaction
                        </span>
                      </p>
                      <div class="mt-6">
                        <div class="rounded-md shadow">
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
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative max-w-screen-xl py-10 px-4 mx-auto sm:px-6 lg:px-8">
                  <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                      <h3 class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                        Gold
                      </h3>
                      <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                        Traditional Thai massage includes ayurvedic and
                        traditional Chinese medicine that involves stretching,
                        pulling and rocking techniques to reduce tension,
                        promote relaxation, and improve flexibility. Thai
                        massage benefits an individual in the following ways:
                      </p>
                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                            What&#x27;s included
                          </h4>
                          <div class="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lowers Blood Pressure and Heart Rate.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum, dolor sit amet consectetur.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Best ranking
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Prenium svg
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              My wife
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                            &amp; What&#x27;s not
                          </h4>
                        </div>
                        <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                class="w-6 h-6 mr-2"
                                fill="red"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              No Contracts. No monthly, setup, or additional
                              payment processor fees
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                class="w-6 h-6 mr-2"
                                fill="red"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              No 2-week on-boarding, it takes 20 minutes!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                      <p class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Free
                      </p>
                      <div class="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                        <span>₹15000/6mo</span>
                      </div>
                      <p class="mt-4 text-sm leading-5">
                        <span class="block font-medium text-gray-500 dark:text-gray-400">
                          Card payments:
                        </span>
                        <span class="inline-block font-medium text-gray-500  dark:text-gray-400">
                          2.9% + 20p per transaction
                        </span>
                      </p>
                      <div class="mt-6">
                        <div class="rounded-md shadow">
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
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative max-w-screen-xl py-10 px-4 mx-auto sm:px-6 lg:px-8">
                  <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                      <h3 class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                        Diamond
                      </h3>
                      <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                        Traditional Thai massage includes ayurvedic and
                        traditional Chinese medicine that involves stretching,
                        pulling and rocking techniques to reduce tension,
                        promote relaxation, and improve flexibility. Thai
                        massage benefits an individual in the following ways:
                      </p>
                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                            What&#x27;s included
                          </h4>
                          <div class="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lowers Blood Pressure and Heart Rate.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum, dolor sit amet consectetur.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Best ranking
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              Prenium svg
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                class="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              My wife
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                            &amp; What&#x27;s not
                          </h4>
                        </div>
                        <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                class="w-6 h-6 mr-2"
                                fill="red"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              No Contracts. No monthly, setup, or additional
                              payment processor fees
                            </p>
                          </li>
                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                class="w-6 h-6 mr-2"
                                fill="red"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                              No 2-week on-boarding, it takes 20 minutes!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                      <p class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Free
                      </p>
                      <div class="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                        <span>₹25000/9mo</span>
                      </div>
                      <p class="mt-4 text-sm leading-5">
                        <span class="block font-medium text-gray-500 dark:text-gray-400">
                          Card payments:
                        </span>
                        <span class="inline-block font-medium text-gray-500  dark:text-gray-400">
                          2.9% + 20p per transaction
                        </span>
                      </p>
                      <div class="mt-6">
                        <div class="rounded-md shadow">
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
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    );
};

export default Offer;
// flex flex-wrap items-stretch -mx-4
// sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0
// sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0
//  sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0