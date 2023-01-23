import React from 'react';
import white from '../../assets/white&bright.webp';
import anti from '../../assets/anti-aging-facial.jpg';
import deep from '../../assets/deep-tissue-massage.jpg';
const Facials = () => {
    const data = [
      {
        id: 1,
        name: "White & Bright Facial",
        desc: "This Facial is mainly for pigmentation, dark circles, sun tan, dark sports and sagging. There are no chemical in the products. This Facial Contains natural fruit so that the superficial dead cells are completely removed. It contains anti-oxidant blend which gives glow to the skin. The serum helps to control the activity of the melanin. This facial lightens skin tone or provide an even skin complexion by lessening the concentration of melanin activity. This facial is recommende for all skin types.",
        img: white,
        price1: "2000",
      },
      {
        id: 2,
        name: "Anti-Aging FAcial",
        desc: "This Treatment targets the aging process of the skin restoring mature skin in a gentle manner. This treatment works on the lost collagen of the skin and ensures proper care for skins renewal. This theraphy lifts and firms skin repairing damage leaving skin looking younger and vibrant.",
        img: anti,
        price1: "2500",
      },
      {
        id: 3,
        name: "Deep Cleansing Facial",
        desc: "An effective pore purifying facial which deep cleanse the skin combining professional Strenght lactic acid and botanical extratcs. This treatment refines skin clarity and reduces Acne blemishes while soothing redness and inframation A simple and Effective treatment with high-performance ingreadients provides clear and visible",
        img: deep,
        price1: "2800",
      },
    ];
    return (
      <div>
        <h2 className="text-center golden-color text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none my-20">
          Facials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((service) => (
            <div
              style={{ background: "#cea314" }}
              className="card card-compact golden-color-bg text-white w-full lg:w-96 shadow-2xl"
            >
              <figure>
                <img src={service.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.desc}</p>
                <div className="card-actions justify-center my-3 ">
                  <div className="flex justify-around gap-8  items-center">
                    <div>
                      <p className="text-xl font-semibold">Minutes</p>
                      
                      <p>60 Mins</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Price</p>
                      <p>
                        Rs. {service?.price1} /-{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Facials;