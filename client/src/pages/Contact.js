import React from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// svg
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import salesforce from '../images/salesforce.svg'

const Contact = () => {
    return (
        <body class="body-5">
            <Navbar />
            <section id="contact-form" class="contact-form">
                <div class="form-svg-div">
                    <a href='https://github.com/oroth8' target="_blank" rel="noopener noreferrer">
                        <img src={github} loading="lazy" alt="github" class="form-svg" />
                    </a>
                    <a href='https://www.linkedin.com/in/owen-roth-86ba1ba4/' target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} loading="lazy" alt="linkedin" class="form-svg" />
                    </a>
                    <a href='https://www.instagram.com/rothnaldo/' target="_blank" rel="noopener noreferrer">
                        <img src={instagram} loading="lazy" alt="instagram" class="form-svg" />
                    </a>
                    <a href="https://trailblazer.me/id/owenroth" target="_blank" rel="noopener noreferrer">
                        <img src={salesforce} loading="lazy" alt="salesforce" class="form-svg" />
                    </a>
                </div>
                <div class="field-label w-container">
                    <h2 class="form-title">CONTACT FORM</h2>
                    <p class="form-paragraph">Feel free to contact me about any job inquiries, services information, or contract work.</p>
                    <div id="formInstructions" class="small-text"><em>Fields marked with an asterisk (*) are required.</em></div>
                    <div class="w-form">
                        <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form">
                            <div class="contact-form-grid">
                                <div id="w-node-c502819a600a-e5692412"><label for="First-Name" id="contact-first-name" class="field-label">First name *</label><input type="text" class="w-input" maxlength="256" name="First-Name" data-name="First Name" id="First-Name" required="" /></div>
                                <div id="w-node-c502819a600e-e5692412"><label for="Last-Name" id="contact-last-name">Last name *</label><input type="text" class="w-input" maxlength="256" name="Last-Name" data-name="Last Name" id="Last-Name" required="" /></div>
                                <div id="w-node-c502819a6012-e5692412"><label for="Email" id="contact-email">Email *</label><input type="email" class="w-input" maxlength="256" name="Email" data-name="Email" id="Email" required="" /></div>
                                <div id="w-node-c502819a6016-e5692412"><label for="Contact-Phone-Number" id="contact-phone">Phone number</label><input type="tel" class="w-input" maxlength="256" name="Contact-Phone-Number" data-name="Contact Phone Number" id="Contact-Phone-Number" /></div>
                                <div id="w-node-c502819a601a-e5692412"><label for="Message" id="contact-message">Message</label><textarea data-name="Message" maxlength="5000" id="Message" name="Message" class="w-input"></textarea></div>
                            </div><input type="submit" value="Submit" data-wait="Please wait..." class="btn-title btn-project w-button" />
                        </form>
                        <div class="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div class="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </body>
    )
}

export default Contact
