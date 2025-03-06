import React, { useState } from 'react';
import { firstCamImage_1, firstCamImage_2, firstCamImage_3, firstCamImage_4, firstCamImage_5, firstCamImage_6,
} from './utils/imageUrls';

const firstCamImges = [firstCamImage_1, firstCamImage_2, firstCamImage_3, firstCamImage_4, firstCamImage_5, firstCamImage_6];


const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % firstCamImges.length;
    setCurrentImageIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + firstCamImges.length) % firstCamImges.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Prev</button>
      <img src={firstCamImges[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
