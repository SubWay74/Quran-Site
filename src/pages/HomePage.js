import React from "react";
import MainSection from "../component/HomeComponent/mainSection";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import OurFlagCourses from "../component/HomeComponent/Courses";
import AboutUs from "../component/HomeComponent/AboutUs";
import Certified from "../component/HomeComponent/Certified";
import Accurdion from "../component/HomeComponent/Accurdion";
import OurCurriculum from "../component/HomeComponent/OurCurriculum";
import LearnTajweed from "../component/HomeComponent/LearnTajweed";
import Table from "../component/HomeComponent/Table";
import Form from "../component/HomeComponent/Form";
import Footer from "../component/UI/Footer";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";



export default function HomePage() {
    return (
        <>
            <NavBar/>
            <AyahOfTheDay/>
            <WhatsAppBtn/>
            <MainSection/>
            <OurFlagCourses/>
            <AboutUs/>
            <Certified/>
            <Accurdion/>
            <OurCurriculum/>
            <LearnTajweed/>
            <Table/>
            <Form/>
            <Footer/>
        </>
    )
}