import React from 'react';

const Header = () => {
    return (
      <div className="mt-[5rem] grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          style={{ background: "#CFCED3" }}
          className="text-black lg:h-[90vh] h-[55vh] flex justify-center items-center text-center "
        >
          <div>
            <h3 className="text-3xl font-bold mb-5">Yantra Spa</h3>
            <p className='px-8'>
              Inspired by the sheen, transparency and ethereal whiteness of the
              Golconda Diamond, the therapy rooms and suites at the spa feature
              silver foil embossed doors and curved walls with padded diamond
              cut pearl white fabric. Aura spa brings to its guests a feeling of
              pure bliss. At Aura, pure essential oils blended with handpicked
              ingredients are used to purify and detox the body. Monthly
              Seasonal Menus, use of ergonomically designed massage beds,
              training of T'ai chi techniques to each therapist to learn to
              maintain right body posture while doing treatments further
              differentiate the brand from others in the industry. Aura has been
              awarded as the 'best new spa' at the Pevonia AsiaSpa Awards 2010.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 lg:h-[90vh] h-[55vh]">
          <h3>Hello</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            aliquid sapiente, et sit nobis reiciendis quisquam quis
            necessitatibus accusamus, quasi expedita consequatur est repellendus
            corporis suscipit magni id cumque laudantium, officiis error
            temporibus aspernatur. Maiores nam numquam, debitis rem eveniet
            molestiae totam. Dolore ipsam illum iste libero optio provident
            explicabo possimus esse modi, corporis iure minus quas amet
            reprehenderit laborum autem facere non minima, totam veritatis
            repellat consequatur? Ipsa, asperiores iure. Corrupti delectus animi
            veritatis vitae itaque id, accusantium eaque! Dolore, adipisci,
            vitae quia officia impedit doloremque corrupti rerum asperiores vero
            non optio aperiam a excepturi vel quos molestiae quibusdam.
          </p>
        </div>
      </div>
    );
};

export default Header;