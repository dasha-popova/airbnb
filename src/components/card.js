import React from "react";
import OneCard from "./onecard";

export default function Card() {
    return (
        <div className="cards--div">
            <OneCard
                image="Group77.png"
                about="Life Lessons with Katie Zaferes"
                price={136}
            />
            <OneCard
                image="image12.png"
                about="something pretty here"
                price={1} />
            <OneCard
                image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price={2} />
            <OneCard
                image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price={1.99} />
            <OneCard image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price={485} />
            <OneCard
                image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price={152} />
            <OneCard
                image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price={586} />
            <OneCard
                image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price="From $136" />
            <OneCard
                image="image12.png"
                about="Life Lessons with Katie Zaferes"
                price="From $136" />
        </div>
    )
}