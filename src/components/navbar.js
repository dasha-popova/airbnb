import React from "react";
import AirbnbLogo from "../images/Vector.png"

export default function NavBar(){
    return(
        <nav>
        <img className="NavBarLogo" alt="airBnb logo" src={AirbnbLogo}  />
        </nav>)
}
