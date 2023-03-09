import {React, useState} from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // make API call to authenticate user
        const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
        });

        // handle response from server
        const data = await response.json();
        if (response.ok) {
          // user is authenticated - do something here
        } else {
          // authentication failed - display error message
        console.error(data.message);
        }
    };


    return(
        <>
        <div className="log-container">
            <div className="logform">
                <div className="login center">
                <img src="/img/AR-icon.webp" alt="" />
                <form onSubmit={handleSubmit} className="center">
                    <div className="input-container">
                        <input required type="text" value={username} onChange={handleUsernameChange} />
                        <label className="transition">Username</label>
                    </div>
                    <div className="input-container">
                        <input required type="password" value={password} onChange={handlePasswordChange} />
                        <label className="transition">Password</label>
                    </div>

                    {/* JUST FOR TESTING, I will delete the <Link><Link/> later */}

                    <Link to="/home">
                    <button className="btn center" type="submit">Login</button>
                    </Link>

                    <Link to="/register">
                    <button className="btn center">Register</button>
                    </Link>
                        <p>Forget Password?</p>
                </form>
            </div>
        </div>
        </div>
        </>
    )

}