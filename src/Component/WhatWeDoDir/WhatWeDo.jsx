import React from 'react';
import './what_we_do_style.css';
import { men_logo, health_logo, foot_logo, Education_logo } from '../../utils/imageUrls.js';

const WhatWeDo = () => {
  return (
    <div className='what_we_do_master'>
      <div className='main_container_we_do' >
          <div className='what-do-div' >

            <div className='what-do-div-container'>

              <div>
                <div>
                <img  src={Education_logo} alt='logo' />
                </div>
                <div>
                <h4>Free Education to All</h4>
                </div>
              </div>

              <p>Our team know the challenges faced by young children especially in slum communities and rural areas, including the threat of drug addiction. Through our efforts, we have provided help and awareness to children struggling with drug addiction, guiding them towards rehabilitation and offering employment opportunities to support their journey to recovery.</p>
            </div>
            <div className='what-do-div-container'>

              <div>
                <div>
                    <img src={health_logo} alt='logo' />
                </div>
                <div>
                    <h4>Medical Relief</h4>
                </div>
              </div>

              <p>Under this effort we offers medical treatments like free checkups, specialized consultations, and give help to beggars, underprivileged people in the rural and urban areas etc. We also organize medical camps and Phone call facilities , especially in remote areas, and conduct awareness programs on disease prevention and hygiene.</p>
            </div>
          </div>
          
          <br/>

          <div className='what-do-div' >
            <div className='what-do-div-container'>


              <div>
                <div>
                    <img src={men_logo} alt='logo' />
                </div>
                <div>
                    <h4>Employments</h4>
                </div>
              </div>


              <p>We are offering job opportunities and training programs to individuals who is unemployed.By providing employment, we empower individuals to earn a livelihood with dignity and help break the cycle of poverty and dependency.</p>
            </div>
            <div className='what-do-div-container'>



              <div>
                <div>
                    <img src={foot_logo} alt='logo' />
                </div>
                <div>
                    <h4>Take Care of Stray Animals</h4>
                </div>
              </div>


            <p>Stray animals are a responsibility so our team making a effort to provide medical care, food and etc. for all the stray animals who is abandoned by his owner, who has no one to take care of him or who is beaten by people without any reason.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WhatWeDo
