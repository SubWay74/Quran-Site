import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faXmarkSquare, faCediSign } from '@fortawesome/free-solid-svg-icons';

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
                    <li><a>Home</a></li>
                    <li><a>Curriculum</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Career</a></li>
                </ul>
            </div>
            <div className="logo-social link-pages center">
                <h3>Plicies</h3>
                <ul className="page-links">
                    <li><a>Privacy Policy</a></li>
                    <li><a>Refund Policy</a></li>
                    <li><a>Terms and Conditions</a></li>
                    <li><a>FAQs</a></li>
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