import React from "react";
import HeroPhotos from "../images/Group77.png"

export default function NavBar(){
    return(
        <section className="hero">
        <img className="hero--photo" alt="group " src={HeroPhotos}  />
        <h1 className="hero--text">Online Experiences</h1>
        <p className="hero--discription">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>)
}
