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
        <h2 className="max-w-lg mb-6 text-start  font-sans text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
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

export default BodyWraps;