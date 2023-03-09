import React, { useState, useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";


export default function NavBar() {

    let [navBtn, setNavBtn] = useState(false)

    const navRef = useRef()

    function toggleNav() {
        if(!navBtn){
            navRef.current.classList.remove("hidden");
            setNavBtn(prevBtn => !prevBtn);
        } else {
        navRef.current.classList.add("hidden");
        setNavBtn(prevBtn => !prevBtn);
    }
}

    return(
        <div className="main-nav">
            <div className="logo">
                <img src="img/AW-wide-logo.webp" alt="logo" className="logo-img" />
            </div>
            <div className="nav-btn" id="nav-btn" onClick={toggleNav}>
                <img src={navBtn ? "/img/square-xmark-solid.svg" : "/img/square-check-solid.svg"} alt="toggle-nav-btn" />
            </div>
            <div className="left-nav center hidden" ref={navRef}>
                <ul className="center">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/curriculum">Curriculum</Link></li>
                    <li><Link to="/home">About Us</Link></li>
                    <li><Link to="/home">Blogs</Link></li>
                    <li><Link to="/home">Our Featured</Link></li>
                </ul>
                <Button name="Login" to="/"/>
                <Button name="Book A Free Trail" link="###" />
            </div>
        </div>
    )
}