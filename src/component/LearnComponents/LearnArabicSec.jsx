import React from "react";
import OurFlagCourses from "../HomeComponent/Courses";

export default function LearnArabicSec() {
    return(
        <>
        <section className="learn-sec">
            <div className="center learn-first-sec">
                <p>
                    Your privacy is important to us. It is iCodejr's policy to respect your privacy regarding any information we may collect from you across our website, https://arabicwave.com, and other sites we own and operate.
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                    We don't share any personally identifying information publicly or with third-parties, except when required to by law.
                    Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                </p>
                <img src="/img/about-us-img.webp" alt="" />
            </div>
            <p className="learn-sec-sec">
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us
            </p>
            <OurFlagCourses/>
        </section>
        </>
    )
}