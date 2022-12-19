import React from 'react';
import thai from '../../assets/thimassage.webp';
import aromatheraphy from '../../assets/aromatherapy.webp';
import swedish from '../../assets/swedhishmassage.jpg';
import balinese from '../../assets/balienese.jpg';
import deep from '../../assets/deep-tissue-massage.jpg';
import yantra from '../../assets/yantara-massage.webp';
import candle from '../../assets/candlemassagejpg.jpg';
import lomi from '../../assets/lomi-lomi-Four-hand_web.jpg';
import pedicure from '../../assets/pedicures.jpg';
import manicure from '../../assets/manicure-massage.jpg';
import bath from '../../assets/steam-bath.jfif';

const data = [
  {
    id: 1,
    name: "Thai Massage (Dry)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: thai,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 2,
    name: "Aromatheraphy Massage",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: aromatheraphy,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 3,
    name: "Swedish Massage",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: swedish,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 4,
    name: "Balinese Massage",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: balinese,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 5,
    name: "Deep Tissue Massage",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: deep,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 6,
    name: "Yantra Message",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: yantra,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 7,
    name: "Candle Massage",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: candle,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 8,
    name: "Lomi Lomi -(4 Hands Massage)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: lomi,
    price1: "Rs 2200 -30Mins",
    price2: "Rs 3000 -45Mins",
    price3: "Rs 3800 -120Mins",
  },
  {
    id: 9,
    name: "Pedicure",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: pedicure,
    price1: "Rs 999 -30Mins",
    price2: "Rs 1499 -45Mins",
    
  },
  {
    id: 10,
    name: "Manicure",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
    img: manicure,
    price1: "Rs 999 -30Mins",
    price2: "Rs 1499 -45Mins",
    
  },
  {
    id: 11,
    name: "Stem Bath",
    items: [
      {
        name: "Cleaning Congestions"
      },
      {
        name: "Improving Skin Health"
      },
      {
        name: "Lowering Blood presure"
      },
      {
        name: "Workout recovery"
      }
    ],
    img: bath,
    price1: "Rs 399 -15Mins",
    price2: "Rs 599 -30Mins",
    
  },
];
const SpaTreatment = () => {
    return (
      <div>
        <div>
          <h2 className="max-w-lg mb-6 text-start font-sans text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
            Spa <span className="golden-color">Treatments</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((service) => (
            <div
              style={{ background: "#fff" }}
              className="card card-compact golden-color-bg text-black w-96 shadow-2xl"
            >
              <figure>
                <img
                  src={service.img}
                  alt="Shoes"
                  className="h-64 w-full object-fill"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.desc}</p>
                {service?.items?.map((item) => (
                  <li>{item.name}</li>
                ))}
                <div className="card-actions justify-center my-3 ">
                  <div>
                    <button
                      style={{ background: "#cea314" }}
                      className="btn bg-black  font-bold capitalize border-0 btn-primary btn-sm"
                    >
                      {service.price1}
                    </button>
                  </div>
                  <div>
                    <button
                      style={{ background: "#cea314" }}
                      className="btn bg-black font-bold capitalize border-0  btn-primary btn-sm"
                    >
                      {service.price2}
                    </button>
                  </div>
                  <div>
                    {service.price3 ? (
                      <button
                        style={{ background: "#cea314" }}
                        className="btn bg-black font-bold capitalize border-0  btn-primary btn-sm"
                      >
                        {service.price2}
                      </button>
                    ) : undefined}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SpaTreatment;