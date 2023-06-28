import React, { useState } from 'react';
import pokemonImage from './media/image-1.jpg'; 
import grubhubImage from './media/image-2.jpg';
import teslaImage from './media/image-3.jpg';
import todoImage from './media/image-4.jpg';

const CardRender = () => {
  const [cardInfo, setCards] = useState([
    {
        id: 1,    
        image: pokemonImage,
        title: 'Pokemon',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
    {
        id: 2,
        image: grubhubImage,
        title: 'Grubhub',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
    {
        id: 3,
        image: teslaImage,
        title: 'Tesla',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
    {
        id: 4,
        image: todoImage,
        title: 'To Do List',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
    {
    id: 5,
    image: todoImage,
    title: 'To Do List',
    description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
    button: 'Visit Site'
      },
      {
        id: 5,
        image: todoImage,
        title: 'To Do List',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
    {
        id: 5,
        image: todoImage,
        title: 'To Do List',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
    {
        id: 5,
        image: todoImage,
        title: 'To Do List',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site'
    },
  ]);

  return (
    <div>
      <div className='card-container'>
        {cardInfo.map((card, index) => (
          <div className='card' key={index}>
            <div className='project-image'>
              <img src={card.image} alt={card.title} />
            </div>
            <div className='text'>
              <h3>
                <strong>{card.title}</strong>
              </h3>
              <p>{card.description}</p>
              <div className='project-button'>
                <button type='button'>{card.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRender;
