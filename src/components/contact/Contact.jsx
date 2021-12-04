import React, { useRef, useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setDone(true)
    }
    return (
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's talk</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> +91 1234567
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> n@email.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" /> Pune, MH
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch</b> kjshdfk sldfhsf sldflksf sdjfsdjflksd
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thanks...."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
