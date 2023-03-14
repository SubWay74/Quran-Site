import {React, useState} from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(prevValue => prevValue = event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(prevValue => prevValue = event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (username === "") {
            const errorname = document.getElementById("first-name");
            errorname.style.opacity = 1;
            return;
        }
        if (password === "") {
            alert("Please enter your password.");
            return;
        }
        // make API call to authenticate user
        // const response = await fetch('/api/login', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     username,
        //     password
        // })
        // });

        // handle response from server
        // const data = await response.json();
        // if (response.ok) {
        //   // user is authenticated - do something here
        // } else {
        //   // authentication failed - display error message
        // console.error(data.message);
        // }
    };


    return(
        <>
        <div className="log-page">
            <div className="form-bg">
                <div className="form-container center">
                    <img src="/img/AR-icon.webp" alt="" />
                    <form onSubmit={handleSubmit} className="center">
                        <div>
                            <div className="input-container">
                                <input type="text" value={username} onChange={handleUsernameChange} />
                                <label className="transition">Username</label>
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

                        <div className="btn-form-container">
                            <Link to="/home">
                            <button className="btn center" type="submit">Login</button>
                            </Link>

                            <Link to="/register">
                            <button className="btn center">Register</button>
                            </Link>
                        </div>
                            <p>Forget Password?</p>
                    </form>
            </div>
        </div>
        </div>
        </>
    )

}