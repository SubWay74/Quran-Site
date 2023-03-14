import React from 'react';
import Button from '../UI/Button';

export default function CoursesSection() {
    return (
        <>
            <section className='course-sec'>
                <div className='course-container center'>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Learn Arabic
                                <img src="/img/AR-icon.webp" alt="" />  
                            </h1>

                        </header>
                        <div>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <Button name="Learn More" to="/blog/learn-arabic"/>
                        </div>
                    </div> 
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                </div>
                <div className='course-container center'>
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Tajweel Ul-Quran
                                <img src="/img/AR-icon.webp" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <Button name="Learn More" to="/blog/tajweed"/>
                        </div>
                    </div> 
                </div>
                <div className='course-container center'>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Memorizatin Ul-Quran
                                <img src="/img/AR-icon.webp" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <Button name="Learn More" to="/blog/memorization"/>
                        </div>
                    </div> 
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                </div>
                <div className='course-container center'>
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Learn Urdu
                                <img src="/img/AR-icon.webp" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <Button name="Learn More" to="/blog/learn-urdu"/>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}