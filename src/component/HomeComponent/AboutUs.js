import React from "react";
import Button from "../UI/Button";


export default function AboutUs() {
    return(
        <div className="about-us">
            <div className="right-side">
                <img src="/img/about-us-img.webp" alt="" />
            </div>
            <div className="left-side center">
                <h1>About Us</h1>
                <p>Arabic Wave is operated by Novazone consulting services LLP. Arabic Wave is the fastest-growing online platform, which is powered by Novaone Consulting Services LLP. Arabic Wave is the best online Arabic academy that provides Islamic studies and some of the best Arabic and online Quran teaching courses available to students of all ages. The Quran is significant and helpful for people of all ages to learn.Arabic Wave has a lot of satisfied students from the US, Canada, UK, UAE, Saudi Arabia, and India, among other places. Our experts are graduates from major Islamic institutions and others.</p>
                <p className="hadeth">“The Messenger of Allah (peace and blessings of Allah be upon him) said: ‘That individual must lead the prayer which has the most understanding of the Book of Allah; if they are equal in an understanding of the Qur’an, then by the one who has the most knowledge of the Sunnah; if they are equivalent in the knowledge of the Sunnah, then by the one who moved (made hijrah) first; No one should lead another in Salah in his domain of power, or sit in his position in his home, unless with his permission.”</p>
                <div className="center">
                <Button name="Book A Free Trail" to="/bookfreetrail" />
                <Button name="Read More" to="/about-us" />
                </div>
            </div>
        </div>
    )
}