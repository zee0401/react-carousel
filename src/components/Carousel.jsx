import React from "react";

const Carousel = ({ children }) => {
  return (
    <div className="carousel">
      <div className="box">{children}</div>
    </div>
  );
};

export default Carousel;
