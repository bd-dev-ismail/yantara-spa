import React from 'react';

const Map = () => {
    return (
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h2 className=" text-center font-sans text-3xl  font-bold tracking-tight  sm:text-5xl sm:leading-none">
            Find <span className="golden-color">Us</span>
          </h2>
        </div>
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2113898312905!2d78.48318711537064!3d17.40164010697297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9939e9091263%3A0x9757046f5141c6f4!2sYantra%20Spa!5e0!3m2!1sen!2sbd!4v1671522573740!5m2!1sen!2sbd"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
};

export default Map;