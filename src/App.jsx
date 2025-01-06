import "./App.css";
import Carousel from "./components/carousel";

import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.jpg";

function App() {
  return (
    <>
      <div className="carousel">
        <Carousel>
          <img id="slideImg0" src={one} />
          <img id="slideImg1" src={two} />
          <img id="slideImg2" src={three} />
          <img id="slideImg3" src={four} />
          <img id="slideImg4" src={five} />
        </Carousel>
      </div>
    </>
  );
}

export default App;
