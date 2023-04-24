import React, { useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import axios from "axios";

export default function Form() {
        const [select1, setSelect1] = useState('');
        // eslint-disable-next-line no-unused-vars
        const [resume, setResume] = useState(null);
        const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        if(!select1) {
            setErrorMsg("Choose your course")
        } else if (!resume) {
            setErrorMsg("Enter your resume drive link")
        } else {
            const token = localStorage.getItem("auth");
            try {
                const response = await fetch('https://blue-cheerful-starfish.cyclic.app/request/teacherrequest/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`
                    },
                    body: JSON.stringify({ type: select1, resume: resume }),
                    });
                console.log(response.status)
                if (response.status === 200) {
                    
                    // If the login is successful, redirect to the website with the desired route.
                    const message = await response.json();
                    console.log(message)
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

    return (
        <>
        <section className='home-form-sec'>
            <div className="form-bg center teacher-form">
                <img className='right-form-img' src="/img/Online-tutor.JPG" alt="" />
                <div className="form-container">
                    <div className='form-disc'>
                        <h1>Join As A Teacher</h1>
                        <p>
                        We empower you to build the life you want! <br />
                        Join No.1 online Learning platform!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="center">
                        <div className='center'>
                            <div className='center select-container'>
                                <label className="transition">Select Course</label>
                                <select value={select1} onChange={(e) => setSelect1(prevValue => prevValue = e.target.value)}>
                                <option value="">Courses</option>
                                    <option value="tajweed-ul-quran">Tajweed Ul-Quran</option>
                                    <option value="memorization-ul-quran">Memorization Ul-Quran</option>
                                    <option value="learn-urdu">Learn Urdu</option>
                                    <option value="learn-arabic">Learn Arabic</option>
                                </select>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='input-container'>
                                <label className="transition">Resume Google Drive's link</label>
                                <input type="text" name='file' onChange={(e) => setResume(prevValue => prevValue = e.target.value)} />
                            </div>
                        </div>
                        {errorMsg && 
                            <div className="error-msg">
                                <p>{errorMsg}</p>
                            </div> }
                        <button className="btn center" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}