import React from "react";
import "../index.css";

export default function Card(props){
    return(
        <section className="whole">
        <div className="card">
            <img src={props.image} alt="location" className="cardimg" width="320px" height="180px"/>
            <div className="cardcontent">
                <div className="classheader">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="12px" fill="rgba(245, 90, 90, 1)" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <h3>{props.location}</h3>
                <a href={props.googlemaps}>View on Google Maps</a>
                </div>
                <h1 className="classtitle">{props.title}</h1>
                <h3 className="cardduration">{props.start} - {props.end}</h3>
                <h3 className="carddesc">{props.desc}</h3>
            </div>
        </div>
        <hr className="hl"/>
        </section>
    )
}