import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function removeError(e) {
        const removeEl = document.getElementById(e);
        removeEl.style.opacity = 0;
    }

    function displayError(e) {
        const errorname = document.getElementById(e);
        errorname.style.opacity = 1;
    }

    const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName === "") {
        displayError('first-name');
        return;
    }
    if (lastName === "") {
        displayError('last-name');
        return;
    }
    
    if (email === "") {
        displayError('email');
        return;
    }

    if (password === "") {
        displayError('password');
        return;
    }

    if (confirmPassword === "" || confirmPassword !== password){
        displayError('confirm-password');
        return;
    }

    // Perform form validation here
    console.log('Form submitted');
    };

    return (
        <>
        <div className="log-page register">
            <div className="form-bg ">
                    <div className="form-container center ">
                    <img src="/img/AR-icon.webp" alt="" />
                    <form onSubmit={handleSubmit} className="center ">
                        <div>
                            <div className="input-container">
                                <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(event) => {setFirstName(prevV => prevV = event.target.value); removeError('first-name');}}
                                />
                                <label className="transition">First Name</label>
                            </div>
                            <p className="error-msg" id='first-name'>Please enter your firstName.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(event) => {setLastName(prevValue => prevValue = event.target.value); removeError('last-name')}}
                                />
                                <label className="transition">Last Name</label>
                            </div>
                            <p className="error-msg" id='last-name'>Please enter your last name.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => {setEmail((prevValue) => prevValue = event.target.value); removeError('email');}}
                                />
                                <label className="transition">Email</label>
                            </div>
                            <p className="error-msg" id='email'>Please enter a valid email address.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => {setPassword(prevValue => prevValue = event.target.value); removeError('password')}}
                                />
                                <label className="transition">Password</label>
                            </div>
                            <p className="error-msg" id='password'>Please enter a valid password.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(event) => {setConfirmPassword(prevValue => prevValue = event.target.value); removeError('confirm-password')}}
                                />
                                <label className="transition" >Confirm Password</label>
                        </div>
                            <p className="error-msg" id='confirm-password'>Your confirm password doen't match.</p>
                        </div>
                        <div className="btn-form-container center">
                            <button className="btn center" type="submit">Register</button>
                            <Link to="/">
                                <button className="btn center" type="submit">Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};
