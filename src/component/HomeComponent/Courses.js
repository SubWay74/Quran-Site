import React from "react";
import Button from "../UI/Button";


export default function OurFlagCourses() {
    return (
        <div className="flag-courses">
            <header className="center">
                <h1>Our FlagShip Courses</h1>
            </header>
            <section className="center">
                <div className="card center transition">
                    <img src="/img/Quran-PNG.png" alt="" />
                    <h1>Tajweed Ul Quran</h1>
                    <p>8 Years to NO age bar</p>
                    <Button name="Read More" to="/blog/tajweed"/>
                </div>
                <div className="card center transition">
                    <img src="/img/Quran-PNG.png" alt="" />
                    <h1>Memorization of Quran</h1>
                    <p>8 Years to NO age bar</p>
                    <Button name="Read More" to="/blog/memorization"/>
                </div>
                <div className="card center transition">
                    <img src="/img/learn-arabic.png" alt="" />
                    <h1>Learn Arabic</h1>
                    <p>8 Years to NO age bar</p>
                    <Button name="Read More" to="/blog/learn-arabic"/>
                </div>
                <div className="card center transition">
                    <img src="/img/learn-urdu.png" alt="" />
                    <h1>Learn Urdu</h1>
                    <p>8 Years to NO age bar</p>
                    <Button name="Read More" to="/blog/learn-urdu"/>
                </div>
            </section>
        </div>
    )
}