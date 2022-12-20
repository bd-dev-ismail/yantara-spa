import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const Reviews = () => {
    return (
      <div>
        <div className="text-center my-10">
          <h2 className=" text-center font-sans text-3xl golden-color font-bold tracking-tight  sm:text-5xl sm:leading-none">
            Reviews
          </h2>
        </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="container flex flex-col w-full max-w-lg p-6 bg-white text-black mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://i.pinimg.com/originals/fe/e7/66/fee7663882fed32050f0f5f1249d19cd.jpg"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Md Ismail Hossen</h4>
                        <span className="text-xs dark:text-gray-400">
                          1 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 golden-color dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold golden-color">
                        4.5
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                      Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                    <p>
                      Donec eget ultricies diam, eu molestie arcu. Etiam nec
                      lacus eu mauris cursus venenatis. Maecenas gravida urna
                      vitae accumsan feugiat. Vestibulum commodo, ante sit urna
                      purus rutrum sem.
                    </p>
                  </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 bg-white text-black mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://i.pinimg.com/736x/41/66/26/416626af3428f523bcde82a8822b7f69.jpg"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Kanneganti Madhulika</h4>
                        <span className="text-xs dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 golden-color dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold golden-color">
                        4.5
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                      Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                    <p>
                      Donec eget ultricies diam, eu molestie arcu. Etiam nec
                      lacus eu mauris cursus venenatis. Maecenas gravida urna
                      vitae accumsan feugiat. Vestibulum commodo, ante sit urna
                      purus rutrum sem.
                    </p>
                  </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 bg-white text-black mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Madhavi Kulkarni</h4>
                        <span className="text-xs dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 golden-color dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold golden-color">
                        4.5
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                      Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                    <p>
                      Donec eget ultricies diam, eu molestie arcu. Etiam nec
                      lacus eu mauris cursus venenatis. Maecenas gravida urna
                      vitae accumsan feugiat. Vestibulum commodo, ante sit urna
                      purus rutrum sem.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="container flex flex-col w-full max-w-lg p-6 bg-white text-black mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://i.pinimg.com/originals/fe/e7/66/fee7663882fed32050f0f5f1249d19cd.jpg"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Md Ismail Hossen</h4>
                        <span className="text-xs dark:text-gray-400">
                          1 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 golden-color dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold golden-color">
                        4.5
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                      Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                    <p>
                      Donec eget ultricies diam, eu molestie arcu. Etiam nec
                      lacus eu mauris cursus venenatis. Maecenas gravida urna
                      vitae accumsan feugiat. Vestibulum commodo, ante sit urna
                      purus rutrum sem.
                    </p>
                  </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 bg-white text-black mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://i.pinimg.com/736x/41/66/26/416626af3428f523bcde82a8822b7f69.jpg"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Kanneganti Madhulika</h4>
                        <span className="text-xs dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 golden-color dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold golden-color">
                        4.5
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                      Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                    <p>
                      Donec eget ultricies diam, eu molestie arcu. Etiam nec
                      lacus eu mauris cursus venenatis. Maecenas gravida urna
                      vitae accumsan feugiat. Vestibulum commodo, ante sit urna
                      purus rutrum sem.
                    </p>
                  </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 bg-white text-black mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Madhavi Kulkarni</h4>
                        <span className="text-xs dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 golden-color dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold golden-color">
                        4.5
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                      Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                    <p>
                      Donec eget ultricies diam, eu molestie arcu. Etiam nec
                      lacus eu mauris cursus venenatis. Maecenas gravida urna
                      vitae accumsan feugiat. Vestibulum commodo, ante sit urna
                      purus rutrum sem.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Reviews;