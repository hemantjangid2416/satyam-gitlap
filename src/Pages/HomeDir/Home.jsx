import React, { useEffect, useState } from 'react';
import './home_style.css';
import Team from '../TeamDir/Team';
import Campaign from '../../Component/CampaignDir/Campaign';
import WhatWeDo from '../../Component/WhatWeDoDir/WhatWeDo';
import Carousel from '../../Component/CarouselDir/Carousel';
import OurTeam from '../../Component/TeamComponentDir/OurTeam';
import BackgroundImage from '../../Component/BackgroundImageDir/BackgroundImage';


const Home = () => {

  return (
    <div className='home-main'>
      <div className='home-content'>
        <div className='image-container'>
        {/* <img src={backgroundImage} alt='poster' /> */}
        </div>
      </div>


      <BackgroundImage />

      <br/><br/>

       <h1 >What We Do</h1> <br/>
      <WhatWeDo />

      <br/><br/>

      
      <h1 >Campaign</h1> <br/>
      <Campaign />

      <br/><br/>

      
        <h1>Our Team</h1> <br/>
        <OurTeam />
      

      
      
      <br/><br/> 


    </div>
  )
}

export default Home;