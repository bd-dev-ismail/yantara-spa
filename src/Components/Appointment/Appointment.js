import React from 'react';
import { FaBlenderPhone, FaEnvelopeOpenText, FaLocationArrow } from 'react-icons/fa';

const Appointment = () => {
    return (
      <div>
        <div>
          <div className='text-center'>
            <h2 className=" text-center font-sans text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
              Book a <span className="golden-color">Appointment</span>
            </h2>
          </div>
          <div className="grid mt-10 items-center max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto rounded-lg md:grid-cols-2  dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between lg:mr-20">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  We love to hear <br className="hidden lg:block" /> from you
                </h2>
                <div className="dark:text-gray-400">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center my-3">
                    <FaLocationArrow className="text-xl golden-color mr-5" />
                    <p>
                      Himayatnagar, Hyderabad, <br />
                      Telangana 500029, India
                    </p>
                  </div>
                  <div className="flex items-center my-3">
                    <FaEnvelopeOpenText className="text-xl golden-color mr-5" />
                    <p>
                      support@example.com <br /> info@example.com
                    </p>
                  </div>
                  <div className="flex items-center my-3">
                    <FaBlenderPhone className="text-xl golden-color mr-5" />
                    <p>
                      +91 93467 45268 <br /> +91 83097 66093
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form
              // ref={form}
              //   onSubmit={sendEmail}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  name="user_name"
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  name="user_email"
                  id="email"
                  type="email"
                  className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  className="w-full textarea textarea-bordered  p-3 rounded dark:bg-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-500 dark:text-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Appointment;