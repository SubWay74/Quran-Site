import {React, useState} from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState("");

    const handleEmailChange = (event) => {
        setEmail(prevValue => prevValue = event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(prevValue => prevValue = event.target.value);
    };

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    }
    
    const handleSubmit = async (event) => {
            event.preventDefault();
            if(!email || !validateEmail(email)) {
                setErrorMsg("Enter a correct Gmail !")
            } else if (!password) {
                setErrorMsg("Enter a correct password!")
            } else {
                try {
                    const response = await fetch('https://blue-cheerful-starfish.cyclic.app/auth/login', {
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
                        window.location.href = '/';
                    } else {
                        // If the login is unsuccessful, display the error message.
                        const message = await response.json();
                        setErrorMsg(message)
                    }
                    } catch (error) {
                        console.error(error);
                    }
            }

        };

    return(
        <>
        <div className="log-page center">
            <div className="form-bg">
                <div className="form-container center">
                    <img src="/img/AW-wide-logo.webp" alt="" />
                    <form onSubmit={handleSubmit} className="center">
                        <div>
                            <div className="input-container">
                                <input type="email" value={email} onChange={handleEmailChange} />
                                <label className="transition">Email</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-container">
                                <input type="password" value={password} onChange={handlePasswordChange} />
                                <label className="transition">Password</label>
                            </div>
                        </div>
                        {errorMsg && 
                            <div className="error-msg">
                                <p>{errorMsg}</p>
                            </div> }
                        {/* JUST FOR TESTING, I will delete the <Link><Link/> later */}
                        <div className="btn-form-container center ">
                            <button className="btn center" type="submit">Login</button>
                            <Link to="/register">
                            <button className="btn center">Register</button>
                            </Link>
                        </div>
                        <Link to="/">Back to ArabicWave</Link>
                    </form>
            </div>
        </div>
        </div>ذ-
        </>
    )

}