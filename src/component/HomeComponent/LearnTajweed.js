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
                            <h1>00.00 US$</h1>
                            <Button name="Book Now" to="/bookfreetrail" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const oneToOne = [
    {
        title: "frist Card",
        firstDisc: "first discrioption",
        secondDisc: "second discrioption",
        thirdDisc: "third discrioption",
        fourthDisc: "fourth discrioption",
        link: "####"
    },
    {
        title: "second Card",
        firstDisc: "first discrioption",
        secondDisc: "second discrioption",
        thirdDisc: "third discrioption",
        fourthDisc: "fourth discrioption",
        link: "####"
    },
    {
        title: "third Card",
        firstDisc: "first discrioption",
        secondDisc: "second discrioption",
        thirdDisc: "third discrioption",
        fourthDisc: "fourth discrioption",
        link: "####"
    },
    {
        title: "fourth Card",
        firstDisc: "first discrioption",
        secondDisc: "second discrioption",
        thirdDisc: "third discrioption",
        fourthDisc: "fourth discrioption",
        link: "####"
    },
]
const groupSession = [
    {
        title: "frist 00Card",
        firstDisc: "first 00discrioption",
        secondDisc: "second 00discrioption",
        thirdDisc: "third 00discrioption",
        fourthDisc: "fourth 00discrioption",
        link: "####"
    },
    {
        title: "second 00Card",
        firstDisc: "first 00discrioption",
        secondDisc: "second 00discrioption",
        thirdDisc: "third 00discrioption",
        fourthDisc: "fourth 00discrioption",
        link: "####"
    },
    {
        title: "third 00Card",
        firstDisc: "first 00discrioption",
        secondDisc: "second 00discrioption",
        thirdDisc: "third 00discrioption",
        fourthDisc: "fourth 00discrioption",
        link: "####"
    },
    {
        title: "fourth 00Card",
        firstDisc: "first 00discrioption",
        secondDisc: "second 00discrioption",
        thirdDisc: "third 00discrioption",
        fourthDisc: "fourth 00discrioption",
        link: "####"
    },
]



