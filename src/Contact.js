import React from 'react';
import linkedin from './media/liLogo.png'
import email from './media/emailLogo.png'
import resume from './media/cvLogo.png'


const Contact = () => {
    return(
        <div>
        <div className='contact-logo'>
                <img src={linkedin} alt="logo" />
                <img src={email} alt="logo" />
                <img src={resume} alt="logo" />
        </div>
        </div>

    )
}

export default Contact;