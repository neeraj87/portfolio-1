import React from 'react'
import "./about.css";
import Truck from "../../img/truck.jpg"

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <div className="abt-card bg"></div>
                <div className="abt-card">
                    <img src={Truck} alt="" className="abt-img"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-me">About Me</h1>
                <p className="abt-sub">
                    Some text
                </p>
                <p className="abt-desc">
                    description
                </p>
            </div>
        </div>
    )
}

export default About
