import React from 'react';
import './team_style.css';
import { team_meena_kumari, team_virendra_kumar, team_devanshu, team_satyam } from '../../utils/imageUrls.js';

const Team = () => {
  return (
    <div className='master' >
        <div id='team-div' >
          <div id='team-div-container'>
            <h5>Dr. Meena Kumari (President)</h5> <br/>
            <img id='team-img' src={team_meena_kumari} alt='img' />
          </div>
          <div id='team-div-container'>
            <h5>Dr. Virendra Kumar Nirala (Trustee)</h5> <br/>
            <img id='team-img' src={team_virendra_kumar} alt='img' />
          </div>
        </div>
        
        

        <div id='team-div' >
          <div id='team-div-container'>
            <h5>Mr. Devanshu Kumar (Academic Instructor)</h5> <br/>
            <img id='team-img' src={team_devanshu} alt='img' />
          </div>
          <div id='team-div-container'>
          <h5> Mr. Satyam Raj (Trustee)</h5> <br/>
          <img id='team-img' src={team_satyam} alt='img' />
          </div>
        </div>
    </div>
  )
}

export default Team;