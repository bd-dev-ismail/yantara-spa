import React from "react";
import thai from "../../assets/thimassage.webp";
import aromatheraphy from "../../assets/aromatherapy.webp";
import swedish from "../../assets/swedhishmassage.jpg";
import balinese from "../../assets/balienese.jpg";
import deep from "../../assets/deep-tissue-massage.jpg";
import yantra from "../../assets/yantara-massage.webp";
import candle from "../../assets/candlemassagejpg.jpg";
import lomi from "../../assets/lomi-lomi-Four-hand_web.jpg";
import pedicure from "../../assets/pedicures.jpg";
import manicure from "../../assets/manicure-massage.jpg";
import bath from "../../assets/steam-bath.jfif";

const data = [
  {
    id: 1,
    name: "Thai Massage (Dry)",
    desc: "This Treatment Fuses Treditional Thai Massage with Pressure Points and Streching Techniques Which Release Tension and Creates whole of the Mind. Body and Sprit.",
    img: thai,
    price1: "2200",
    price2: "3000",
    price3: "3800",
  },
  {
    id: 2,
    name: "Aromatheraphy Massage",
    desc: "Some of the health benefits of aromatherapy include it;s ability to reduce anxiety,ease depression, boost energy levels, speed, strengthen the immune system, reduce pain, improve digestion, and increase circulation",
    img: aromatheraphy,
    price1: "2400",
    price2: "3400",
    price3: "4200",
  },
  {
    id: 3,
    name: "Swedish Massage",
    desc: "Swedish massage technique is to relax the entire body. Swedish massage is exceptionallay beneficial for increasing the level of oxygen in the blood. decreasing muscle toxins, improving circulation and felxiblity while easing tension.",
    img: swedish,
    price1: "2700",
    price2: "3500",
    price3: "4200",
  },
  {
    id: 4,
    name: "Balinese Massage",
    desc: "The deep-tissue techniques used work deep into the muscles and tissues too resolve even the most stubborn knots and adhesions. Anyone feeling run down. physically or mentally will gain a lot from a massage.",
    img: balinese,
    price1: "2800",
    price2: "3600",
    price3: "4400",
  },
  {
    id: 5,
    name: "Deep Tissue Massage",
    desc: "Deep Tissue Massage is a therapy that focuses on realignling deeper layeof muscles. It is used for chronic aches and pain and contreacted areas such as a stuff neck and upper back, low back pain, leg muscle tightness and sore shoulders.",
    img: deep,
    price1: "3000",
    price2: "4000",
    price3: "4700",
  },
  {
    id: 6,
    name: "Yantra Message",
    desc: "A Therapy ,Which Involves Streaching and Deep Massage that can  Reduce Stress, Releasing Tight joints and muscles, Experience the deep-state of relaxation with two powerful combination of oli & massage",
    img: yantra,
    price1: "3300",
    price2: "4300",
    price3: "4800",
  },
  {
    id: 7,
    name: "Candle Massage",
    desc: "Massage candles offer anti-ageing properties and health benefits for the skin. The aroma uplifts the mood making one feel very content and calm. The treatment soothes and nourishes your senses; leaving you feel refreshed, invigorated and it leaves your hands and feet truly soft",
    img: candle,
    price1: "3500",
    price2: "4500",
    price3: "5000",
  },
  {
    id: 8,
    name: "Lomi Lomi -(4 Hands Massage)",
    desc: "Using Indonesian floaraal oil that contains relaxing lavender and calming Ylang Ylang, plam pressure, stretching techniques and acupressure are applied to the body to relieve tension and muscle fatigure. impreove blood flow and bring you total serenity and body restoration",
    img: lomi,
    price1: "4800",
    price2: "5800",
    price3: "7000",
  },
  {
    id: 9,
    name: "Pedicure",
    desc: "A pedicure is a cos metic treatment of the feet and toenails, analogues to a manicure. Pedicures are donw for cosmetic, therapeutic purposes. They are popular throughout the world. Predicures include care not only for the toenails; dead skin cells are rubbed off the bottom of the feet using a rought stone",
    img: pedicure,
    price1: "999 ",
    price2: "1499",
  },
];
// const services = [
//   {
//     id: 10,
//     name: "Manicure",
//     desc: "a cosmetic treatment of the4 hands involving shaping and often painting of the nails, removal of the cuticles, and softening of the skin.",
//     img: manicure,
//     price1: "999 ",
//     price2: "1499",
//     min1: "30",
//     min2: "60",
//   },
//   {
//     id: 11,
//     name: "Stem Bath",
//     items: [
//       {
//         name: "Cleaning Congestions",
//       },
//       {
//         name: "Improving Skin Health",
//       },
//       {
//         name: "Lowering Blood presure",
//       },
//       {
//         name: "Easing bronchitis symptoms",
//       },
//       {
//         name: "Workout recovery",
//       },
//       {
//         name: "Relaxation",
//       },
//       {
//         name: "Lowering joint stiffness.",
//       },
//     ],
//     img: bath,
//     price1: "399",
//     price2: "599",
//     min1: "15",
//     min2: "30",
//   },
// ];
const SpaTreatment = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none my-20">
          Spa <span className="golden-color">Treatments</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {data.map((service) => (
          <div
            style={{ background: "#fff" }}
            className="card card-compact golden-color-bg text-black w-full lg:w-96 shadow-2xl"
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
                <div className="flex justify-around gap-8 items-center">
                  <div>
                    <p className="text-xl font-semibold">Minutes</p>
                    <p>60 Mins</p>
                    <p>90 Mins</p>
                    <p>120 Mins</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Price</p>
                    <p>Rs. {service?.price1} /- </p>
                    <p>Rs. {service?.price2} /- </p>

                    <p>Rs. {service?.price3} /- </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="lg:flex justify-center items-center mt-9  lg:gap-8">
        {services.map((service) => (
          <div
            style={{ background: "#fff" }}
            className="card card-compact golden-color-bg text-black mb-5  w-full h-[560px] lg:w-96 shadow-2xl"
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
                <div className="flex justify-around gap-8 items-center">
                  <div>
                    <p className="text-xl font-semibold">Minutes</p>
                    <p>{service?.min1} Mins</p>
                    <p>{service?.min1} Mins</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Price</p>
                    <p>Rs. {service?.price1} /- </p>
                    <p>Rs. {service?.price2} /- </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="lg:flex justify-center items-center mt-9  lg:gap-8">
        <div
          style={{ background: "#fff" }}
          className="card card-compact golden-color-bg text-black mb-5  w-full h-[560px] lg:w-96 shadow-2xl"
        >
          <figure>
            <img src={bath} alt="Shoes" className="h-64 w-full object-fill" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">service.name</h2>
            <p>service.desc</p>

            <li>item.name</li>

            <div className="card-actions justify-center my-3 ">
              <div className="flex justify-around gap-8 items-center">
                <div>
                  <p className="text-xl font-semibold">Minutes</p>
                  <p>service?.min1 Mins</p>
                  <p>service?.min1 Mins</p>
                </div>
                <div>
                  <p className="text-xl font-semibold">Price</p>
                  <p>Rs. service?.price1 /- </p>
                  <p>Rs. 100/- </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
     
    </div>
  );
};

export default SpaTreatment;
