import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faXmarkSquare, faCediSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer center">
            <div className="logo-social center">
                <img src="/img/AR-icon.webp" alt="" />
                <p>Best online Arabic learning Academy. Be the part of this path of wisdom happiness.</p>
                <ul className="socail-links center">
                    <li><a href="###">F</a></li>
                    <li><a href="###">T</a></li>
                    <li><a href="###">L</a></li>
                    <li><a href="###">Y</a></li>
                </ul>
            </div>
            <div className="logo-social link-pages center">
                <h3>Useful Links</h3>
                <ul className="page-links">
                <li><Link to="/home">Home</Link></li>
                    <li><Link to="/curriculum">Curriculum</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/joinasteacher">Career</Link></li>
                </ul>
            </div>
            <div className="logo-social link-pages center">
                <h3>Plicies</h3>
                <ul className="page-links">
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/refund">Refund Policy</Link></li>
                    <li><Link to="/terms">Terms and Conditions</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                </ul>
            </div>
            <div className="logo-social link-pages center">
                <h3>Contact Us</h3>
                <ul className="page-links">
                    <li>New York, NY 10012, US</li>
                    <li>info@example.com</li>
                    <li>+01 234 567 88</li>
                    <li>+01 234 567 89</li>
                </ul>
            </div>
            <div className="logo-social link-pages center">
                <h3>Donate</h3>
                <p>Let’s bestow wisdom on others. Just a tiny attempt to cheer up those in the world who are in need of assistance.</p>
            </div>
        </footer>
    )
}