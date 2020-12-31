import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <Fragment>
            <body className="body-7">
                <Navbar />
                <header id="hero-overlay" className="hero-overlay-2">
                    <div className="centered-container w-container">
                        <h1 className="heading-8">OWEN ROTH</h1>
                        <h1 className="heading-10">NAVY VETERAN | WEB DEVELOPER | SALESFORCE ADMIN</h1>
                        <p>Let me help you engineer your vision. Whether it&#x27;s a personal portfolio, restaurant application, or database creation I can help you technically build out your goals. I create custom, tailored solutions for your personal or business needs. </p>
                        <div>
                            <Link to='/about' className="btn-title btn-title-right w-button">About Me</Link>
                        </div>
                    </div>
                </header>
                <Footer />
            </body>
        </Fragment>
    )
}

export default Home
