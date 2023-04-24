import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer center">
            <div className="logo-social center arab-gap">
                <img src="/img/AR-icon.webp" alt="" />
                <p>Best online Quran and Arabic learning Academy. Be the part of this path of wisdom happiness.</p>
                <ul className="socail-links center">
                    <li><a target="_blank" href="https://www.linkedin.com/company/arabic-wave-academy/"><img src="/img/linkedin.png" alt="" /></a></li>
                    <li><a target="_blank" href="https://wa.link/xo8cx6"><img src="/img/whatsapp.png" alt="" /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/Arabicwaveacademy"><img src="/img/facebook.png" alt="" /></a></li>
                    <li><a target="_blank" href="https://instagram.com/arabicwave_academy?igshid=YmMyMTA2M2Y="><img src="/img/instagram.png" alt="" /></a></li>
                    <li><a target="_blank" href="https://www.youtube.com/@arabicwave7630"><img src="/img/Youtube_logo.png" alt="" /></a></li>
                </ul>
            </div>
            <div className="logo-social link-pages center">
                <h3 >Useful Links</h3>
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
                    <li>Mehdipatnam, HYD- India</li>
                    <li>Support@arabicwave.com</li>
                    <li>+91-9949174418</li>
                    <li>+91-9502362451</li>
                    <li>+1-219-803-4044</li>
                </ul>
            </div>
        </footer>
    )
}