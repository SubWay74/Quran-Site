import React from "react";
import NavBar from "../component/UI/NavReact";
import MiniMainSec from "../component/UI/MiniMainSec";
import TajweedSec from "../component/LearnComponents/TajweedSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Tajweed Ul-Quran"
                        p="8 Years to NO age bar"
        />
        <TajweedSec/>
        <Footer/>
        </>
    )
}