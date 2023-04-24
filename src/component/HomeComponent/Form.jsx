import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";

export default function Form() {

        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState(null);
        const [record, setRecord] = useState(null);
        const [errorMsg, setErrorMsg] = useState("");

        function validateEmail(email) {
            const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            return regex.test(email);
        }

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!email || !validateEmail(email)) {
                setErrorMsg("Enter a correct Gmail!")
                console.log(email)
            } else if (!record) {
                setErrorMsg("Enter your dive link!")
                console.log("record")
            } else if (!phone) {
                setErrorMsg("Enter your phone number!")
            } else {
                const token = localStorage.getItem("auth")
                try {
                    const response = await axios.post("https://blue-cheerful-starfish.cyclic.app/form/tajweed",
                    {email: email, phone: phone, record: record}, {
                        headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization:`Token ${token}`,
                    },
                });
                    console.log(response.status)
                    if (response.status === 200) {
                        // If the login is successful, redirect to the website with the desired route.
                    } else {
                        // If the login is unsuccessful, display the error message.
                        console.log("something went wrong");
                    }
                    } catch (error) {
                        console.error(error);
                    }
            }
            
        };

    return (
        <>
        <section className='home-form-sec'>
            <div className="form-bg center">
                <img className='right-form-img' src="/img/tajweedimage.webp" alt="" />
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
                                <input type="email" value={email} onChange={(e) => setEmail(prevValue => prevValue = e.target.value)} />
                                <label className="transition">Email</label>
                            </div>
                        </div>
                        <div>
                            <div className='input-container'>
                                <label className="transition">Enter your audio drive Link</label>
                                <input type="text" onChange={(e) => setRecord(e.target.value)} />
                            </div>
                        </div>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
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


