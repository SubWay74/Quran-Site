import {React, useState} from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(prevValue => prevValue = event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(prevValue => prevValue = event.target.value);
    };
    
    const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await fetch('http://127.0.0.1:8000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password : password }),
                });
                if (response.status === 200) {
                    // If the login is successful, redirect to the website with the desired route.
                    const message = await response.json();
                    localStorage.setItem("auth", message.token);
                    console.log(message);
                    window.location.href = '/';
                } else {
                    // If the login is unsuccessful, display the error message.
                    const message = await response.json();
                    setErrorMessage(message);
                    console.log(message);
                }
                } catch (error) {
                    console.error(error);
                    setErrorMessage('Something went wrong. Please try again later.');
                }
        };

    return(
        <>
        <div className="log-page">
            <div className="form-bg">
                <div className="form-container center">
                    <img src="/img/AW-wide-logo.webp" alt="" />
                    <form onSubmit={handleSubmit} className="center">
                        <div>
                            <div className="input-container">
                                <input type="email" value={email} onChange={handleEmailChange} />
                                <label className="transition">Email</label>
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input type="password" value={password} onChange={handlePasswordChange} />
                                <label className="transition">Password</label>
                            </div>
                            <p className="error-msg">Please enter your password</p>
                        </div>
                        {/* JUST FOR TESTING, I will delete the <Link><Link/> later */}
                        <div className="btn-form-container center ">
                            <button className="btn center" type="submit">Login</button>
                            <Link to="/">
                            </Link>
                            <Link to="/register">
                            <button className="btn center">Register</button>
                            
                            </Link>
                        </div>
                            <p>Forget Password?</p>
                    </form>
            </div>
        </div>
        </div>ذ-
        </>
    )

}