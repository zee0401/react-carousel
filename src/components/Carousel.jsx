/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCurrentRef = useRef();

  const intervalRef = useRef(0);

  function handleInterval() {
    const slideRef = slideCurrentRef.current;
    const slides = slideRef.children;
    slides[0].setAttribute("data-active", true);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const count = slides.length;
        const newIndex = prev === count - 1 ? 0 : prev + 1;
        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });
        return newIndex;
      });
    }, 2000);
  }

  useEffect(() => {
    const slideRef = slideCurrentRef.current;
    const slides = slideRef.children;
    slides[0].setAttribute("data-active", true);

    handleInterval();
  }, []);

  function handlePrev() {}

  function handleNext() {
    clearInterval(intervalRef.current);
    const slideRef = slideCurrentRef.current;
    const slides = slideRef.children;
    const count = slides.length;

    const newIndex = currentSlide === count - 1 ? 0 : currentSlide + 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });
    handleInterval();

    setCurrentSlide(newIndex);
  }

  return (
    <div className="carousel">
      {currentSlide}
      <div ref={slideCurrentRef} className="box">
        {children}
      </div>

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
