import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MainSec from "../component/AboutUsComponent/MainSec";
import AboutUs from "../component/HomeComponent/AboutUs";
import ThirdSec from "../component/AboutUsComponent/ThrdSec";
import OurValues from "../component/AboutUsComponent/OurValuesSec";
import WhyUs from "../component/AboutUsComponent/WhyUsSec";
import Footer from "../component/UI/Footer";


export default function AboutUsPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <MainSec/>
        <AboutUs/>
        <ThirdSec/>
        <OurValues/>
        <WhyUs/>
        <Footer/>
        </>
    )
}