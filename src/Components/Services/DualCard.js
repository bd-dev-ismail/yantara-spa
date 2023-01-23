import React from 'react';
import img1 from '../../assets/SALT-SCRUB.jpg';
const DualCard = () => {
    return (
      <div className="lg:flex lg:px-16 gap-4 mx-auto justify-center items-center">
        <div
          style={{ display: "block" }}
          className="card card-side p-4 lg:flex text-black bg-white rounded shadow-xl"
        >
          <figure>
            <img
              src={img1}
              alt="Movie"
              className="w-96 lg:h-[28rem] lg:w-full rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Thai Massage (Dry)</h2>
            <p>
              This Treatment Fuses Treditional Thai Massage with Pressure Points
              and Streching Techniques Which Release Tension and Creates whole
              of the Mind. Body and Sprit.
            </p>
            <div className="flex justify-start gap-16 my-5 items-center">
              <div>
                <p className="text-xl font-semibold">Minutes</p>
                <p>30 Mins</p>
                <p>60 Mins</p>
                <p>90 Mins</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Price</p>
                <p>₹1500</p>
                <p>₹2200</p>
                <p>₹2800</p>
              </div>
            </div>
            <div className="card-actions justify-end">
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
    );
};

export default DualCard;