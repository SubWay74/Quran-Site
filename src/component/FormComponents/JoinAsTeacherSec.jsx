import React, { useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import axios from "axios";

export default function Form() {
        const [select1, setSelect1] = useState('');
        const [email, setEmail] = useState(null);
        // eslint-disable-next-line no-unused-vars
        const [resume, setResume] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        
        const token = localStorage.getItem("auth");
        console.log(resume)
        try {
            const formdata = new FormData();
                    formdata.append("type", select1);
                    formdata.append("file", resume);
                    formdata.append("email", email);
                const response = await axios.post("http://127.0.0.1:8000/request/teacherrequest", formdata, {
                    headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization:`Token ${token}`,
                },
            });
            console.log(response.status)
            if (response.status === 200) {
                
                // If the login is successful, redirect to the website with the desired route.
                const message = await response.json();
                localStorage.setItem("auth", message.token);
                // window.location.href = '/';
            } else {
                // If the login is unsuccessful, display the error message.
                const message = await response.json();
                console.log(message);
            }
            } catch (error) {
                console.error(error);
            }
    };


    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    }

    useEffect(() => {
        const token = localStorage.getItem("auth");
        if (token) {
            const userEamil = decodeToken(token).email;
            setEmail(userEamil)
        }
    },[])

    return (
        <>
        <section className='home-form-sec'>
            <div className="form-bg center teacher-form">
                <img className='right-form-img' src="/img/teacher-icon.png" alt="" />
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
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <div className='center'>
                            <div className='upload-file'>
                                <label className="transition">Upload Resume</label>
                                <input type="file" name='file' onChange={handleFileChange} />
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <button className="btn center" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}