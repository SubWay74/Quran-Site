import React, { useState } from "react";


export default function Accurdion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(prevValue => prevValue = null)
        }
        setSelected(prevValue => prevValue = i);
    }

    return(
        <section className="accurdion-sec">
            <div className="wrapper">
                <header className="center">
                    <h1>
                    Why Your Kids Should Learn Arabic
                    </h1>
                </header>
                {qAndAnswer.map((item, i) => (
                    <div className="accurdion" key={i}>
                        <div className="center title transition" onClick={() => toggle(i)}>
                            <h1>{item.question}</h1>
                            <span className={selected === i ? "close transition" : "transition"}>+</span>
                        </div>
                        <p className={selected === i ? "content transition show" : "content transition"}>{item.Answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
                }

const qAndAnswer = [
    {
        question: "Your kids should learn Arabic to learn and understand the Quran more.",
        Answer: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
        question: "Your kids should learn Arabic to learn and understand the Quran more.",
        Answer: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
        question: "Your kids should learn Arabic to learn and understand the Quran more.",
        Answer: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
        question: "Your kids should learn Arabic to learn and understand the Quran more.",
        Answer: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
        question: "Your kids should learn Arabic to learn and understand the Quran more.",
        Answer: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
]