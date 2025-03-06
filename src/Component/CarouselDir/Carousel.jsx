import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './carousel_style.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import { team_meena_kumari, team_virendra_kumar, team_devanshu, team_satyam } from '../../utils/imageUrls';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="carousel_item" data-value="1">
    <img height='180px' src={team_meena_kumari} alt='img' />
  </div>,
  <div className="carousel_item" data-value="2">
    <img height='180px' src={team_virendra_kumar} alt='img' />
  </div>,
  <div className="carousel_item" data-value="3">
    <img height='180px' src={team_satyam} alt='img' />
  </div>,
  // <div className="carousel_item" data-value="4">
  //   <img height='180px' src={team_devanshu} alt='img' />
  // </div>,
 
];

const onSlideChange = (e) => {
  console.debug(`onSlideChange => Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
  console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
};



const Carousel = () => {
  return (
    <div className='carousel_master'>
      <div className='carousel_container'>
        <AliceCarousel
          mouseTracking
          keyboardNavigation
          items={items}
          responsive={responsive}
          onSlideChange={onSlideChange}
          onSlideChanged={onSlideChanged}
        />
      </div>
    </div>
  )
}

export default Carousel;