/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCurrentRef = useRef();

  useEffect(() => {
    const slideRef = slideCurrentRef.current;
    const slides = slideRef.children;
    slides[0].setAttribute("data-active", true);

    setInterval(() => {
      setCurrentSlide((prev) => {
        // slideRef.style.opacity = 1;

        const count = slides.length;

        const newIndex = prev === count - 1 ? 0 : prev + 1;

        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });

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
