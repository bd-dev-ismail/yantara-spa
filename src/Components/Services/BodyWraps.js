import React from 'react';
import coco from '../../assets/co-co-butter.jpg';
import whiting from '../../assets/whiting-wrap.jpg';
import natural from '../../assets/natural-food.jpg';
const BodyWraps = () => {
     const data = [
       {
         id: 1,
         name: "Coco Butter Wrap",
         desc: "with indulgent, effective body care. Its Emphasis on the inner healing and balance of the mind, body and spirit. This pholosophy is enhanced by the use of natural and organic products, which contribute to the overall well being of our guests. Tempting Exfollates and nutrients rich mask excite your senses with their natural aromas. No spa experience is complete with out a Scrub, Wrap & Massage journey, Skin feels like silk and the body feels like it's walking on air......",
         img: coco,
         price1: "3000",
       },
       {
         id: 2,
         name: "Whitening Wrap",
         desc: "This treatment is designed to Cleanse, soften and nourish your skin with Coconut milk and Rice by exfollating the dead cells & helps to reduce skin tan with a warm scalp treatment complimentary",
         img: whiting,
         price1: "2700",
       },
       {
         id: 3,
         name: "Natural Fruit Wrap",
         desc: "Natural Fruit wrap purifies the body and gives a delightful shining appearance a has an overhelming fragrance and guides the receiver to the path of supreme well-being.",
         img: natural,
         price1: "2500",
       },
     ];
    return (
      <div>
        <h2 className="text-center text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none my-20">
          Body <span className="golden-color">Wraps</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((service) => (
            <div
              style={{ background: "#cea314" }}
              className="card card-compact golden-color-bg text-white w-full lg:w-96 shadow-2xl"
            >
              <figure>
                <img src={service.img} alt="Shoes" className="img-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.desc.slice(0, 170)}</p>
                <div className="card-actions justify-center my-3 ">
                  <div className="flex justify-around gap-8  items-center">
                    <div>
                      <p className="text-xl font-semibold">Minutes</p>
                      <p>30 Mins</p>

                      
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

export default BodyWraps;