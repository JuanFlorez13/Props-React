import React from 'react';
import  image  from '../../../Images/fantasy.jpg'
import './Image.css'; 


export const Image = () => {
  return(
      <div className='img_container'>
          <img src={ image } alt="homeimage"></img>
      </div>
  )
};
