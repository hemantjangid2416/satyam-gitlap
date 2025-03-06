import React from 'react';
import './background_image_style.css';
import { background_image } from '../../utils/imageUrls';

const BackgroundImage = () => {
  return (
    <div className='bg_master'>

      <div className='bg_container'>
        <div className="gradient"></div>
      <img style={{maxWidth: '100%'}} src={background_image}  alt='' />
            
      </div>

    </div>
  )
}

export default BackgroundImage;