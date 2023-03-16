
import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({_id, name, prompt, photo}) => {

  

  return (
    <>
      <div className='featuredImg'>
        <div>
          <img src={photo} alt="" />
        </div>
        <div className='featuredImg_prompt'>
          <h2>{prompt}</h2>
        </div>
      </div>

 
    </>
  )
}

export default Card;
