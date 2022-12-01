import React from "react";
import "./cssfiles/card.css";


function Card(props){
    return (
        <div className="card">
            <h1 className="title">
                {props.title}
            </h1>
        </div>
    );
}

export default Card;