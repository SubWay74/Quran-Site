import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [doneMsg, setDoneMsg] = useState("");
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!firstName) {
            setErrorMsg("Enter first name!")
            console.log("firstname")
        } else if(!lastName) {
            setErrorMsg("Enter last name!")
        }else if(!validateEmail(email) || !email) {
            setErrorMsg("Enter a correct Gmail !")
        }else if(!password) {
            setErrorMsg("Enter a Password!")
        }else if(!confirmPassword) {
            setErrorMsg("correct password doesn't match!")
        } else {
            try {
                const response = await fetch('https://blue-cheerful-starfish.cyclic.app/auth/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname : firstName, lastname :lastName, email: email,password :  password, confirmPassword : confirmPassword }),
                });
                const data = await response.json();
                setDoneMsg(data);
            } catch (error) {
                
            }
        }
    };

    return (
        <>
        <div className="log-page register center">
            <div className="form-bg ">
                    <div className="form-container center ">
                    <img src="/img/AW-wide-logo.webp" alt="" />
                    <form onSubmit={handleSubmit} className="center ">
                        <div>
                            <div className="input-container">
                                <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(event) => {setFirstName(prevV => prevV = event.target.value)}}
                                />
                                <label className="transition">First Name</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(event) => {setLastName(prevValue => prevValue = event.target.value)}}
                                />
                                <label className="transition">Last Name</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="email"
                                name="email"
                                
                                value={email}
                                onChange={(event) => {setEmail((prevValue) => prevValue = event.target.value)}}
                                />
                                <label className="transition">Email</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => {setPassword(prevValue => prevValue = event.target.value)}}
                                />
                                <label className="transition">Password</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-container">
                                <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(event) => {setConfirmPassword(prevValue => prevValue = event.target.value)}}
                                />
                                <label className="transition" >Confirm Password</label>
                            </div>
                        </div>
                            {errorMsg && 
                            <div className="error-msg">
                                <p>{errorMsg}</p>
                            </div> }
                            {doneMsg && 
                            <div className="done-msg">
                                <p>{doneMsg}</p>
                            </div> }
                        <div className="btn-form-container center">
                            <button className="btn center" type="submit">Register</button>
                            <Link to="/login">
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
