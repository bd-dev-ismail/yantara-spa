import AboutUs from "./Components/AboutUs/AboutUs";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
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
        <Services/>
      </div>
    </div>
  );
}

export default App;
