import React, {useState} from "react";
import Popup from "../UI/Popup";
import { Link } from "react-router-dom";

export default function BlogSec() {

    const [openList, setOpenList] = useState(blogArr.map(() => false));

    const handleOpen = (index) => {
        setOpenList(prevList => {
        const newList = [...prevList];
        newList[index] = !newList[index];
        return newList;
    });
    };

    return(
        <>
            <section className="blog-sec center">
                {blogArr.map((item, i) => (
                    <div className="blog-card">
                        <img src="/img/background-card.png" alt="" />
                        <h1>{item.header}</h1>
                        <p>{item.paragraph}</p>
                        <Link to={item.post}>
                        <button className="btn">
                            <span>Read More</span>
                        </button>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
}

const blogArr = [
    {
        header: "Benefits of Memorizing the Quran",
        paragraph: "Allah SWT provided the Quran to humanity as a source of guidance and kindness. Reciting and memorizing the Quran qualifies a person for blessings and status both in this life and in the Hereafter.",
        post:"/BenefitsOfMemorizingQuran"
    },
    {
        header: "Benefits Of Surah Ar-Rahman You Need To Know",
        paragraph: "We all know how beautiful the Holy Quran is. People have said that Surah Ar-Rahman is its ornament. SubhanAllah! It's hard to even think about how important it is to decorate the holy Quran. ",
        post: "/BenefitsOfSurahArRahman"
    },
    {
        header: "Tips To Learn Tajweed Quran Easily And Effectively",
        paragraph: "For people whose first language is not Arabic, it can be hard to learn Tajweed Beginners. But Tajweed is very important if you want to learn how to say the Quran correctly. ",
        post: "/TipsTajweed"
    },
    {
        header: "How to Memorize Quran Online? Tips To Follow",
        paragraph: "Having the Quran memorized and becoming a Hafiz In Islam, being able to read the Quran is a great honour that brings many good things in this life and the next. ",
        post: "/HowToMemorize"
    },
    {
        header: "Why Is It Important For A Muslim To Learn Arabic?",
        paragraph: "Arabic is one of the top five most spoken languages, and learning it is a worthwhile endeavor. About 400 million people speak Arabic.",
        post: "/WhyMemorizeQuran"
    },
]