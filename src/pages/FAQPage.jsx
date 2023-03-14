import React from "react";
import NavBar from "../component/UI/NavReact"
import MiniMainSec from "../component/UI/MiniMainSec"
import FAQSec from "../component/PolicyComponents/FAQSec"
import Footer from "../component/UI/Footer"


export default function PrivacyPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
            headClass="policy-bg"
            header="Frequently Asked Questions"
        />
        <FAQSec/>
        <Footer/>
        </>
    )
}