import React, { useEffect, useState } from 'react';
import './campaign_style.css';
import Loader from "react-js-loader";
import { firstCamImage_1, firstCamImage_2, firstCamImage_3, firstCamImage_4, firstCamImage_5, firstCamImage_6,
  secondCamImage_1, secondCamImage_2, secondCamImage_3, secondCamImage_4, secondCamImage_5, secondCamImage_6,
  secondCamImage_7, secondCamImage_8, secondCamImage_9, secondCamImage_10, secondCamImage_11, secondCamImage_12
   } from '../../utils/imageUrls.js';

   const firstCamImges = [firstCamImage_1, firstCamImage_2, firstCamImage_3, firstCamImage_4, firstCamImage_5, firstCamImage_6];
   const seondCamImges = [secondCamImage_1, secondCamImage_2, secondCamImage_3, secondCamImage_4, secondCamImage_5, secondCamImage_6,
  secondCamImage_7, secondCamImage_8, secondCamImage_9, secondCamImage_10, secondCamImage_11, secondCamImage_12];

const Campaign = () => {


  const [color, setColor] = useState('black');
  const [isLoading, setIsLoading] = useState(false);

    const [currentIndexFirst, setCurrentIndexFirst] = useState(0);
  
    const [currentIndexSecond, setCurrentIndexSecond] = useState(0);

  const goToNextSlide = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    if(e.currentTarget.id === '1'){
      const newIndex = (currentIndexFirst + 1) % firstCamImges.length;
      setCurrentIndexFirst(newIndex);
    } else if (e.currentTarget.id === '2') {
      const newIndex = (currentIndexSecond + 1) % seondCamImges.length;
      setCurrentIndexSecond(newIndex);
    }
    
  };

  const goToPrevSlide = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    if(e.currentTarget.id === '1'){
      const newIndex = (currentIndexFirst - 1 + firstCamImges.length) % firstCamImges.length;
      setCurrentIndexFirst(newIndex);
    } else if (e.currentTarget.id === '2') {
      const newIndex = (currentIndexSecond - 1 + seondCamImges.length) % seondCamImges.length;
      setCurrentIndexSecond(newIndex);
    }
    
  };


  // -----------------------------


  const [isReadMoreClicked1, setIsReadMoreClicked1] = useState(false);
  const [isReadMoreMessage1, setIsReadMoreMessage1] = useState('Read More');

  const [isReadMoreClicked2, setIsReadMoreClicked2] = useState(false);
  const [isReadMoreMessage2, setIsReadMoreMessage2] = useState('Read More');


    



    const handleClickReadMore = (e) => {
        
        if(e.target.id === '1'){
          if(isReadMoreMessage1 === 'Read More'){
            setIsReadMoreMessage1('Read Less');
          } else {
            setIsReadMoreMessage1('Read More');
          }
          
          setIsReadMoreClicked1(!isReadMoreClicked1);
        } else if(e.target.id === '2'){
          if(isReadMoreMessage2 === 'Read More'){
            setIsReadMoreMessage2('Read Less');
          } else {
            setIsReadMoreMessage2('Read More');
          }
          setIsReadMoreClicked2(!isReadMoreClicked2);
        }
      }
      


  return (


    <div className='campaign_master'>

<div id='campaigns-div' >

  <div  className='campaigns-div-container-1'>
    {/* <img style={{borderRadius:'10px'}} src={currentCamFirstImg} alt='img' /> <br/><br/> */}

    
      <img  style={{borderRadius:'5px', maxWidth : '95%'}} src={firstCamImges[currentIndexFirst]} alt={`Slide ${currentIndexFirst}`} />

      <br/><br/>

      <button disabled={isLoading} id='1' style={{border:'none', background : 'transparent', }} onClick={goToPrevSlide}>
        <i style={{fontSize: '20px'}} onClick={goToPrevSlide} class="fa-solid fa-chevron-left"></i></button>
        <span style={{marginLeft:'50px'}} >{currentIndexFirst+1}/{firstCamImges.length}</span>
      <button disabled={isLoading} id='1' style={{border:'none', background : 'transparent', marginLeft:'50px'}} onClick={goToNextSlide}><i style={{fontSize: '20px'}} class="fa-solid fa-chevron-right"></i></button>

   <p>
      Aprail 2023 MEENAS HEALTH CARE organized a Health Care Camp, offering vital services to the People. The event was a significant success, providing free medical check-ups, consultations, and health education to attendees. With a focus on preventive care, participants received screenings for common ailments, including diabetes and hypertension.
    </p>


    { isReadMoreClicked1 &&
    <p>  
        A team of dedicated healthcare professionals volunteered their time, ensuring that each attendee received personalized care and advice. Beyond medical services, the camp also emphasized the importance of a healthy lifestyle, offering guidance on nutrition and exercise.
        MEENAS HEALTH CARE commitment to community wellness was evident throughout the event. By providing accessible healthcare and promoting health education, the organization continues to make a positive impact on the lives of many. We look forward to more such initiatives in the future!
    </p>}
      
      <br/>
    <button id='1' onClick={handleClickReadMore} style={{width:'100px', height:'40px',  borderRadius:'8px', border: '2px solid #23dbde', backgroundColor:'transparent', color:'#23dbde'}} >{isReadMoreMessage1}</button>

  </div>

  

  <div  className='campaigns-div-container-2'>
  {/* <img style={{borderRadius:'10px'}} src={currentCamFirstImg} alt='img' />  */}

  

  <img  style={{borderRadius:'5px', maxWidth : '95%'}} src={seondCamImges[currentIndexSecond]} alt={`Slide ${currentIndexSecond}`} />

  <br/><br/>

  <button disabled={isLoading} id='2' style={{border:'none', background : 'transparent', }} onClick={goToPrevSlide}>
        <i style={{fontSize: '20px'}} onClick={goToPrevSlide} class="fa-solid fa-chevron-left"></i></button>
        <span style={{marginLeft:'50px'}} >{currentIndexSecond+1}/{seondCamImges.length}</span>
      <button disabled={isLoading} id='2' style={{border:'none', background : 'transparent', marginLeft:'50px'}} onClick={goToNextSlide}><i style={{fontSize: '20px'}} class="fa-solid fa-chevron-right"></i></button>
  
  
  <br/>
    <p>Meena's Health Care Hosts Health Camp for School Children.
      On 17 May 2023 Meena's Health Care organized a health camp aimed at school children, promoting the importance of well-being from a young age. The event was a great success, with enthusiastic participation from both students and teachers.
    </p>
      
    { isReadMoreClicked2 &&
       (  <div><p>
        The camp offered various health screenings, including vision and dental check-ups, ensuring early detection of any potential issues. Nutritional experts were also present to educate children about balanced diets and healthy eating habits.
      </p>  
      
      <p>
        Interactive sessions were held to raise awareness about the significance of regular exercise and mental well-being. Children actively participated in fun activities that highlighted the benefits of staying active and maintaining a positive mindset.
      </p>              
        
      <p>
        Overall, the health camp was a valuable initiative by Meena's Health Care, emphasizing preventive care and fostering a culture of health and wellness among school children.
      </p> </div>)
    }

  <br/>
    <button id='2' onClick={handleClickReadMore} style={{width:'100px', height:'40px',  borderRadius:'8px', border: '2px solid #23dbde', backgroundColor:'transparent', color:'#23dbde'}} >{isReadMoreMessage2}</button>


  </div>

  {isLoading && <div className="donate_component" >
            <Loader type="spinner-circle" bgColor={color} color={color}  size={100} />
        </div>}

</div>
    </div>
  )
}

export default Campaign
