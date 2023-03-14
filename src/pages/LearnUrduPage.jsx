import React from "react";
import NavBar from "../component/UI/NavReact";
import MiniMainSec from "../component/UI/MiniMainSec";
import LearnUrduSec from "../component/LearnComponents/LearnUrdu";
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Learn Urdu"
                        p="8 Years to NO age bar"
        />
        <LearnUrduSec/>
        <Footer/>
        </>
    )
}