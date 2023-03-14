import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function BookFreeTrailSec() {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [value, setValue] = useState()
        const [select1, setSelect1] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here

        if (firstName === "" || lastName === "") {
            alert("Please enter your name.");
            return;
        }
        
        if (!email === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (select1 === "") {
            alert("Please enter your name.");
            return;
        }

    }

    return (
        <>
        <section className='home-form-sec'>
            <div className="form-bg center">
                <img className='right-form-img' src="/img/about-us-img.webp" alt="" />
                <div className="form-container">
                    <div className='form-disc'>
                        <h1>Book A Free Trail</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="center">
                        <div>
                            <div className="input-container">
                                <input required type="text" value={firstName} onChange={(e) => setFirstName(prevValue => prevValue = e.target.value)} />
                                <label className="transition">First Name</label>
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input required type="text" value={lastName} onChange={(e) => setLastName(prevValue => prevValue = e.target.value)} />
                                <label className="transition">Last Name</label>
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <div>
                            <div className="input-container">
                                <input required type="email" value={email} onChange={(e) => setEmail(prevValue => prevValue = e.target.value)} />
                                <label className="transition">Email</label>
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <div>
                        <div className='center select-container'>
                            <label className="transition">Select Course</label>
                            <select value={select1} onChange={(e) => setSelect1(prevValue => prevValue = e.target.value)}>
                            <option value="">Courses</option>
                                <option value="option1">Tajweed Ul-Quran</option>
                                <option value="option2">Memorization Ul-Quran</option>
                                <option value="option3">Learn Urdu</option>
                                <option value="option3">Learn Arabic</option>
                            </select>
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                        />
                        <button className="btn center" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}