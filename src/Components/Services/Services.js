import React from 'react';
import head from '../../assets/headmassage.jpg';
import neack from '../../assets/neckbackshoulder.jpg';
import foot from '../../assets/reflexology.jpeg';
import BodyScrub from './BodyScrub';
import BodyWraps from './BodyWraps';
import DualCard from './DualCard';
import Facials from './Facials';
import ServiceItem from './ServiceItem';
import SpaTreatment from './SpaTreatment';
const service1Data = [
  {
    id: 1,
    name: "Head Massage",
    desc: "A head massage help relieve stress and reduce tesnsion. It may also ease migraine or headache pain, lower blood pressure,improve circulation to your head and neck, and promote hair growtyh. Before using essential olis, make sure they're diluted, and do a patch test before using on a large area of skin.",
    img: head,
    price1: "Rs 1500 -30Mins",
    price2: "Rs 2200 -45Mins",
  },
  {
    id: 2,
    name: "Neck, Back & Shoulder",
    desc: "Neck, Back & Shoulder Massage will have a soothing effect on the sensory nerve endings in the skin, it will promote relaxation, It relieves muscular tension and pain in the neck and shoulders. It improves the elastioty of the skin and the muscles.",
    img: neack,
    price1: "Rs 1500 -30Mins",
    price2: "Rs 2200 -45Mins",
  },
  {
    id: 3,
    name: "Foot Reflexology",
    desc: "Foot Reflexology massage can be a deeply realxing & therapeutic modality for those suffering from plantar fascits ,anlde Injuries or even everyday work and play. At Massage Envy, your massage therapist will apply traditional Swdish and sports massage techniques to the foot, calf and upper leg. This will not only help relieve toe pain, ankle pain, plantar fascitis and common forms of arthritis.",
    img: foot,
    price1: "Rs 1500 -30Mins",
    price2: "Rs 2200 -45Mins",
  },
];
const Services = () => {
    return (
      <div>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <h2 className="text-center text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none my-10">
            Our <span className="golden-color">Services</span>
          </h2>
        </div>
        <div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service1Data.map((service) => (
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
                  <div className="card-actions justify-end my-3 ">
                    <div>
                      <button className="btn bg-black capitalize btn-primary btn-sm">
                        {service.price1}
                      </button>
                    </div>
                    <div>
                      <button className="btn bg-black capitalize btn-primary btn-sm">
                        {service.price2}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div>
            <ServiceItem />
          </div>
          {/* <div>
            <DualCard/>
          </div> */}
          <div>
            <SpaTreatment />
          </div>
          <div className="px-4 my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <Facials />
          </div>
          <div className="px-4 my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <BodyScrub />
          </div>
          <div className="px-4 my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <BodyWraps />
          </div>
        </div>
      </div>
    );
};

export default Services;