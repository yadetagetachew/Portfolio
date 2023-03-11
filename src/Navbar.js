import React from "react";
import Logo from "./media/yg-logo.gif";

const Navbar = () => {
    return(               
        <div class="topnav">
            <img src={Logo} alt="Yadi Inc. logo" />  
            <div class="topnav-right">
                <a href="#about">About</a>
                <a href="#project">Project</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;