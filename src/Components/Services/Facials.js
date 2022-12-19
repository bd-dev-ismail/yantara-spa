import React from 'react';
import white from '../../assets/white&bright.webp';
import anti from '../../assets/anti-aging-facial.jpg';
import deep from '../../assets/deep-tissue-massage.jpg';
const Facials = () => {
    const data = [
      {
        id: 1,
        name: "White & Bright Facial",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
        img: white,
        price1: "Rs 2000 -60Mins",
      },
      {
        id: 2,
        name: "Anti-Aging FAcial",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
        img: anti,
        price1: "Rs 2500 -60Mins",
      },
      {
        id: 3,
        name: "Deep Cleansing Facial",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
        img: deep,
        price1: "Rs 2800 -60Mins",
      },
    ];
    return (
      <div>
        <h2 className="max-w-lg mb-6 text-start golden-color font-sans text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
          Facials
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((service) => (
            <div
              style={{ background: "#cea314" }}
              className="card card-compact golden-color-bg text-white w-96 shadow-2xl"
            >
              <figure>
                <img src={service.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.desc}</p>
                <div className="card-actions justify-end my-3 ">
                  <div>
                    <button className="btn bg-black capitalize btn-primary btn-sm">
                      {service.price1}
                    </button>
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