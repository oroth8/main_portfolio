import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import whitelogo from '../images/White-logo---no-background.svg';

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-grid w-list-unstyled">
                <li id="w-node-5b248a8b462d-4d5e9b9b">
                    <Link to='/' className="nav-logo-link w-inline-block"><motion.img whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} src={whitelogo} width="12" alt="logo" className="nav-logo" /></Link>
                </li>
                <motion.li whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link to='/' className="nav-link">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link to='/about' className="nav-link">About</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link to='/portfolio' className="nav-link">Portfolio</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link to='/services' className="nav-link">Services</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link to="/contact" className="nav-link btn">Contact</Link>
                </motion.li>
            </ul>
        </nav>
    )
}

export default Navbar
