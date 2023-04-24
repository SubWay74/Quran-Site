import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function BookFreeTrailSec() {
        const [email, setEmail] = useState('');
        const [value, setValue] = useState("");
        const [select1, setSelect1] = useState('');
        const [errorMsg, setErrorMsg] = useState("");

        function validateEmail(email) {
            const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            return regex.test(email);
        }

        const handleSubmit = async (event) => {
            event.preventDefault();
            if (!email || !validateEmail(email)) {
                setErrorMsg("Enter your Gmail!")
            }else if (!select1) {
                setErrorMsg("Choose your course!")
            } else if (!value) {
                setErrorMsg("Enter your phone!")
            } else {
                const token = localStorage.getItem("auth");
                const response = await fetch('https://blue-cheerful-starfish.cyclic.app/form/booktrail/',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`
                    },
                    body: JSON.stringify({email: email, phone: value, type: select1}),
                    });
                if (response.status === 200) {
                    const message = await response.json();
                    console.log(message);
                    window.location.href = '/';
                } else {
                    const message = await response.json();
                    console.log(message);
                }
            }
        };

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
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label className="transition">Email</label>
                            </div>
                        </div>
                        <div>
                            <div className='center select-container'>
                                <label className="transition">Select Course</label>
                                <select value={select1} onChange={(e) => setSelect1(e.target.value)}>
                                <option value="">Courses</option>
                                    <option value="tajweed-ul-quran">Tajweed Ul-Quran</option>
                                    <option value="memrization-ul-quran">Memorization Ul-Quran</option>
                                    <option value="learn-urdu">Learn Urdu</option>
                                    <option value="learn-arabic">Learn Arabic</option>
                                </select>
                            </div>
                        </div>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                        />
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