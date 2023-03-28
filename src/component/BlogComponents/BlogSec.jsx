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
                        <img src={item.image} alt="" />
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
        image: "/img/course-img.webp",
        header: "Benefits of Memorizing the Quran",
        paragraph: "Allah SWT provided the Quran to humanity as a source of guidance and kindness. Reciting and memorizing the Quran qualifies a person for blessings and status both in this life and in the Hereafter.",
        post:"/BenefitsOfMemorizingQuran"
    },
    {
        image: "/img/course-img.webp",
        header: "Benefits Of Surah Ar-Rahman You Need To Know",
        paragraph: "We all know how beautiful the Holy Quran is. People have said that Surah Ar-Rahman is its ornament. SubhanAllah! It's hard to even think about how important it is to decorate the holy Quran. ",
        post: "/BenefitsOfSurahArRahman"
    },
    {
        image: "/img/course-img.webp",
        header: "Tips To Learn Tajweed Quran Easily And Effectively",
        paragraph: "For people whose first language is not Arabic, it can be hard to learn Tajweed Beginners. But Tajweed is very important if you want to learn how to say the Quran correctly. ",
        post: "/TipsTajweed"
    },
    {
        image: "/img/course-img.webp",
        header: "Online Arabic Classes vs. Traditional Arabic Classes",
        paragraph: "You want to learn a foreign language, but you don't know if you should go to a real school and sit in on real classes or take the course online. ",
        post: "/OARvsTAR"
    },
    {
        image: "/img/course-img.webp",
        header: "Why Choose Our Online Memorize Quran Course?",
        paragraph: "It's easy to learn and remember the Quran online when you hire a qualified Quran tutor to teach. Every Muslim wants to learn the Holy Quran by heart, but most of our brothers and sisters can't because they are too busy or don't have enough help. ",
        post: "/WhyMemorizeQuran"
    },
    {
        image: "/img/course-img.webp",
        header: "Best Tips To Learn Online Arabic Fast",
        paragraph: "With every new dialect, there are ways to get ahead. When you study vocabulary, verb tenses, language, and sentence structure, use what you've learned a lot. You watch movies and listen to music in the new dialect, speak it whenever and as clearly as possible in different situations, and try to find locals to talk to.",
        post: "/BestTips"
    },
    {
        image: "/img/course-img.webp",
        header: "How to Memorize Quran Online? Tips To Follow",
        paragraph: "Having the Quran memorized and becoming a Hafiz In Islam, being able to read the Quran is a great honour that brings many good things in this life and the next. ",
        post: "/HowToMemorize"
    },
    {
        image: "/img/course-img.webp",
        header: "Why Is It Important For A Muslim To Learn Arabic?",
        paragraph: "Arabic is one of the top five most spoken languages, and learning it is a worthwhile endeavor. About 400 million people speak Arabic.",
        post: "/WhyAr"
    },
    {
        image: "/img/course-img.webp",
        header: "Why Should You Learn Arabic Online at Arabic Wave?",
        paragraph: "Learn Quran Online is where you can find the best Quran teachers who can teach you from afar. You don't have to go to a mosque or school to learn.",
        post: "/WhyARArabicWave"
    },
    {
        image: "/img/course-img.webp",
        header: "Why Is Adhan (Azaan) So Important For Muslims?",
        paragraph: "The call to prayer in Islam isn't just a way to show that you believe in Islam. It is also how a Muslim community lets the rest of the country know it is there. Adhan has been a part of the Islamic way of life for a long time.",
        post: "/WhyAdhan"
    }
]