import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import banner1 from '../../assets/img1.png';
import banner2 from '../../assets/img2.jpg';
import banner3 from '../../assets/img3.png';
import './Home.css';
const Home = () => {
    // SwiperCore.use([Autoplay]);
    return (
      <div>
        <Swiper
          pagination={true}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
        >
          <SwiperSlide>
            <div
              className="hero lg:h-[90vh] h-[55vh]"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content absolute left-[5%] lg:left-[17%] text-start text-black">
                <div className="max-w-md">
                  <p className="text-3xl italic">Spa & Massage</p>
                  <h1 className="mb-5 lg:text-9xl text-5xl font-bold">
                    Relaxation
                  </h1>

                  <a
                    href="#form"
                    class="inline-flex items-center rounded-lg font-semibold justify-center h-12 px-6 text-white"
                    style={{ background: "#cea314" }}
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:h-[90vh] h-[55vh]"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-black">
                <div className="max-w-md">
                  <p className="text-3xl italic">Spa & Massage</p>
                  <h1 className="mb-5 lg:text-9xl text-5xl font-bold">
                    Relaxation
                  </h1>

                  <a
                    href="#form"
                    class="inline-flex items-center rounded-lg font-semibold justify-center h-12 px-6 text-white"
                    style={{ background: "#cea314" }}
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:h-[90vh] h-[55vh]"
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content absolute right-[5%] lg:right-[17%] text-center text-black">
                <div className="max-w-md">
                  <p className="text-3xl italic">Spa & Massage</p>
                  <h1 className="mb-5 lg:text-9xl text-black text-5xl font-bold">
                    Relaxation
                  </h1>

                  <a
                    href="#form"
                    class="inline-flex items-center rounded-lg font-semibold justify-center h-12 px-6 text-white"
                    style={{ background: "#cea314" }}
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Home;