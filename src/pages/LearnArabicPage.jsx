import React from "react";
import NavBar from "../component/UI/NavReact";
import MiniMainSec from "../component/UI/MiniMainSec";
import LearnArabicSec from "../component/LearnComponents/LearnArabicSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Learn Arabic"
                        p="8 Years to NO age bar"
        />
        <LearnArabicSec/>
        <Footer/>
        </>
    )
}