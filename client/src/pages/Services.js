import React from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// svgs
// ----webdev
import frontend from '../images/front-end.svg'
import fullstack from '../images/fullstack.svg'
import backend from '../images/backend.svg'


const Services = () => {
    return (
        <body>
            <Navbar />
            <div className="header-container">
                <h1 className="h1-base">SERVICES</h1>
                <div className="p-base">first 30 day absolutly <span className="text-span">free</span> for any plan, no credit card requiered to get started</div>
                <div className="pricing-switch-block">
                    <div className="pricing-switch-block-text">Web Development</div>
                    <div className="switch-block">
                        <div data-w-id="30a0ebcb-e139-61f3-c401-17293a48bba7" className="off">
                            <div data-w-id="30a0ebcb-e139-61f3-c401-17293a48bba8" className="div-block-6"></div>
                        </div>
                        <div data-w-id="30a0ebcb-e139-61f3-c401-17293a48bba9" className="on"></div>
                    </div>
                    <div className="pricing-switch-block-text">Salesforce</div>
                </div>
                <div className="pricing-row">
                    <div className="pricing-second-block"><img src={frontend} alt="frontend" className="pkg-img" />
                        <div className="pricing-box">
                            <h2 className="pkg-name">Web Design</h2>
                            <div className="pkg-description"><span className="text-span">20GB</span> Storage<br /><span className="text-span">100GB</span> Bandwidth<br />Design Manager<br />Cookies</div>
                            <a href="!#" className="pkg-link">Get Started</a>
                        </div>
                    </div>
                    <div className="pricing-second-block middle"><img src={fullstack} alt="fullstack" className="pkg-img" />
                        <div className="pricing-box bottom-round-corner">
                            <h2 className="pkg-name">Full-Stack Dev</h2>
                            <div className="pkg-description"><span className="text-span">1000GB</span> Storage<br /><span className="text-span">500GB</span> Bandwidth<br />Design Manager<br />Collaborative Tools<br />Cookies</div>
                        </div>
                        <a href="!#" className="bottom-btn w-inline-block">
                            <div className="bottom-btn__link">Get Started</div>
                        </a>
                    </div>
                    <div className="pricing-second-block"><img src={backend} alt="backend" className="pkg-img" />
                        <div className="pricing-box">
                            <h2 className="pkg-name">Back-End</h2>
                            <div className="pkg-description"><span className="text-span">Unlimited</span> Storage<br /><span className="text-span">Unlimited</span> Bandwidth<br />Design Manager<br />Collaborative Tools<br />A lots of Cookies</div>
                            <a href="!#" className="pkg-link">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    )
}

export default Services
