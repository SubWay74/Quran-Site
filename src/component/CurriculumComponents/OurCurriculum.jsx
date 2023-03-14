import {React, useState} from "react";

export default function OurCurriculum() {

    const [tajweedCards, setTajweedCards] = useState(tajweed[0].beginner);
    const [hafizCards, setHafizCards] = useState(hifz[0].beginner);
    

    return (
        <>
        <section>
            <header className="center">
                    <h1>
                        Our Curriculum
                    </h1>
            </header>
            <div className="btn-container center">
                <div className="content-btns">
                        <button className="">Tajweed Ul-Qur'an</button>
                </div>
                    <div className="content-btns">
                        <button className="first-btn" onClick={() => setTajweedCards(prevValue => prevValue = tajweed[0].beginner)}>Beginner</button>
                        <button onClick={() => setTajweedCards(prevValue => prevValue = tajweed[1].intermediate)}>Intermediate</button>
                        <button className="sec-btn" onClick={() => setTajweedCards(prevValue => prevValue = tajweed[2].advanced)}>Advanced</button>
                    </div>
            </div>
            <div className="curri-sec center">
            {tajweedCards.map((item, i) => (
                    <>
                    <div className="curri-card center transition" key={i}>
                        <div className="card-disc center">
                            <h1 className="center">{item.title}</h1>
                            <hr />
                            <p>{item.parg}</p>
                        </div>
                    </div>
                    </>
                ))}
            </div>
            <div className="btn-container center">
                <div className="content-btns">
                        <button className="">Hifz-Ul-Qur'an</button>
                </div>
                    <div className="content-btns">
                        <button className="first-btn" onClick={() => setHafizCards(prevValue => prevValue = hifz[0].beginner)}>Beginner</button>
                        <button onClick={() => setHafizCards(prevValue => prevValue = hifz[1].intermediate)}>Intermediate</button>
                        <button className="sec-btn" onClick={() => setHafizCards(prevValue => prevValue = hifz[2].advanced)}>Advanced</button>
                    </div>
            </div>
            <div className="curri-sec center">
            {hafizCards.map((item, i) => (
                    <>
                    <div className="curri-card center transition" key={i}>
                        <div className="card-disc center">
                            <h1 className="center">{item.title}</h1>
                            <hr />
                            <p>{item.parg}</p>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </section>
        </>
    )
}

const tajweed = [
            {
                beginner: [
                    {
                        title: "Learning Outcomes",
                        parg: "Recognize Arabic alphabet forms; pronounce every Arabic letter with an Arabic accent; recognize combined Arabic alphabets. Form words from the Arabic alphabet. And learn, identify, and practice short vowel tasks."
                    },
                    {
                        title: "Benefits",
                        parg: "The right way to understand the Ayahs of the Quran, getting more and more nice deeds, earning the angels’ companionship, is a proper way to recite the Quran."
                    },
                    {
                        title: "Achievements",
                        parg: "After getting our beginner Arabic course, you will learn the proper ethics and guidelines for reciting the Quran, the many styles of recitation and the errors associated with each, common mistakes in Tajveed, and the rules for the Arabic language."
                    }
                ]
            },
            {
                intermediate: [
                    {
                        title: "Learning Outcomes",
                        parg: "Our intermediate Arabic and Tajveedul Quran online course will help you grasp the attributes and sifaat of Arabic, learn recitation rules using genuine text, and increase fluency and stamina with comprehensive recitation practice."
                    },
                    {
                        title: "Benefits",
                        parg: "After completing our online Arabic course, you can read the Quran perfectly and comprehend its entire meaning. The Arabic Wave encourages the practice of Tajveed. The more you practice, the more understandable your voice becomes."
                    },
                    {
                        title: "Achievements",
                        parg: "With our online Quran course, you will be able to learn the rules of Tajveed in-depth and indetail. You will also be able to practice pronouncing letters and their complete vocal characteristics. Will master the required pauses and extensions when reciting."
                    }
                ]
            },
            {
                advanced: [
                    {
                        title: "Learning Outcomes",
                        parg: "Recognize and apply all Arabic recitation rules. Determine the Waqf (the pause) and Ibtida places (the beginning). Discover the reason behind the revelation. Learn the verses’ vocabulary."
                    },
                    {
                        title: "Benefits",
                        parg: "With our advanced Tajveedul Quran course, you will get a strong foundation for knowing the Quran and the ability to recite the Quran with excellent Qiraat at any Muslim gathering or mosque. The Quran reciter transforms the Quranic verses into an appealing sound rhythm."
                    },
                    {
                        title: "Achievements",
                        parg: "With our qualified experts, recite the Qur’an from beginning to end. Study the famous Tajweed Rules text. Thorough recitation practice will help you build stamina. You will learn about alternative readings."
                    }
                ]
            }
        ]



const hifz = [
            {
                beginner: [
                    {
                        title: "Learning Outcomes",
                        parg: "Students will learn and memorize the small surahs of the Quran, like Surah-al-Annas, Surah-al-Falaq, Surah-al-Lahab, etc. Students will also learn the meaning of these surahs."
                    },
                    {
                        title: "Benefits",
                        parg: "Memorizing these Surahs and learning their meaning is indeed an excellent good deed. You will learn the true meaning and purpose of the revelation of these surahs. Also, you can recite these surahs anywhere, like in Salah or at a gathering."
                    },
                    {
                        title: "Achievements",
                        parg: "After memorizing the surahs, you will get a great reward from Allah (S.A). And learning their true meaning will strengthen your Iman as well. While praying salah, you will understand the surah that you are reciting."
                    }
                ]
            },
            {
                intermediate: [
                    {
                        title: "Learning Outcomes",
                        parg: "Our intermediate Hifz-ul-Quran course includes memorizing"
                    },
                    {
                        title: "Benefits",
                        parg: "After completing our online Quran memorizing course, you will memorize the important surahs of the Quran, which are very necessary. And not just memorizing, you will also understand the meaning of each verse and word of the surah. A better understanding of the Quran will make you a better Muslim."
                    },
                    {
                        title: "Achievements",
                        parg: "After taking our intermediate Hifz-Ul-Quran course, you will memorize the Quran’s significant and vital surahs, and this act will get you closer to Allah (S.A). You will get more rewardsfrom Allah (S.A). You will get the highest ranking of Jannah and heart protection against destruction."
                    }
                ]
            },
            {
                advanced: [
                    {
                        title: "Learning Outcomes",
                        parg: "Memorizing the entire Quran enhances mental well-being and memory. Tajweed-based memorization of the Holy Quran or a portion thereof. Learning the verses and surah’s meanings (Tafseer). Reasons for the Quran’s revelation."
                    },
                    {
                        title: "Benefits",
                        parg: "According to the preceding Hadith, Muslims believe that whoevermemorizes and acts upon the Quran would be greatly rewarded and revered by Allah. Their position in Paradise will grow in proportion to how much of Allah’s Holy Book they memorized. Memorizing the Quran helps your memory."
                    },
                    {
                        title: "Achievements",
                        parg: "In Islamic society, Hafiz enjoys an extraordinary reputation. In this Quran Memorization course, you will memorize the whole Quran. We shall begin at a fundamental level and cover the memorization of the entire Quran in stages."
                    }
                ]
            }
        ]