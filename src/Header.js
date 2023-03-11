import React from 'react';
import Hero from './media/hero.png';

const Header = () => {
return(
    <div className='hero d-flex justify-content-center'>
        <img src={Hero} alt="Yadi Inc. Hero" />  
    </div>
);
}


export default Header;