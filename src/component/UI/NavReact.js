import React, { useState, useRef } from "react";
import Button from "./Button";


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
                    <li id="home">Home</li>
                    <li id="curriculum">Curriculum</li>
                    <li id="about-us">About Us</li>
                    <li id="blogs">Blogs</li>
                    <li id="our-featured">Our Featured</li>
                </ul>
                <Button name="Login" link="###" />
                <Button name="Book A Free Trail" link="###" />
            </div>
        </div>
    )
}