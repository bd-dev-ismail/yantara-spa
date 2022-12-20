import AboutUs from "./Components/AboutUs/AboutUs";
import Appointment from "./Components/Appointment/Appointment";
import Discount from "./Components/Discount/Discount";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer/Offer";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
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
      <div id="reviews" className="my-10 container mx-auto">
        <Reviews />
      </div>
    </div>
  );
}

export default App;
