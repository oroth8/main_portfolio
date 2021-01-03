import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { motion } from 'framer-motion';
import { titleAnim, buttonAnim, pageAnimation, fade } from '../Animation';

const Home = () => {
    return (
        <motion.div variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit">
            <div className="body-7">
                <Navbar />
                <header id="hero-overlay" className="hero-overlay-2">
                    <div className="centered-container w-container">
                        <motion.h1 variants={titleAnim} initial="hidden"
                            animate="show" className="heading-8">OWEN ROTH</motion.h1>
                        <motion.h1 variants={titleAnim} initial="hidden"
                            animate="show" className="heading-10">NAVY VETERAN | WEB DEVELOPER | SALESFORCE ADMIN</motion.h1>
                        <motion.p variants={fade} initial="hidden"
                            animate="show">Let me help you engineer your vision. Whether it&#x27;s a personal portfolio, restaurant application, or database creation I can help you technically build out your goals. I create custom, tailored solutions for your personal or business needs. </motion.p>
                        <motion.div variants={buttonAnim} initial="hidden"
                            animate="show" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <Link to='/about' className="btn-title btn-title-right w-button">About Me</Link>
                        </motion.div>
                    </div>
                </header>
                <Footer />
            </div>
        </motion.div>
    )
}



export default Home
