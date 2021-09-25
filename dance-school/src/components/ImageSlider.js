import React, { useState } from "react";
import images from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider-container">
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      {images.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={index === currentSlide ? "slide-active" : "slide"}
          >
            {index === currentSlide && (
              <img
                className="slide-image"
                src={slide.image}
                alt="dance"
                key={slide.id}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
