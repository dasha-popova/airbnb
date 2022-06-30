import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero"
import Card from "./components/card"

export default function App() {
    return (
        <div className="container">
           <NavBar />
           <Hero/>
           <Card/>
        </div>)
}
