import React from 'react';
import coco from '../../assets/co-co-butter.jpg';
import whiting from '../../assets/whiting-wrap.jpg';
import natural from '../../assets/natural-food.jpg';
const BodyWraps = () => {
     const data = [
       {
         id: 1,
         name: "Coco Butter Wrap",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
         img: coco,
         price1: "Rs 3000 -60Mins",
       },
       {
         id: 2,
         name: "Whitening Wrap",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
         img: whiting,
         price1: "Rs 2700 -60Mins",
       },
       {
         id: 3,
         name: "Natural Fruit Wrap",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nam fugit obcaecati est porro ipsa hic voluptatem impedit expedita similique facilis, illum esse harum! Omnis suscipit doloribus quibusdam doloremque qui!",
         img: natural,
         price1: "Rs 2500 -60Mins",
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
                <p>{service.desc}</p>
                <div className="card-actions justify-center my-3 ">
                  <div className="flex justify-around gap-8  items-center">
                    <div>
                      <p className="text-xl font-semibold">Minutes</p>
                      <p>30 Mins</p>

                      <p>60 Mins</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Price</p>
                      <p>Rs. 1500 /- </p>
                      <p>Rs. 2200 /- </p>
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