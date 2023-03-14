import React from "react";
import Button from "../UI/Button"

export default function OurFeaturedSec() {
    return(
        <>
        <section className="thrd-sec">
            <div className="container center">
                <div className="right-half">
                    <h1>Online Quran Education</h1>
                    <p>The Holy Quran is the book that people buy the most. The Quran is a source of guidance for 1.8 billion people, so it can be used to teach. For a strong understanding of the Holy Book, the Quran, each Muslim kid needs to take classes just for them. Therefore, Muslim parents find easy ways for their kids to learn the Quran. If you are also searching for a strategy that will work for teaching your child the Quran. You’ve come to the right spot. Arabic Wave is an online Quran learning platform that brings together students and teachers who want to learn the Tajweed, Arabic language, or Quran.
                    If you wish to memorize the whole Quran (Hifz) or learn how to recite the Quran correctly, we can help you learn the Holy Quran from the comfort of your own home, at your speed, over the Internet with the help of a qualified teacher.</p>
                    <Button name="Book A Free Trail" to="/bookfreetrail"/>
                </div>
                <div className="left-half">
                    <img src="/img/right-img.webp" alt="" />
                </div>
            </div>
            <div className="container center">
                <div className="left-half">
                    <img src="/img/left-img.webp" alt="" />
                </div>
                <div className="right-half">
                    <h1>You Can Learn Hifz-ul-Quran &Qirat</h1>
                    <p>Memorizing the Quran is seen as an act of devotion. Different things make Muslims interested in Hifz Quran. First of all, it is God’s book. Second, someone who learns the Quran by heart is vital in Islam. Also, each verse of the Quran is recited in various styles called Qirat. The different types are based on how the words are pronounced and vocalized. Our online Hifz Quran and Qirat courses are one way for students to learn how to memorize and read the whole Quran with beautiful Qirat. Your status will go up both in this life and the next.
                    “Undoubtedly, those who recite the Quran fluently, sweetly, and accurately will be with the honourable and respectful angels” (Sahih Al-Bukhari)</p>
                    <Button name="Book A Free Trail" to="/bookfreetrail"/>
                </div>
            </div>
            <div className="container center">
                <div className="right-half">
                    <h1>Learning Goals</h1>
                    <ul>
                        <li><p>- Correct memorizing of Allah's Book</p></li>
                        <li><p>- Understanding the meaning of the verses</p></li>
                        <li><p>- Finding out why the verses were revealed</p></li>
                    </ul>
                    <Button name="Book A Free Trail" to="/bookfreetrail"/>
                </div>
                <div className="left-half">
                    <img src="/img/left-img.webp" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}