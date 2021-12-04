import React from 'react'
import "./intro.css"
import Me from "../../img/me.JPG"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="greeting">Hello, My name is</h2>
                    <h1 className="name">Neeraj Jadhav</h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">Web Developer</div>
                            <div className="title-item">Backend Developer</div>
                            <div className="title-item">Dev-Ops</div>
                        </div>
                    </div>
                    <p className="description">
                    Software engineer with a primary focus on SaaS based web applications, Salesforce.com CRM and browsing Reddit (in my free time, of course).
                    I have worked as a full-stack developer creating custom CRM applications, API's and mobile apps as well as on integrations with marketing tools, cloud storage services, email services, data analytic tools.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="img-bg"></div>
                <img src={Me} alt="" className="intro-img" />
            </div>
        </div>
    )
}

export default Intro
