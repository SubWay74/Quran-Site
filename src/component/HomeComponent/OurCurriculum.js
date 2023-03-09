import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from "../UI/Button";


export default function OurCurriculum() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5.3
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.3
        },
        tablet: {
        breakpoint: { max: 1024, min: 780 },
        items: 2.3
        },
        minTablet: {
        breakpoint: { max: 780, min: 480 },
        items: 1.7
        },
        mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1.3
        }
    };

    return(
        <section className="curriculum-sec">
            <header className="center">
                <h1>
                Our Curriculum
                </h1>
            </header>
            <Carousel responsive={responsive}>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum one</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Two</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Three</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Four</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Five</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Six</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Seven</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Eight</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Nine</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Ten</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Eleven</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Curriculum Twelve</h1>
                        <hr />
                        <p>Curriculum includes Quran</p>
                        <a href="####">View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" link="###" />
                    </div>
                </div>
            </Carousel>;
        </section>
    )
}