import React from 'react';
import { FaBlenderPhone, FaEnvelopeOpenText, FaLocationArrow } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Appointment = () => {
    const services = [
        {
            id: 1,
            name: "Head Massage"
        },
        {
            id: 2,
            name: "Neck, Back & Shoulder"
        },
        {
            id: 3,
            name: "Foot Reflexology"
        },
        {
            id: 4,
            name: "Spa Treatment"
        },
        {
            id: 5,
            name: "Deep Tissue Massage"
        },
        {
            id: 6,
            name: "Yantra Massage"
        },
        {
            id: 7,
            name: "Pedicure"
        },
        {
            id: 8,
            name: "Menicure"
        },
        {
            id: 9,
            name: "Steam Bath"
        },
        {
            id: 10,
            name: "Facial"
        },
        {
            id: 11,
            name: "Body Scrub"
        },
        {
            id: 12,
            name: "Body Wraps"
        },
        {
            id: 13,
            name: "Membership Packages"
        },
    ];
    const submit = (e) => {
      e.preventDefault();
      // const form = e.target.value.name;
      // const firstName = form.first_name;
      // const lastName = form.last_name;
      // const number = form.number;
      // const email = form.email;
      // const service = form.service;
      // const message = form.message;
      // console.log(firstName, lastName, number, email, service, message);
      // e.target.value.name.reset();
      Swal.fire("Message Send!", "Thank you for contacting us!", "success");
      
    };
    return (
      
      <div>
        <div>
          <div className="text-center">
            <h2 className=" text-center font-sans text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
              Book an <span className="golden-color">Appointment</span>
            </h2>
          </div>
          <div className="grid mt-10 py-10 items-center max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto rounded-lg md:grid-cols-2 bg-black border-2 border-yellow-300 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between lg:mr-20">
              <div className="space-y-2">
                <h2 className="text-4xl py-5 font-bold leading-tight lg:text-5xl">
                  We love to hear <br className="hidden lg:block" />{" "}
                  <span className="golden-color">from you</span>
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
                onSubmit={submit}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <label htmlFor="name" className="text-sm">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    id="name"
                    type="text"
                    placeholder="Jhon"
                    className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="name" className="text-sm">
                    Last Name
                  </label>
                  <input
                    name="last_name"
                    id="name"
                    type="text"
                    placeholder="Doe"
                    className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <label htmlFor="name" className="text-sm">
                    Contact Number
                  </label>
                  <input
                    name="number"
                    id="name"
                    type="number"
                    placeholder="+91 00000000"
                    className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full input input-bordered p-3 rounded dark:bg-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Chosse A Service</span>
                </label>
                <select name='service' className="select select-bordered w-full  input  p-3 rounded dark:bg-gray-800">
                  <option selected disabled>Services</option>
                  {services.map((service) => (
                    <option value={service?.name} key={service.id}>{service?.name}</option>
                  ))}
                </select>
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
                className="w-full p-3 text-sm font-bold tracking-wide text-white uppercase rounded bg-yellow-500 dark:text-gray-900"
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