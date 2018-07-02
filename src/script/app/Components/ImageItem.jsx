import React from 'react';

export const ImageItem = (props) => {
    return (
      <li className='grid__item'>
          <img src={props.url} className='grid__img'/>
      </li>
    );
}