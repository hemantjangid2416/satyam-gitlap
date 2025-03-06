import React from 'react';
import './our_team_style.css';
import { team_meena_kumari, team_virendra_kumar, team_devanshu, team_satyam } from '../../utils/imageUrls';

const OurTeam = () => {
  return (
    
      <div className='container'>
        <div id='one'>
            <img id='team__img' src={team_meena_kumari} alt='img' />
            <p className='team_name' >Dr. Meena Kumari (President)</p>
        </div>
        <div id='two'>
            <img id='team__img' src={team_virendra_kumar} alt='img' />
            <p className='team_name' >Dr. Virendra Kumar Nirala (Trustee)</p>
        </div>
        <div id='third'>
            <img id='team__img' src={team_satyam} alt='img' />
            <p className='team_name' >Mr. Satyam Raj (Trustee)</p>
            
        </div>
        <div id='forth'>
            <img id='team__img' src={team_devanshu} alt='img' />
            <p className='team_name' >Mr. Devanshu Kumar (Academic Instructor)</p>
        </div>
      </div>
    
  )
}

export default OurTeam;