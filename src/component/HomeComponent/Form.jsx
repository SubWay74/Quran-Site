import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";

export default function Form() {

        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState(null);
        // eslint-disable-next-line no-unused-vars
        const [record, setRecord] = useState(null);

        const handleSubmit = async (event) => {
            event.preventDefault();
            const token = localStorage.getItem("auth")
            console.log(phone)
            try {
                const formdata = new FormData();
                    formdata.append("email", email);
                    formdata.append("file", record);
                    formdata.append("phone", phone);
                const response = await axios.post("http://127.0.0.1:8000/form/tajweed", formdata, {
                    headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization:`Token ${token}`,
                },
            });
                console.log(response.status)
                if (response.status === 200) {
                    // If the login is successful, redirect to the website with the desired route.
                    const message = await response.json();
                    console.log(message)
                } else {
                    // If the login is unsuccessful, display the error message.
                    const message = await response.json();
                }
                } catch (error) {
                    console.error(error);
                }
        };

    const handleFileChange = (e) => {
        setRecord(e.target.files[0]);
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
                                <input required type="email" value={email} onChange={(e) => setEmail(prevValue => prevValue = e.target.value)} />
                                <label className="transition">Email</label>
                            </div>
                            <p className="error-msg"  id='first-name'>Please enter your username.</p>
                        </div>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                        />
                        <div>
                            <div className='upload-file'>
                                <label className="transition">Upload Audio</label>
                                <input type="file" onChange={handleFileChange} />
                            </div>
                            <p className="error-msg"  accept=".mp3,audio/*" id='first-name'>Please enter your username.</p>
                        </div>
                        <button className="btn center" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}


