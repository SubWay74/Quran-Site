import React, {useState} from "react";
import Popup from "../UI/Popup";

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
                    <h1>{item.header}</h1>
                    <p>{item.paragraph}</p>
                    <button className="btn" onClick={() => handleOpen(i)}>
                        <span>Read More</span>
                    </button>
                    <Popup
                        open={openList[i]}
                        onClose={() => handleOpen(i)}
                        h1={item.header}
                        p={item.paragraph}
                        img={item.image}
                    />
                    </div>
            ))}
            </section>
        </>
    )
}

const blogArr = [
    {
        image: "/img/course-img.webp",
        header: "Why learning Arabic is Important",
        paragraph: "fa"
    },
    {
        image: "/img/course-img.webp",
        header: "Why learning Arabic0000000 is Important",
        paragraph: "Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn... Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn..."
    },
    {
        image: "/img/course-img.webp",
        header: "Why learning Arabic00000000 is Important",
        paragraph: "Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn... Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn..."
    },
    {
        image: "/img/course-img.webp",
        header: "Why learning Arabic is Important",
        paragraph: "Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn... Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn..."
    },
    {
        image: "/img/course-img.webp",
        header: "Why learning Arabic is Important",
        paragraph: "Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn... Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn..."
    },
    {
        image: "/img/course-img.webp",
        header: "Why learning Arabic is Important",
        paragraph: "Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn... Why Learning Arabic is Important Arabic is one of the most widely spoken languages in the world and an important language to learn..."
    }
]