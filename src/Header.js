import React from 'react';
import Hero from './media/hero.png';

const Header = () => {
return(
    <div className='hero'>
        <img src={Hero} alt="Yadi Inc. Hero" />  
    </div>
);
}


export default Header;