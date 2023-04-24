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

    const handleFileClick = (file) => {
        window.open(file)
    } 

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
                        <h1>Module-1</h1>
                        <hr />
                        <div className="card-p">
                        <p>Basic Introduction to Tajweed Ul Quran</p>
                        <p>Get completed كلمات</p>
                        <p>Test and evaluate your Tajweed.</p>
                        <p>8-15 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/1st-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module-2</h1>
                        <hr />
                        <div className="card-p">
                            <p>Structure of Tajweed </p>
                            <p>Get completed chapter number 3-4</p>
                            <p>Chapter - كلمات ماددا</p>
                            <p>Test and evaluation</p>
                            <p>10 -12 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/2nd-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -3</h1>
                        <hr />
                        <div className="card-p">
                            <p>Advance structure of Tajweed</p>
                            <p>Get completed chapter number 5-6</p>
                            <p>Chapter - کھڑا زیر, کھڑا زَبَر, حُرُوفِ لِین</p>
                            <p>Test and evaluation </p>
                            <p>14 -16 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/3rd-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -4</h1>
                        <hr />
                        <div className="card-p">
                            <p>Introduction to قَلْقَلَہ, تَشْدِید</p>
                            <p>Silent words.</p>
                            <p>Get completed chapter number 7,8,9</p>
                            <p>Exam for whole modules.</p>
                            <p>12 – 15 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/4th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -5</h1>
                        <hr />
                        <div className="card-p">
                            <p>Introduction to Advance level of Tajweed</p>
                            <p>Revision for 4 modules</p>
                            <p>Certificate level -1</p>
                            <p>9 -11 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/5th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -6</h1>
                        <hr />
                        <div className="card-p">
                            <p>Chapter اِکْفا, تَنْوِین, ن ساکِن</p>
                            <p>Practice on pronunciation</p>
                            <p>Get completed chapter number 10,12</p>
                            <p>10 -13 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/6th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -7</h1>
                        <hr />
                        <div className="card-p">
                            <p>Chapter اِقْلاب,اِظْہار,اِدْغام</p>
                            <p>Test and evaluate your Tajweed</p>
                            <p>Certificate Level -2</p>
                            <p>Get completed chapter 13, 14</p>
                            <p>10 -14 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/7th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module-8</h1>
                        <hr />
                        <div className="card-p">
                            <p>Deep understanding اِدْغام</p>
                            <p>Rules of part-1 part-2 ساکِن</p>
                            <p>Get completed chapter 15,16</p>
                            <p>11 -15 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/8th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module-9</h1>
                        <hr />
                        <div className="card-p">
                            <p>Deep learning on pauses – وَقف</p>
                            <p>Understand part-1 part-2 - رُمُوز</p>
                            <p>Basic test and evaluation for 9 modules</p>
                            <p>Get completed chapter 17,18</p>
                            <p>11 -15 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/9th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -10</h1>
                        <hr />
                        <div className="card-p">
                            <p>Deep learning on - ن قُطنی</p>
                            <p>Special test and evaluation for 10 modules</p>
                            <p>Get completed chapter -19,20</p>
                            <p>Detailed practices </p>
                            <p>12 - 15 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/10th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module-11</h1>
                        <hr />
                        <div className="card-p">
                            <p>Rules of مدّ, part-1 to part-4 and حروُف مُقطَّعات</p>
                            <p>Detailed Practices</p>
                            <p>Get completed chapter 20,21</p>
                            <p>11 -15 Classes</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/11th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>Module -12</h1>
                        <hr />
                        <div className="card-p">
                            <p>Test and evaluation all 12 modules</p>
                            <p>Complete Tajweed UI Quran Practice</p>
                            <p>Test your Tajweed UI Quran</p>
                            <p>Final Exam on Tajweed Ul Quran</p>
                            <p>Get Certificate completed Leve-3</p>
                        </div>
                    </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/12th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    <div className="card-learn center">
                        <h1>$21</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
            </Carousel>;
        </section>
    )
}