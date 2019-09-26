import React from "react";
import logo from '../images/logo.png';
function NavBar(){
return(
    <header>
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image" />
          <ul>
            <li>Why Github</li>
            <li>Enterprice Explore</li>
            <li>Marketing pricing</li>
          </ul>
        </div>
        <div className="head-content">
          <input type="text" className="seacrh" placeholder="seacrh on github"></input>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </header>
 );
}
export default NavBar;