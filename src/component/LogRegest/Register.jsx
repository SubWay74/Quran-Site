import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation here
    console.log('Form submitted');
    };

    return (
        <>
        <div className="log-container">
            <div className="logform">
                <div className="login center">
                <img src="/img/AW-wide-logo.webp" alt="" />
                <form onSubmit={handleSubmit} className="center">
                    <div className="input-container">
                        <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                        />
                        <label htmlFor="firstName" className="transition">First Name</label>
                    </div>
                    <div className="input-container">
                        <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                        />
                        <label htmlFor="lastName" className="transition">Last Name</label>
                    </div>
                    <div className="input-container">
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        />
                        <label htmlFor="email" className="transition">Email</label>
                    </div>
                    <div className="input-container">
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        />
                        <label htmlFor="password" className="transition">Password</label>
                    </div>
                    <div className="input-container">
                        <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                        />
                        <label htmlFor="confirmPassword" className="transition">Confirm Password</label>
                    </div>
                    <div>
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
