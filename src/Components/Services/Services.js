import React from 'react';

const Services = () => {
    return (
      <div>
        <h2 className="text-center text-3xl font-bold tracking-tight golden-color sm:text-4xl sm:leading-none">
          Our All Services
        </h2>
        <div>
          <div>
            <div
              style={{ background: "#cea314" }}
              className="card card-compact golden-color-bg text-white w-96 shadow-2xl"
            >
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Head Massage</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;