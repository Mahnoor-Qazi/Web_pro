import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const images = [
  "https://media.gettyimages.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=",
  "https://media.gettyimages.com/id/1294141286/photo/modern-style-bedroom.jpg?s=612x612&w=0&k=20&c=wz0WqZMlW6p6BYiM5y-RXbudLpHnqQ9Dp8WiRjJxLGk=",
  "https://media.istockphoto.com/id/1184204517/photo/modern-scandinavian-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=VRyl-G4KHJv59OG1jAgQ7De0B-ktykQCpxY2yIwJPT0=",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 

  const prevSlideHandler = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlideHandler = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      
      <div
      
        className="wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        
        {images.map((i) => (
          <div className="slide">
            <img src={i} />
            
          </div>
        ))}
        
      </div>
      
      <div className="arrows">
        <ArrowBackIcon className="arrow" onClick={prevSlideHandler} />
        <ArrowForwardIcon className="arrow" onClick={nextSlideHandler} />
      </div>
      
    </div>
  );
};

export default Slider