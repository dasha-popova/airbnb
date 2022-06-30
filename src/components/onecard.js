import React from "react";
import Star from "../images/star.png"


export default function OneCard(props) {
    return (
        <div className="card">
            <img  src={`../images/${props.image}`} className="card--image" alt="IDK" />
            <div className="card--stats">
                <img alt="star" className="card--star" src={Star} />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            {props.about && <p>{props.about}</p>}
            <p><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )}