import React from 'react';
import lemon from '../../assets/lemon.webp';
import coffe from '../../assets/COFFEE-RUB.jpg';
import salt from '../../assets/SALT-SCRUB.jpg';
const BodyScrub = () => {
    const data = [
      {
        id: 1,
        name: "Lemon Grass",
        desc: "Helps to revitalize the body and clear the mind. Thai Lemongrass is a bold, clean, and zesty aroma that awakens the senses. It helps with mental concentration, focus, and motivation. The fresh lemony lime and subtle grass notes are the perfect balance to uplift the spirit.",
        img: lemon,
        price1: "3000",
      },
      {
        id: 2,
        name: "Coffe Bean Scrub",
        desc: "Coffee bean scrub has several benefits that include: exfoliating and anti-inflammatory properties, temporary reduction of cellulite improved circulation, reduced eye puffiness, and smooth skin.",
        img: coffe,
        price1: "2700",
      },
      {
        id: 3,
        name: "Sea Salt Body Scrub",
        desc: "Salt scrubs as they are more vigorous type of scrub. The salt scrub can be made with differing grades of sea salt depending on the level of exfoliant your skin will tolerate. Sea salt body scrubs are great for healing & bringing toxins to the surface.",
        img: salt,
        price1: "2500",
      },
    ];
    return (
      <div>
        <h2 className="text-center  text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none my-20">
          Body <span className="golden-color">Scrub</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((service) => (
            <div
              style={{ background: "#fff" }}
              className="card card-compact golden-color-bg text-black w-full lg:w-96 shadow-2xl"
            >
              <figure>
                <img src={service.img} alt="Shoes" className="img-full" />
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
                      <p>Rs. {service?.price1} /- </p>
                      
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

export default BodyScrub;