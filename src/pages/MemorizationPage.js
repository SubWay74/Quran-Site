import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import MemorizationSec from "../component/LearnComponents/MemorizationSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Memorization Ul-Quran"
                        p="8 Years to NO age bar"
        />
        <MemorizationSec/>
        <Footer/>
        </>
    )
}