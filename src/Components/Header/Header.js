import React from 'react';
import HeaderSlider from './HeaderSlider';

const Header = () => {
    return (
      <div className="mt-[4.5rem] grid grid-cols-1 lg:grid-cols-3">
        <div
          style={{ background: "#CFCED3" }}
          className="text-black lg:h-[65vh] h-[80vh] flex justify-center items-center text-center "
        >
          <div>
            <h3 className="text-3xl font-bold mb-5">Yantra Spa</h3>
            <p className="px-8">
              Pampering yourself once in a while is must. It refreshes your
              mind, body and soul. We are a well-known spa located in
              Himayatnagar, Hyderabad. Yantra welcomes you with warmth and great
              hospitality. We believe in expertise and along with our skilled
              professionals, we give you an amazing spa experience in a relaxing
              environment. At Yantra, we make sure that products are chosen
              among the best. We have combined some of the most popular
              treatments that go well along and provide you with the ultimate
              spa experience. Our packages have been created in traditional
              signature style spa therapies which benefits all the body types.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 lg:h-[65vh] h-[55vh]">
          <HeaderSlider />
        </div>
      </div>
    );
};

export default Header;