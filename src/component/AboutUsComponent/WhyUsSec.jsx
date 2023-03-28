import React from "react";


export default function WhyUs() {
    return(
        <>
        <section className="whyus">
            <header className="center">
                <h1>Why Us</h1>
            </header>

            <div className="card-container center">
                <div className="card center transition">
                    <img src="/img/kll.png" alt="" />
                    <p>Even if you cannot understand the Arabic alphabet, recite the Holy Quran according to Tajweed principles.</p>
                </div>
                <div className="card center transition">
                    <img src="/img/fg2.png" alt="" />
                    <p>You can learn how to memorize the Holy Quran and become a Hafiz-ul-Quran with the help of our experienced teachers without leaving your room.</p>
                </div>
                <div className="card center transition">
                    <img src="/img/ghj.png" alt="" />
                    <p>We help poor communities by providing free-of-cost courses that cannot pay for Quran learning courses.</p>
                </div>
            </div>
        </section>
        </>
    )
}