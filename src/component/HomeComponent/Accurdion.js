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
                        <p className={selected === i ? "content  show" : "content "}>{item.Answer}</p>
                    </div>
                ))}
                <br></br>
                <br></br>
                <header className="center">
                    <h1>
                    What Parents Should Do When Their Students Are Taking Online Quran Classes
                    </h1>
                </header>
                {parentAnswers.map((item, i) => (
                    <div className="accurdion" key={i}>
                        <div className="center title transition" onClick={() => toggle(i)}>
                            <h1>{item.question}</h1>
                            <span className={selected === i ? "close transition" : "transition"}>+</span>
                        </div>
                        <p className={selected === i ? "content  show" : "content "}>{item.Answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
                }

const qAndAnswer = [
    {
        question: "Understand Quran Easily",
        Answer: "When kids learn our Arabic course, they usually learn more about religion. Children will find it simple to understand and recite the Quran because it is written in Arabic."
    },
    {
        question: "Learning A New Language Can Help Your Brain And Memory",
        Answer: "It is well known that learning a new language can help your brain and memory. This knowledge will provide opportunities to act on Islamic culture while improving worldwide and intercultural understanding."
    },
    {
        question: "Make Fewer Mistakes while Reading",
        Answer: "When people learn to recite the Qur'an with Tajveed, they are less likely to make mistakes, which makes Allah (SWT) happy. So do not waste time and enroll in our online Tajveed ul Quran course. "
    },
    {
        question: "Get More Deeds",
        Answer: "Muslims get ten good deeds for every letter they say from the Quran. If you learn the Tajveed ul Quran online, you can assume how many rewards you may receive by reciting a Surah or Ayah from the Quran."
    },
    {
        question: "Learn Arabic and Other Languages Easily",
        Answer: "When children understand and can read Arabic, they will find it easier to study other languages, such as Hebrew, Persian, Turkish, and Urdu. People who know Arabic can easily understand semantic and grammatical concepts."
    },
    {
        question: "Learn Fine Details and Complexities Of Arab Culture",
        Answer: "If you learn Arabic from our experts, you will be able to understand more of the fine details and complexities of Arab culture, which are often misinterpreted and misquoted in the West."
    },
    {
        question: "Learn Arabic and Get Rid Of Wrong Ideas and Facts Regarding Islam",
        Answer: "There are a lot of false ideas floating around in our cultures and countries about Islam. When a kid knows the most critical parts of Arabic, he is capable of quickly getting rid of the wrong ideas and facts regarding Islam."
    },
    {
        question: "Learn from our Best Course",
        Answer: "Our courses are designed for all levels of learners (beginners to advanced), so whether you are a new student or want to learn more about the Arabic language and the Quran. Arabic Wave is the place where you should be."
    },
]

const parentAnswers = [
    {
        question: "Online Places To Learn The Quran Are Growing",
        Answer: "We can see that there are more and more places to learn the Quran daily. More people have resources and skills that push them to use them helpfully. As a parent, it's your job to look at all the sites and pick the most trustworthy ones. You can read reviews and find out how successful each platform has been in the past. You can also talk to the tutors about how great your children are. We think it's essential for all parents to do a lot of research before choosing a portal."
    },
    {
        question: "Attend One-On-One Meetings With The Teacher",
        Answer: "When kids learn Quran online, they can't talk to each other face-to-face, which is a problem. It's pretty easy to have clear conversations with teachers on the site. On the other hand, this is not a benefit of studying the Quran online. Still, these problems are being solved by apps as well. You can choose how to talk to the tutor and do so. Tell them what you expect from your child, what they are good at, what they need to work on, etc."
    },
    {
        question: "Your Child Can Learn Through Digital Means",
        Answer: "Not all kids know they can learn the Quran online. You should show your young child how online learning works if they don't know. Tell them what their new classes are and how to sit during lectures."
    },
    {
        question: "Select A Pace Based On The Child",
        Answer: "Everyone knows that each child is unique. They don't all learn the same way, and they might not catch on as quickly as other kids. This is a big reason many parents choose a tutor who works one-on-one with their child. When kids decide to learn the Quran online, they can talk to a teacher one-on-one. One of the benefits is this. This tells the tutor what kind of child they are working with. Then, based on how well the child learns, they can make a lesson plan."
    },
    {
        question: "Make Sure Continuity And Comfort",
        Answer: "Whether you choose to learn Quran online for kids or adults, it's essential to make sure the student stays consistent. They should show up on time and to all of their classes. Kids often get tired of learning the Quran online and try to skip school. But it is the parent's job to ensure the child doesn't change. Choose a quiet place in your house to get the most out of online learning. So that they can pay attention in class, the kid should go to a school where there aren't many distractions. Adults should always keep an eye on the child and make sure nothing else is going on in the learning environment."
    },
    {
        question: "Final Thoughts",
        Answer: "The most important thing for every Muslim parent to do is teach their child about the Quran. Allah (SWT) will ask us how much this is our fault. We hope that all the parents who read this blog will find a way for their kids to learn Quran online. Feel free to contact us if you get stuck and don't know what to do next. The experts on our team will help you see things from a different point of view and come up with a way for your child to learn."
    },
]