import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt";


export default function NavBar() {

    let [navBtn, setNavBtn] = useState(false);
    const [isUser, setIsUser] = useState(null);

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

useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
        const userName = decodeToken(token).firstname;
        setIsUser(userName);
    }
},[])

    return(
        <div className="main-nav">
            <div className="logo">
                <Link to="/"><img src="/img/AW-wide-logo.webp" alt="logo" className="logo-img" /></Link>
            </div>
            <div className="nav-btn" id="nav-btn" onClick={toggleNav}>
                <img src={navBtn ? "/img/x-solid.svg" : "/img/bars-solid.svg"} alt="toggle-nav-btn" />
            </div>
            <div className="left-nav center hidden" ref={navRef}>
                <ul className="center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/curriculum">Curriculum</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/our-featured">Features</Link></li>
                </ul>
                {isUser ? 
                    <Link to="/profile">
                        <div className="user-info">
                            <p className="hello-msg ">Hello</p>
                            <h1 className="username">{isUser}</h1>
                        </div>
                    </Link>
                : <Button name="Login" to="/login"/>}
                <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
        </div>
    )
}