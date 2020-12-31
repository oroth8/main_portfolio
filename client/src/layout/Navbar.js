import React from 'react'
import { Link } from 'react-router-dom';
import whitelogo from '../images/White-logo---no-background.svg';

const Navbar = () => {
    return (
        <nav>
            <ul role="list" className="nav-grid w-list-unstyled">
                <li id="w-node-5b248a8b462d-4d5e9b9b">
                    <Link to='/' className="nav-logo-link w-inline-block"><img src={whitelogo} width="12" alt="logo" className="nav-logo" /></Link>
                </li>
                <li>
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to='/about' className="nav-link">About</Link>
                </li>
                <li>
                    <Link to='/portfolio' className="nav-link">Portfolio</Link>
                </li>
                <li>
                    <Link to='/services' className="nav-link">Services</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link btn">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
