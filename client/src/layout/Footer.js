import React from 'react'
import { Link } from 'react-router-dom';
import colorlogo from '../images/Color-logo---no-background.svg';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="w-container">
                <div className="footer-flex-container">
                    <Link to="/" className="footer-logo-link w-inline-block"><img src={colorlogo} alt="" className="footer-image" /></Link>
                    <div>
                        <h2 className="footer-heading">Social Media</h2>
                        <ul className="w-list-unstyled">
                            <li>
                                <a href="https://www.linkedin.com/in/owen-roth-86ba1ba4/" className="footer-link">Linkedin</a>
                            </li>
                            <li>
                                <a href="https://github.com/oroth8" className="footer-link">Github</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/rothnaldo/" className="footer-link">Instagram</a>
                            </li>
                            <li>
                                <a href="https://trailblazer.me/id/owenroth" className="footer-link">Salesforce</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="footer-heading">Contract Work</h2>
                        <ul className="w-list-unstyled">
                            <li>
                                <a href="!#" className="footer-link">Upwork</a>
                            </li>
                            <li>
                                <a href="!#" className="footer-link">Fiver</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="footer-heading">Site Map</h2>
                        <ul className="w-list-unstyled">
                            <li>
                                <Link to="/" className="footer-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer-link">About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="footer-link">Portfolio</Link>
                                <Link to="/services" className="footer-link">Services</Link>
                                <Link to="/contact" className="footer-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-block">Copyright © 2020 Owen-Roth. All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer
