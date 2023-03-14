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
                {FAQ.map((item, i) => (
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

const FAQ = [
    {
        question: "What would you suggest for a beginner's course?",
        Answer: "Whether you are a beginner, we recommend starting with our Tajveed ul Quran course, where you will be taught how to read the Quran with appropriate Tajweed."
    },
    {
        question: "Can we schedule our lesson for any day or at any time?",
        Answer: "Yes, you can schedule your lessons at your ease. We make every effort to locate professors who are accessible at the time."
    },
    {
        question: "How can we get started with online Quran classes?",
        Answer: "Just press 'Registration' and complete the Registration Form. Choose your convenient time for a free trial. When you are happy with the Free Trial sessions and choose to continue, you must pay for Normal classes."
    },
    {
        question: "Where do the Quran Tutors come from, and how competent are they?",
        Answer: "Our Quran instructors come from all over the world, speak various languages, and have graduated from prominent Islamic institutes like theAl-Azhar University, Islamic University of Madinah, and others."
    },
    {
        question: "What exactly is a one-on-one online session?",
        Answer: "A 1-to-1 online class means just one student and one teacher in the live Skype or Zoom session. The teacher concentrates solely on one student."
    },
    {
        question: "How long would it take to finish the classes?",
        Answer: "Our courses all depend on the student's learning levels; some have a certain number of classes."
    },
    {
        question: "I have never attended an online course ever, so will I be capable of handling it?",
        Answer: "Yes, sure, learning Quran online is incredibly simple. Furthermore, our team will be there to assist you at any moment."
    },
    {
        question: "Can I start studying the Quran right away?",
        Answer: "Yes, we do provide Quran reading classes for beginners. We provide a ready-made and simple course for children and beginners. This training is suitable for children as young as eight years old."
    },
    {
        question: "What Will I Need to Begin?",
        Answer: "• A desktop computer, smartphone, laptop, or tablet /<br> • Connection to the internet /<br> • For video/audio live sessions, use a Zoom or Skype account"
    },
    {
        question: "What happens if I skip a class?",
        Answer: "We record all of our classes. Therefore if you miss one, you may watch the video at your pace."
    },
    {
        question: "Is a female instructor available to educate female students?",
        Answer: "Yes, we have female professors since there are several issues concerning female students."
    },
    {
        question: "Whom are your classes focused on?",
        Answer: "Because there is no age restriction to learning, it is appropriate for all ages. This training is suitable for children, adults, boys, and females."
    },
    {
        question: "Can I learn Quran even though I cannot pay for it?",
        Answer: "Yes, for those who cannot pay the course fee, you can learn any courses for free after some verification."
    },
]


