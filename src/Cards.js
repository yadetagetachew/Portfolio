import React, { useState } from 'react';
// import todoImage from './media/image-4.jpg';
import convert from './media/convert.jpeg';
import nomnom from './media/nomnom.png';
import motivation from './media/motivation.jpeg';
import carousel from './media/carousel.png';
import supersonicmeow from './media/supersonicmeow.png';
import todolist from './media/todolist.jpeg';
import pokemon from './media/pokemon.png';


const CardRender = () => {
  const [cardInfo, setCards] = useState([
    {
        id: 1,    
        image: motivation,
        title: 'Quote Generator',
        description: 'Random motivation quote generator.',
        button: 'Visit Site',
        link: 'https://frabjous-elf-d64314.netlify.app/'
    },
    {
        id: 2,
        image: nomnom,
        title: 'NomNom',
        description: 'Online food ordering site. ',
        button: 'Visit Site',
        link: 'https://splendid-palmier-68e3f8.netlify.app/'
    },
    {
        id: 3,
        image: convert,
        title: 'Miles to Kilometers',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site',
        link: 'https://yadetagetachew.github.io/Miles-to-Kilometers/'
    },
    {
        id: 4,
        image: carousel,
        title: 'Carosel',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site',
        link: 'https://hilarious-hamster-fbc2a5.netlify.app/'
    },
    {
      id: 5,
      image: supersonicmeow,
      title: 'Super Sonic Meow',
      description: 'Haloween game',
      button: 'Visit Site',
      link: 'https://supersonicmeow.com/'
      },
      {
        id: 6,
        image: todolist,
        title: 'To Do List',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site',
        link: 'https://6493d5e706a50b1c6bd18fb4--astonishing-pie-3949db.netlify.app/'
    },
    {
        id: 7,
        image: pokemon,
        title: 'Pokemon',
        description: 'lorem anfu isddhdbck eicbe ckj oisdnc ec clodscjoidcj sdklcjcjmc .',
        button: 'Visit Site',
        link: 'https://6493d5e706a50b1c6bd18fb4--astonishing-pie-3949db.netlify.app/'
    }
  ]);

  return (
    <div>
      <div className='card-container'>
        {cardInfo.map((card) => (
          <div className='card' key={card.id}>
            <div className='project-image'>
              <img src={card.image} alt={card.title} />
            </div>
            <div className='text'>
              <h3>
                <strong>{card.title}</strong>
              </h3>
              <p>{card.description}</p>
              <div className='project-button'>
              <a href={card.link} target='_blank' rel="noreferrer" role="button">
                <button type='button'>{card.button}</button>
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRender;
