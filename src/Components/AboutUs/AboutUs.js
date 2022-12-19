import React from 'react';
import about from '../../assets/about.png';
import { FaPhoneAlt, IconName } from "react-icons/fa";
const AboutUs = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider golden-color uppercase ">
                    Yantra Spa
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
                  About <span className="golden-color">Us</span>
                </h2>
                <p className="text-base text-gray-200 md:text-lg">
                  Pampering yourself once in a while is must. It refreshes your
                  mind, body and soul. We are a well-known spa located in
                  Himayatnagar, Hyderabad. Yantra welcomes you with warmth and
                  great hospitality. We believe in expertise and along with our
                  skilled professionals, we give you an amazing spa experience
                  in a relaxing environment. At Yantra, we make sure that
                  products are chosen among the best. We have combined some of
                  the most popular treatments that go well along and provide you
                  with the ultimate spa experience. Our packages have been
                  created in traditional signature style spa therapies which
                  benefits all the body types.
                </p>
              </div>
              <div>
                <p className="text-gray-200  font-semibold">
                  Call for appointment
                </p>
                <div className="flex items-center mt-2">
                  <FaPhoneAlt className="mr-3 text-xl golden-color" />
                  <p className="text-xl golden-color">998 (455) 478</p>
                </div>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={about}
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

export default AboutUs;