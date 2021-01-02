import React from 'react'
import emailjs from 'emailjs-com';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// svg
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import salesforce from '../images/salesforce.svg'

const emailkey = process.env.REACT_APP_EMAILJS;

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kxcln1j', 'template_m87egc9', e.target, emailkey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <body className="body-5">
            <Navbar />
            <section id="contact-form" className="contact-form">
                <div className="form-svg-div">
                    <a href='https://github.com/oroth8' target="_blank" rel="noopener noreferrer">
                        <img src={github} loading="lazy" alt="github" className="form-svg" />
                    </a>
                    <a href='https://www.linkedin.com/in/owen-roth-86ba1ba4/' target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} loading="lazy" alt="linkedin" className="form-svg" />
                    </a>
                    <a href='https://www.instagram.com/rothnaldo/' target="_blank" rel="noopener noreferrer">
                        <img src={instagram} loading="lazy" alt="instagram" className="form-svg" />
                    </a>
                    <a href="https://trailblazer.me/id/owenroth" target="_blank" rel="noopener noreferrer">
                        <img src={salesforce} loading="lazy" alt="salesforce" className="form-svg" />
                    </a>
                </div>
                <div className="field-label w-container">
                    <h2 className="form-title">CONTACT FORM</h2>
                    <p className="form-paragraph">Feel free to contact me about any job inquiries, services information, or contract work.</p>
                    <div id="formInstructions" classNameName="small-text"><em>Fields marked with an asterisk (*) are required.</em></div>
                    <div className="w-form">
                        <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" onSubmit={sendEmail}>
                            <div className="contact-form-grid">
                                <div id="w-node-c502819a600a-e5692412"><label className="field-label">First name *</label><input type="text" className="w-input" maxlength="256" name="first_name" required /></div>
                                <div id="w-node-c502819a600e-e5692412"><label>Last name *</label><input type="text" className="w-input" maxlength="256" name="last_name" required /></div>
                                <div id="w-node-c502819a6012-e5692412"><label >Email *</label><input type="email" className="w-input" maxlength="256" name="email" required /></div>
                                <div id="w-node-c502819a6016-e5692412"><label>Phone number</label><input type="tel" className="w-input" maxlength="256" name="phone" /></div>
                                <div id="w-node-c502819a601a-e5692412"><label >Message</label><textarea maxlength="5000" name="message" className="w-input"></textarea></div>
                            </div><input type="submit" value="Submit" className="btn-title btn-project w-button" />
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </body>
    )
}

export default Contact
