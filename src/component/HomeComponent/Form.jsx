import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Form() {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [value, setValue] = useState()
        // eslint-disable-next-line no-unused-vars
        const [resume, setResume] = useState(null);

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

    }

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    }

    return (
        <>
        <section className='home-form-sec'>
            <div className="form-bg center">
                <img className='right-form-img' src="/img/about-us-img.webp" alt="" />
                <div className="form-container">
                    <div className='form-disc'>
                        <h1>Tajweed Ul-Quran</h1>
                        <p>
                        Feel free to contact us or just drop a line here. Our support staff will reach you very soon after evaluation
                        </p>
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
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                        />
                        <div>
                            <div className='upload-file'>
                                <label className="transition">Upload Resume</label>
                                <input type="file" onChange={handleFileChange} />
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


// eslint-disable-next-line no-lone-blocks
{/* <div>
<div className='center select-container'>
    <label className="transition">Select Option</label>
    <select value={select1} onChange={(e) => setSelect1(prevValue => prevValue = e.target.value)}>
    <option value="">--Select--</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
</div>
<p className="error-msg"  id='first-name'>Please enter your username.</p>
</div> */}
