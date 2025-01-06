/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCurrentRef = useRef();

  useEffect(() => {
    setInterval(() => {
      setCurrentSlide((prev) => {
        // slideRef.style.opacity = 1;
        const slideRef = slideCurrentRef.current;
        console.log(slideRef.children);
        const count = slideRef.children.length;

        const newIndex = prev === count ? 0 : prev + 1;
        return newIndex;
      });
    }, 1000);
  }, []);

  return (
    <div className="carousel">
      {currentSlide}
      <div ref={slideCurrentRef} className="box">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
