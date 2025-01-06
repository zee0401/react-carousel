/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCurrentRef = useRef();

  const intervalRef = useRef(0);

  function slideInfo() {
    const slideRef = slideCurrentRef.current;
    const slides = slideRef.children;
    const count = slides.length;

    return { slides, count };
  }

  function handleInterval() {
    const { slides } = slideInfo();

    slides[0].setAttribute("data-active", true);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const { count } = slideInfo();
        const newIndex = prev === count - 1 ? 0 : prev + 1;
        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });
        return newIndex;
      });
    }, 2000);
  }

  useEffect(() => {
    const { slides } = slideInfo();
    slides[0].setAttribute("data-active", true);

    handleInterval();
  }, []);

  function handlePrev() {
    clearInterval(intervalRef.current);
    const { slides, count } = slideInfo();

    const newIndex = currentSlide === 0 ? count - 1 : currentSlide - 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });
    setCurrentSlide(newIndex);
    handleInterval();
  }

  function handleNext() {
    clearInterval(intervalRef.current);
    const { slides, count } = slideInfo();
    const newIndex = currentSlide === count - 1 ? 0 : currentSlide + 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });
    handleInterval();

    setCurrentSlide(newIndex);
  }

  const handleStep = (newIndex) => () => {
    clearInterval(intervalRef.current);
    const { slides, count } = slideInfo();

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });
    handleInterval();
    setCurrentSlide(newIndex);
  };

  return (
    <div className="carousel">
      {currentSlide}
      <div ref={slideCurrentRef} className="box">
        {children}
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Prev</button>
        <div className="stepper">
          {Array.from(children).map((_, index) => {
            return (
              <button onClick={handleStep(index)} key={index} className="step">
                {index}
              </button>
            );
          })}
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
