import React, { useState, useReducer } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// svg
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import salesforce from '../images/salesforce.svg'

const emailkey = process.env.REACT_APP_EMAILJS;

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'first_name':
            return { ...state, first_name: action.value };
        case 'last_name':
            return { ...state, last_name: action.value };
        case 'email':
            return { ...state, email: action.value };
        case 'phone':
            return { ...state, phone: action.value };
        case 'message':
            return { ...state, message: action.value };
        default:
            throw new Error();
    }
}

const Contact = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const [showFormErr, setShowFormErr] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
    const [showCaptcha, setShowCaptcha] = useState(false);
    const { first_name, last_name, email, message } = formState;

    const submitFormAndShowCaptcha = (e) => {
        e.preventDefault();
        setShowCaptcha(true);
    };
    const sendEmail = (captchaValue) => {
        if (first_name === '' || last_name === '' || email === '' || message === '') {
            setShowFormErr(true);
            return;
        }

        const params = {
            ...formState,
            'g-recaptcha-response': captchaValue,
        };

        setFormSubmitted({ title: 'Sending message...', paragraph: '' });
        emailjs.send(
            'service_kxcln1j', 'template_m87egc9',
            params,
            emailkey
        )
            .then(({ status }) => {
                if (status === 200) {
                    setFormSubmitted({ title: 'Message has been sent', paragraph: 'Owen will be in contact with you soon.' });
                } else {
                    setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Owen either by phone (847-800-5666) or email(rothowen27@gmail.com).' });
                }
            }, () => {
                setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Owen either by phone (847-800-5666) or email(rothowen27@gmail.com).' });
            });
    };
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
                        {!showCaptcha ? (
                            <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" onSubmit={submitFormAndShowCaptcha}>
                                <div className="contact-form-grid">
                                    <div id="w-node-c502819a600a-e5692412"><label className="field-label">First name *</label><input type="text" className="w-input" maxlength="256" name="first_name" required
                                        onChange={(e) => dispatch({ type: 'first_name', value: e.target.value })}
                                    /></div>
                                    <div id="w-node-c502819a600e-e5692412"><label>Last name *</label><input type="text" className="w-input" maxlength="256" name="last_name" required
                                        onChange={(e) => dispatch({ type: 'last_name', value: e.target.value })}
                                    /></div>
                                    <div id="w-node-c502819a6012-e5692412"><label >Email *</label><input type="email" className="w-input" maxlength="256" name="email" required
                                        onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                                    /></div>
                                    <div id="w-node-c502819a6016-e5692412"><label>Phone number</label><input type="tel" className="w-input" maxlength="256" name="phone"
                                        onChange={(e) => dispatch({ type: 'phone', value: e.target.value })}
                                    /></div>
                                    <div id="w-node-c502819a601a-e5692412"><label >Message</label><textarea maxlength="5000" name="message" className="w-input" required
                                        onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                                    ></textarea></div>
                                </div>
                                {showFormErr ? <p className="sm:mr-4 text-red-400">Please fill in required input boxes to send a message</p> : null}
                                <input type="submit" value="Submit" className="btn-title btn-project w-button" />
                            </form>
                        ) : (<ReCAPTCHA
                            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                            onChange={sendEmail} />)}
                    </div>
                    <div className="error-box">
                        <h3 className="error-text">{formSubmitted.title}</h3>
                        <p>{formSubmitted.paragraph}</p>
                    </div>
                </div>
            </section>
            <Footer />
        </body>
    )
}

export default Contact
