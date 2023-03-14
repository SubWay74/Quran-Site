import React from "react";
import NavBar from "../component/UI/NavReact";
import MiniMainSec from "../component/UI/MiniMainSec";
import BookFreeTrailSec from "../component/FormComponents/BookFreeTrailSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Book A Free Trail"
        />
        <BookFreeTrailSec/>
        <Footer/>
        </>
    )
}