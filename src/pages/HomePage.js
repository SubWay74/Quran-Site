import React from "react";
import MainSection from "../component/HomeComponent/mainSection";
import NavBar from "../component/UI/NavReact";
import OurFlagCourses from "../component/HomeComponent/Courses";
import AboutUs from "../component/HomeComponent/AboutUs";
import Certified from "../component/HomeComponent/Certified";
import Accurdion from "../component/HomeComponent/Accurdion";
import OurCurriculum from "../component/HomeComponent/OurCurriculum";
import LearnTajweed from "../component/HomeComponent/LearnTajweed";

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <MainSection/>
            <OurFlagCourses/>
            <AboutUs/>
            <Certified/>
            <Accurdion/>
            <OurCurriculum/>
            <LearnTajweed/>
        </div>
    )
}