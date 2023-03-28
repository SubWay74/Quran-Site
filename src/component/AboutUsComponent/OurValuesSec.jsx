import React from "react";

export default function OurValues() {
    return (
        <>
        <section className="our-values">
            <header className="center">
                <h1 >Our Values</h1>
            </header>
            <div className="card-container center">
                <div className="card center transition">
                    <img src="/img/Passion.svg" alt="" />
                    <h1>Passion</h1>
                    <p>At Arabic Wave, you will be learning Arabic courses by certified experts, providing high-quality education.</p>
                </div>
                <div className="card center transition">
                    <img src="/img/Efficiency.svg" alt="" />
                    <h1>Efficiency</h1>
                    <p>At Arabic Wave, you will be learning Arabic courses by certified experts, providing high-quality education.</p>
                </div>
                <div className="card center transition">
                    <img src="/img/Inclusion.svg" alt="" />
                    <h1>Inclusion</h1>
                    <p>Our all students everyone equally and make sure that no one is left behind. We want to ensure that information is presented in the most inclusive way possible while consistently understanding all students.</p>
                </div>
                <div className="card center transition">
                    <img src="/img/Accessibility.svg" alt="" />
                    <h1>Accessibility</h1>
                    <p>Expertise and knowledge should not be limited by where they are. Anyone with internet access and a computer, tablet, or smartphone should be able to learn from Arabic Wave.</p>
                </div>
            </div>
        </section>
        </>
    )
}