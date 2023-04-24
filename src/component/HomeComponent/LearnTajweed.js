import React, { useState } from "react";
import Button from "../UI/Button";

export default function LearnTajweed() {
    
    const [cardSelection, setCardSelection] = useState(oneToOne);

    return(
        <section className="learn-tajweed-sec center">
            <header className="center">
                <h1>
                Learn Tajweed UI Quran by Arabic Wave Academy
                </h1>
            </header>
            <div className="content-btns">
                <button className={cardSelection === oneToOne ? "first-btn active" : "first-btn"} onClick={() => setCardSelection(prevValue => prevValue = oneToOne)}>One To One</button>
                <button className={cardSelection === groupSession ? "sec-btn active" : "sec-btn"} onClick={() => setCardSelection(prevValue => prevValue = groupSession)}>Group Session</button>
            </div>
            <div className="curriculum-sec center">
                {cardSelection.map((item, i) => (
                    <div className="container-card center transition" key={i}>
                        <div className="card-disc center">
                            <h1>{item.title}</h1>
                            <hr />
                            <p>{item.firstDisc}</p>
                            <p>{item.secondDisc}</p>
                            <p>{item.thirdDisc}</p>
                            <p>{item.fourthDisc}</p>
                        </div>
                        <div className="card-learn center">
                            <h1>{item.charge}</h1>
                            <a target="_blank" href="https://wa.link/xo8cx6"><button className="btn center">Book Now</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const oneToOne = [
    {
        title: "Basic",
        firstDisc: "5 classes/ week (30 Mins)",
        secondDisc: "3 classes/week (30 Mins)",
        thirdDisc: "Weekends classes (40 Mins)",
        link: "####",
        charge: "22$"
    },
    {
        title: "Intermediate",
        firstDisc: "5 classes/ week (30 Mins)",
        secondDisc: "3 classes/week (30 Mins)",
        thirdDisc: "Weekends classes (40 Mins)",
        link: "####",
        charge: "34$"
    },
    {
        title: "Advance",
        firstDisc: "5 classes/ week (30 Mins)",
        secondDisc: "3 classes/week (30 Mins)",
        thirdDisc: "Weekends classes (40 Mins)",
        link: "####",
        charge: "47$"
    },
    {
        title: "Expert",
        firstDisc: "5 classes/ week (30 Mins)",
        secondDisc: "3 classes/week (30 Mins)",
        thirdDisc: "Weekends classes (40 Mins)",
        link: "####",
        charge: "56$"
    },
]
const groupSession = [
    {
        title: "Group 5 Students",
        firstDisc: "5 classes/week (60 mins)",
        secondDisc: "3 classes/week (60 mins)",
        thirdDisc: "Weekends classes (70 mins)",
        fourthDisc: "fourth 00discrioption",
        link: "####",
        charge: "12$"
    },
    {
        title: "Group 10 Students",
        firstDisc: "5 classes/week (60 mins)",
        secondDisc: "3 classes/week (60 mins)",
        thirdDisc: "Weekends classes (70 mins)",
        fourthDisc: "fourth 00discrioption",
        link: "####",
        charge: "Free"
    }
]



