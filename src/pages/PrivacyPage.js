import React from "react";
import NavBar from "../component/UI/NavReact"
import MiniMainSec from "../component/UI/MiniMainSec"
import PrivacySec from "../component/PolicyComponents/PrivacySec";
import Footer from "../component/UI/Footer"


export default function PrivacyPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
            headClass="policy-bg"
            header="Privacy Policy"
            p="Your privacy is important to us."
        />
        <PrivacySec/>
        <Footer/>
        </>
    )
}