import React from "react";
import NavBar from "../component/UI/NavReact";
import Footer from "../component/UI/Footer";
import MiniMainSec from "../component/UI/MiniMainSec";
import BlogSec from "../component/BlogComponents/BlogSec";


export default function BlogPage() {
    return(
        <>
        <NavBar/>
        <MiniMainSec
            headClass="blog-bg"
            header="Arabic Wave Blog"
        />
        <BlogSec/>
        <Footer/>
        </>
    )
}