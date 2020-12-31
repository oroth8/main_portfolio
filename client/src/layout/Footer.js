import React from 'react'
import colorlogo from '../images/Color-logo---no-background.svg';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="w-container">
                <div className="footer-flex-container">
                    <a href="#" className="footer-logo-link w-inline-block"><img src={colorlogo} alt="" className="footer-image" /></a>
                    <div>
                        <h2 className="footer-heading">Social Media</h2>
                        <ul role="list" className="w-list-unstyled">
                            <li>
                                <a href="#" className="footer-link">Linkedin</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Github</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Salesforce</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Text Link</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="footer-heading">Contract Work</h2>
                        <ul role="list" className="w-list-unstyled">
                            <li>
                                <a href="#" className="footer-link">Upwork</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Fiver</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="footer-heading">Site Map</h2>
                        <ul role="list" className="w-list-unstyled">
                            <li>
                                <a href="#" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">About</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Portfolio</a>
                                <a href="#" className="footer-link">Services</a>
                                <a href="#" className="footer-link">Contact</a>
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
