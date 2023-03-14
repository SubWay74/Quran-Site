import React from "react";
import NavBar from "../component/UI/NavReact";
import MiniMainSec from "../component/UI/MiniMainSec";
import JoinAsTeacherSec from "../component/FormComponents/JoinAsTeacherSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Join As A Teacher"
        />
        <JoinAsTeacherSec/>
        <Footer/>
        </>
    )
}