import ReactWhatsapp from "react-whatsapp";
import AboutUs from "./Components/AboutUs/AboutUs";
import Appointment from "./Components/Appointment/Appointment";
import Discount from "./Components/Discount/Discount";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Map from "./Components/Map/Map";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer/Offer";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import { RiWhatsappFill } from "react-icons/ri";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="relative">
      <div className=" fixed top-[90%] right-5 z-50">
        <ReactWhatsapp
          number="+880 1833201582"
          message="I am Interested in Yantra-Spa Services!!!"
        >
          <RiWhatsappFill title="Direct Message" className="text-[#25D366] text-6xl" />
        </ReactWhatsapp>
      </div>
      <Navbar />
      <div id="home">
        {/* <Home /> */}
        <Header />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services" className="my-5">
        <Services />
      </div>
      <div className="my-5">
        <Offer />
      </div>
      <div id="form" className="mb-10">
        <Appointment />
      </div>
      <div id="offer" className="my-10">
        <Discount />
      </div>

      <div
        id="reviews"
        className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <Reviews />
      </div>

      <div className="my-10">
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default App;
